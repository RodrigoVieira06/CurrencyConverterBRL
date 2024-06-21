<p align="center">
  <img src="public/assets/images/logo.svg" alt="Logo do Projeto" width=500>
</p>

# Bem vindo ao sistema de conversão de moedas - Por Rodrigo Vieira 🚀

Este é um sistema desenvolvido com a finalidade de atender o teste de proficiência
em tecnologias front-end da empresa Frete Rápido. Nele, você irá encontrar uma
interface limpa contendo a conversão da moeda Real Brasileiro (BRL), para 3 outras
moedas: Dólar Canadense (CAD), Peso Argentino (ARS) e Libra Esterlina (GBP). Além
disso, cada conversão contará com sua variação (em porcentagem) e o tempo de
atualização, onde as informações são atualizadas a cada 3 minutos pela plataforma.

## Índice 📝

- [1. Primeiros passos](#primeiros-passos)
- [2. Conhecendo o projeto](#conhecendo-o-projeto)
  - [2.1. Estrutura de pastas](#estrutura-de-pastas)
- [3. Construir e rodar o projeto com o Docker](#construir-e-rodar-o-projeto-com-o-docker)
  - [3.1. Construir o contêiner Docker](#construir-o-contêiner-docker)
  - [3.2. Rodar o contêiner Docker](#rodar-o-contêiner-docker)
  - [3.3. Parar a imagem Docker](#parar-a-imagem-docker)
- [4. Desenvolvimento e testes](#desenvolvimento-e-testes)
- [5. Conclusão](#conclusão)
- [6. Referências](#referências)

## Primeiros passos

Para iniciar o projeto, é importante que seu ambiente de desenvolvimento esteja
devidamente configurado, contendo a instalação do docker, git e a configuração de
ssh no git e github. Caso precise configurar, acesse a [documentação de configuração
de ambiente](docs/configuracaoDeAmbiente.md).

Após configurar o ambiente, vamos realizar o download do projeto. Abra o terminal
vá até o diretório desejado e realize o clone via SSH e vá até a pasta principal
da seguinte forma:

```sh
git clone git@github.com:RodrigoVieira06/freteRapidoTest-CurrencyConverterBRL.git
cd /freteRapidoTest-CurrencyConverterBRL
```

Com o repositorio em mãos, podemos dar início a construção e execução da imagem docker e 
instalação do node_modules da aplicação. Com os comandos do Makefile, iremos resumir da
seguinte forma:

```sh
make all
```

Caso já tenha a imagem construída, basta usar:
```sh
make run
```

### Observações

1. Caso tenha algum problema com a utilização do make, adicione ``sudo``
no começo de cada comando.

2. O comando run irá iniciar o contêiner em segundo plano.

Para entender melhor os comandos make, vá até o tópico 
[Construir e Rodar o Projeto com Docker](#construir-e-rodar-o-projeto-com-o-docker).

## Conhecendo o projeto

Esta aplicação foi desenvolvida com Angular 18 (útlima versão disponibilizada no
momento do desenvolvimento), além de estilizações com SCSS e uso de padrões com a lib
RxJS para as requisições e atualização de dados. Além disso, o app está em um contêiner
docker, para auxiliar que outros desenvolvedores possam atuar em novas features e
correções sem se preocupar com seu ambiente de trabalho. O projeto conta também com
testes de unidade utilizando Karma e Jasmine, garantindo que as funcionalidades estejam
funcionando sempre que um novo commit for realizado.

<div align="center">
  <img alt="Angular" src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white">
  <img alt="RxJS" src="https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white">
  <img alt="Typescript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="SASS" src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white">
  <img alt="Jasmine" src="https://img.shields.io/badge/-Jasmine-%238A4182?style=for-the-badge&logo=Jasmine&logoColor=white">
  <img alt="Docker" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">
</div>

### Estrutura de pastas

Abaixo, está o modelo da estrutura dos diretórios do projeto.

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

Você pode entender detalhadamente a estrutura de diretórios utilizada acessando a
[documentação de estrutura do projeto](docs/estruturaDoProjeto.md).

## Construir e rodar o projeto com o Docker

Para este projeto, foi utilizado o Makefile, pelos seguintes motivos:

- Simplicidade: Simplifica a execução de comandos Docker longos e complexos.
- Automação: Facilita a automação de tarefas comuns de desenvolvimento e deployment.
- Manutenibilidade: Facilita a manutenção e documentação dos comandos necessários para o seu projeto.

Eles disparam comandos docker para as finalidades abaixo:

### Construir o contêiner Docker

Para construir a imagem Docker do projeto, execute o seguinte comando no terminal:

```sh
make build
```

### Rodar o contêiner Docker

Para rodar o contêiner Docker do projeto, execute:

```sh
make run
```

Caso já tenha construído a imagem, basta utilizar este comando que sua aplicação já
estará disponível.

### Construir e rodar o contêiner Docker

Caso deseje construir e rodar o contêiner logo em seguida:

```sh
make all
```

Este comando utiliza os comandos ``make build`` e ``make run`` em sequência.

### Parar a imagem Docker

Para parar a imagem docker em execução:

```sh
make stop
```

## Desenvolvimento e testes

Durante o desenvolvimento, você pode usar o comando make run para iniciar a aplicação Angular dentro de um contêiner Docker. A aplicação estará disponível em ``http://localhost:4200``.

Certifique-se de que todos os testes estão passando antes de enviar alterações para o repositório. Use o comando de teste a seguir:

```sh
ng test
```

## Conclusão

Você configurou com sucesso seu ambiente de desenvolvimento. Se tiver qualquer problema ou dúvida, consulte a documentação oficial das ferramentas utilizadas ou entre em contato com a equipe de desenvolvimento.

Let's code! 👨🏻‍💻👩🏻‍💻

## Referências

Para consultar as referências utilizadas para as documentações desse projeto,
acesse o arquivo [Referências da documentação](docs/referenciasDaDocumentacao.md)
