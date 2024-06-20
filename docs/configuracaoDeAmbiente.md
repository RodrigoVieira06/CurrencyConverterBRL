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

## 2. Instalação do Docker

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
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
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

## 3. Instalação do Make

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