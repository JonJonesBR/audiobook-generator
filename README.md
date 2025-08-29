# 🔊 LiVox

Transforme seus documentos e e-books em audiobooks com vozes naturais e de alta qualidade usando tecnologia de ponta.

## 🎯 Para Iniciantes

> 🎯 **Modo Fácil: Comece em 2 Cliques!**

Com o LiVox, transformar seus documentos em audiobooks é simples!

**O que você precisa:**

*   Um computador com Windows 10 ou superior.
*   Conexão com a internet.

**Como começar:**

1.  **Baixe o LiVox:** [Clique aqui para baixar o LiVox](https://github.com/JonJonesBR/LiVox/archive/refs/heads/main.zip).
2.  **Descompacte o arquivo:** Após o download, descompacte o arquivo ZIP.
3.  **No Windows:** Dê um clique duplo no arquivo `start-local.bat`.

O programa fará o resto! Ele irá:

*   Verificar se tudo está instalado.
*   Instalar o que for necessário (como o FFmpeg).
*   Abrir o programa no seu navegador.

**Pronto!** Agora é só seguir as instruções na tela para criar seu audiobook.

**Dica:** Na primeira vez, pode demorar um pouco para baixar tudo. Seja paciente!

## 🌟 Recursos Principais

*   **Vozes Naturais:** Ouça seus documentos com vozes que parecem humanas.
*   **Vários Formatos:** Funciona com PDF, TXT, EPUB, DOC e DOCX.
*   **Otimização com IA (Opcional):** Use a inteligência artificial para melhorar o texto.

## 📖 Como Usar (Passo a Passo)

1.  **Abra o LiVox:** O programa abre automaticamente no seu navegador (geralmente em http://localhost:3000).
2.  **Selecione o Arquivo:** Clique em "Escolher arquivo" e selecione o documento que você quer transformar em audiobook.
3.  **Escolha a Voz:** Selecione uma das vozes em português disponíveis.
4.  **Configure (Opcional):**
    *   Adicione um título para o seu audiobook.
    *   Ative a IA Gemini para melhorar o texto.
5.  **Gere o Audiobook:** Clique em "Gerar Audiobook".
6.  **Acompanhe o Progresso:** Veja o status da conversão na tela.
7.  **Baixe o Resultado:** Quando o processo terminar, o download do audiobook começará automaticamente.

## 🛑 Como Parar o Programa

*   **No Windows:** Execute o arquivo `stop-local.bat` ou feche as janelas do terminal que apareceram.
*   **No Linux/Mac:** Pressione Ctrl+C nas janelas do terminal.

## ❓ Dúvidas?

Se você tiver algum problema, aqui estão algumas dicas:

*   **O programa não abre:** Na primeira vez, pode demorar um pouco para baixar e instalar tudo. Espere alguns minutos e verifique se há alguma janela do terminal aberta.
*   **Mensagem "Porta já em uso":** Outro programa está usando a mesma porta que o LiVox precisa. Tente executar `stop-local.bat` ou reiniciar o computador.
*   **Outros problemas:** Se você encontrar outros problemas, siga as instruções na tela ou consulte a seção para programadores para obter mais informações sobre como solucionar problemas.

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ para a comunidade de audiobooks

## 👨‍💻 Para Programadores

### Estrutura do Projeto

-   **frontend/**: Código do frontend (Next.js)
-   **backend/**: Código do backend (Python, Flask)
-   **build/**: Arquivos gerados pelo processo de build
-   **backend/audiobooks/**: Arquivos de áudio gerados
-   **backend/uploads/**: Arquivos de upload
-   **start-*.bat/sh**: Scripts para iniciar e parar o projeto

### Como Configurar o Ambiente de Desenvolvimento

**Pré-requisitos:**

*   Node.js e npm (ou yarn)
*   Python 3.x
*   Docker (opcional)
*   FFmpeg (necessário para conversão de áudio)

**Passos:**

1.  **Instale as dependências:**
    *   No diretório `frontend/`, execute `npm install` ou `yarn install`.
    *   No diretório `backend/`, execute `pip install -r requirements.txt`.
2.  **Configure as variáveis de ambiente:**
    *   Crie um arquivo `.env.local` no diretório `frontend/`.
    *   Adicione as variáveis necessárias, como:
        ```
        NEXT_PUBLIC_API_URL=http://localhost:8000
        ```

### Como Executar o Projeto

1.  **Backend:** No diretório `backend/`, execute `python main.py`.
2.  **Frontend:** No diretório `frontend/`, execute `npm run dev` ou `yarn dev`.
3.  Acesse o frontend em http://localhost:3000.

### Como Contribuir

1.  **Faça um fork do repositório.**
2.  **Crie uma branch para sua feature:** `git checkout -b minha-feature`
3.  **Faça suas alterações e commit:** `git commit -m "Adicionei minha feature"`
4.  **Envie suas alterações para a branch:** `git push origin minha-feature`
5.  **Crie um Pull Request no GitHub.**

### Tecnologias Utilizadas

*   **Frontend:** Next.js, React, shadcn/ui
*   **Backend:** Python, Flask, Microsoft Edge TTS, Google Gemini (opcional)
*   **Banco de Dados:** Nenhum (arquivos locais)
*   **Containerização:** Docker

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ para a comunidade de audiobooks
