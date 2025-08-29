const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const fs = require('fs');

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow;
let backendProcess;

const createWindow = () => {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    },
    icon: path.join(__dirname, 'icon.ico')
  });

  // Load the Next.js app - check if we're in development or production
  const isDev = !app.isPackaged;
  
  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
  } else {
    mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));
  }

  // Open external links in default browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // Handle navigation to external URLs
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('http://localhost:3000')) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });
};

// Start the backend server
const startBackend = () => {
  const isDev = !app.isPackaged;
  
  let backendPath, pythonPath, scriptPath;
  
  if (isDev) {
    // Development paths
    backendPath = path.join(__dirname, 'backend');
    pythonPath = path.join(backendPath, 'venv', 'Scripts', 'python.exe');
    scriptPath = path.join(backendPath, 'main.py');
  } else {
    // Production paths (packaged app)
    backendPath = path.join(process.resourcesPath, 'backend');
    pythonPath = 'python'; // Use system Python in production
    scriptPath = path.join(backendPath, 'main.py');
  }

  // Check if backend files exist
  if (!fs.existsSync(scriptPath)) {
    console.error('Backend script not found:', scriptPath);
    return;
  }

  console.log('Starting backend with:', { pythonPath, scriptPath, backendPath });

  backendProcess = spawn(pythonPath, [scriptPath], {
    cwd: backendPath,
    env: { 
      ...process.env, 
      PYTHONPATH: backendPath,
      PYTHONUNBUFFERED: '1'
    }
  });

  backendProcess.stdout.on('data', (data) => {
    console.log(`Backend stdout: ${data}`);
  });

  backendProcess.stderr.on('data', (data) => {
    console.error(`Backend stderr: ${data}`);
  });

  backendProcess.on('close', (code) => {
    console.log(`Backend process exited with code ${code}`);
  });

  backendProcess.on('error', (error) => {
    console.error('Failed to start backend:', error);
  });
};

// Kill backend process when app quits
const killBackend = () => {
  if (backendProcess) {
    backendProcess.kill();
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  startBackend();
  
  createWindow();

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    killBackend();
    app.quit();
  }
});

app.on('before-quit', () => {
  killBackend();
});