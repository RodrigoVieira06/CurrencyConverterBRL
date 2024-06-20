# Estrutura de diretórios e arquivos do projeto

Esta documentação descreve a estrutura do projeto Currency converter, detalhando o propósito e o conteúdo de cada diretório e arquivo.

```sh
/
├── docs/
├── node_modules/
├── public/
│   ├── assets/
|   |   ├── animations/
|   |   └── scss/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   └── home/
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   |   ├── currency-card/
│   │   │   |   └── header/
│   │   │   ├── services/
│   │   │   |   └── currency/
|   │   │   ├── types/
|   │   │   └── utils/
│   |   ├── app.component.html
│   |   ├── app.component.scss
│   |   ├── app.component.spec.ts
│   |   ├── app.component.ts
│   |   ├── app.config.ts
│   |   └── app.routes.ts
│   ├── environments/
│   ├── index.html
│   ├── main.server.ts
│   ├── main.ts
│   └── styles.scss
├── .editorconfig
├── .gitignore
├── angular.json
├── dockerfile
├── makefile
├── package-lock.json
├── package.json
├── README.md
├── server.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── yarn.lock
```

## Principais diretórios
- docs/: Diretório para documentação adicional do projeto.
- node_modules/: Contém todas as dependências do Node.js instaladas para o projeto.
- public/: Diretório para arquivos públicos acessíveis diretamente.
  - assets/: Contém recursos estáticos, como imagens, fontes e estilos.
  - animations/: Diretório para animações utilizadas no projeto.
- src/: Diretório principal do código fonte da aplicação Angular.
  - app/: Contém os arquivos e diretórios principais da aplicação.
    - pages/: Diretório para componentes de páginas da aplicação.
    - shared/: Diretório para componentes, serviços, tipos e utilitários compartilhados.
  - environments/: Diretório para arquivos de configuração de ambiente (desenvolvimento e produção).

## Arquivos de configuração e metadata
- .editorconfig: Configurações para editores de texto compatíveis.
- .gitignore: Lista de arquivos e diretórios a serem ignorados pelo Git.
- angular.json: Configurações específicas do Angular CLI.
- dockerfile: Arquivo de configuração para criar uma imagem Docker da aplicação.
- makefile: Arquivo para automação de tarefas utilizando Make.
- package-lock.json: Arquivo de bloqueio de versões das dependências do Node.js.
- package.json: Metadados do projeto e lista de dependências do Node.js.
- README.md: Documentação inicial do projeto.
- server.ts: Código do servidor para renderização do lado do servidor.
- tsconfig.app.json: Configurações de compilação TypeScript para a aplicação.
- tsconfig.json: Configurações globais de compilação TypeScript.
- tsconfig.spec.json: Configurações de compilação TypeScript para testes.

## Arquivos de dependências
- yarn.lock: Arquivo de bloqueio de versões das dependências gerenciado pelo Yarn.
