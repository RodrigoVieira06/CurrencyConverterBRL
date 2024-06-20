# Como configurar seu ambiente de trabalho

Este documento fornece as instruções necessárias para configurar o ambiente de desenvolvimento para o projeto Currency converter. Siga os passos abaixo para instalar as ferramentas necessárias e configurar o ambiente corretamente.

## Pré-requisitos

Antes de começar, certifique-se de que você tem acesso administrativo no seu sistema para instalar os softwares necessários.

## 1. Instalação do Git

Git é um sistema de controle de versão distribuído. Você pode instalar o Git seguindo as instruções abaixo:

### Windows

1. Baixe o instalador do Git em: [git-scm.com](https://git-scm.com/download/win)
2. Execute o instalador e siga as instruções na tela.

### Linux

1. Abra o terminal e execute o comando apropriado para sua distribuição:

   **Ubuntu/Debian**:

   ```sh
   sudo apt-get update
   sudo apt-get install git
   ```

   **Fedora**:

   ```sh
   sudo dnf install git
   ```

2. Configure seu nome de usuário e endereço de e-mail no Git. Isso é importante para que suas contribuições sejam identificadas corretamente nos commits. Substitua com seu nome e seu email:

   ```sh
   git config --global user.name "Seu Nome"
   git config --global user.email "seu_email@example.com"
   ```

## 2. Configuração de SSH

Para clonar repositórios usando SSH, você precisa gerar uma chave SSH e adicioná-la à sua conta GitHub.

### Gerar uma chave SSH

1. Abra o terminal.

2. Execute o seguinte comando para gerar uma nova chave SSH (substitua "your_email@example.com" pelo seu e-mail):

   ```sh
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

   Se você estiver usando uma versão mais antiga do OpenSSH, use:

   ```sh
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

3. Pressione Enter para aceitar o local padrão do arquivo.

4. Digite uma senha segura quando solicitado (opcional, mas recomendado).

### Adicionar a chave SSH ao agente SSH

1. Inicie o agente SSH:

   ```sh
   eval "$(ssh-agent -s)"
   ```

2. Adicione sua chave SSH ao agente:

   ```sh
   ssh-add ~/.ssh/id_ed25519
   ```

   Ou para RSA:

   ```sh
   ssh-add ~/.ssh/id_rsa
   ```

### Adicionar a chave SSH ao GitHub

1. Copie o conteúdo da chave SSH para a área de transferência:

   ```sh
   cat ~/.ssh/id_ed25519.pub
   ```

   Ou para RSA:

   ```sh
   cat ~/.ssh/id_rsa.pub
   ```

2. Vá para GitHub, acesse Settings > SSH and GPG keys > New SSH key.

3. Cole a chave SSH no campo "Key" e dê um título descritivo.

4. Clique em Add SSH key.

## 3. Instalação do Docker

Docker é uma plataforma para desenvolver, enviar e executar aplicações dentro de contêineres. Siga as instruções abaixo para instalar o Docker:

### Windows

1. Baixe e instale o Docker Desktop em: [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
2. Siga as instruções na tela para completar a instalação.
3. Após a instalação, abra o Docker Desktop e certifique-se de que ele está em execução.

### Linux

1. Abra o terminal e execute os seguintes comandos para instalar o Docker:

   **Ubuntu/Debian**:

   ```sh
   sudo apt-get update
   sudo apt-get install \
       ca-certificates \
       curl \
       gnupg \
       lsb-release
   ```

   ```sh
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

   ```sh
   echo \
   "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

   ```sh
   sudo apt-get update
   sudo apt-get install docker-ce docker-ce-cli containerd.io
   sudo usermod -aG docker $USER
   ```

   **Fedora**:

   ```sh
   sudo dnf -y install dnf-plugins-core
   sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
   sudo dnf install docker-ce docker-ce-cli containerd.io
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker $USER
   ```

2. Reinicie seu computador para aplicar as alterações de grupo de usuários.

## 4. Instalação do Make

Make é uma ferramenta de automação de compilação que ajuda a gerenciar tarefas comuns de desenvolvimento.

### Windows

1. Baixe e instale o Make para Windows em: [ezwinports](http://gnuwin32.sourceforge.net/packages/make.htm)
2. Adicione o caminho do `make.exe` ao PATH do sistema.

### Linux

1. Abra o terminal e execute o comando apropriado para sua distribuição:

   **Ubuntu/Debian**:

   ```sh
   sudo apt-get update
   sudo apt-get install build-essential
   ```

   **Fedora**:

   ```sh
   sudo dnf install make
   ```

## 5. Instalação do Node.js e Yarn

Para o projeto Currency Converter, é necessário ter o Node.js na versão 18.19.1 ou superior. Vamos instalar o Node.js e o Yarn a seguir.

### Instalação do Node.js

#### Windows

1. Baixe o instalador do Node.js em: nodejs.org
2. Execute o instalador e siga as instruções na tela para instalar o Node.js.

#### Linux

1. Abra o terminal e execute os seguintes comandos para instalar o Node.js:

   **Ubuntu/Debian**:

   ```sh
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

   **Fedora**:

   ```sh
   curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
   sudo dnf install -y nodejs
   ```

2. Verifique a versão instalada do Node.js:

   ```sh
   node -v
   ```

   Certifique-se de que a versão instalada é 18.19.1 ou superior.

### Instalação do Yarn

O Yarn é um gerenciador de pacotes que melhora o fluxo de trabalho de desenvolvimento com Node.js.

#### Windows

1. Abra o terminal e execute o seguinte comando para instalar o Yarn globalmente:

   ```sh
   npm install -g yarn
   ```

#### Linux

1. Abra o terminal e execute os seguintes comandos para instalar o Yarn:

   **Ubuntu/Debian**:

   ```sh
   curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
   echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
   sudo apt-get update
   sudo apt-get install yarn
   ```

   **Fedora**:

   ```sh
   curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
   sudo dnf install yarn
   ```

2. Verifique a instalação do Yarn:

   ```sh
   yarn --version
   ```

Agora você está pronto para configurar e iniciar o desenvolvimento do projeto Currency Converter. Certifique-se de seguir todas as instruções cuidadosamente para garantir que seu ambiente de desenvolvimento esteja configurado corretamente.
