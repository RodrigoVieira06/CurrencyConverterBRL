<p align="center">
  <img src="public/assets/images/logo.svg" alt="Logo do Projeto" width=500>
</p>

# Bem vindo ao sistema de conversão de moedas (BRL) 🚀

Este é um sistema desenvolvido com a finalidade de atender o teste de proficiência
em tecnologias Front-End da empresa Frete Rápido. Nele, você irá encontrar uma uma
interface limpa contendo a conversão da moeda Real Brasileiro (BRL), para 3 outras
moedas: Dólar Canadense (CAD), Peso Argentino (ARS) e Libra Esterlina (GBP). Além
disso, cada conversão contará com sua variação (em porcentagem) e o tempo de
atualização, onde as inforamções são atualizadas a cada 3 minutos pela plataforma.

# Índice 📝

- [Introdução](#primeiros-passos-🏗️)
- [Conhecendo o projeto](#conhecendo-o-projeto-📖)
  - [Estrutura de pastas](#estrutura-de-pastas-🏛️)

# Primeiros passos 🏗️

Para iniciar o projeto, é importante que seu ambiente de desenvolvimento esteja
devidamente configurado, contendo a instalação do docker, git e a configuração de
ssh no git e github. Caso precise configurar, acesse a [documentação de configuração
de ambiente](docs/configuracaoDeAmbiente.md).

Após configurar o ambiente, vamos realizar o download do projeto. Abra o terminal
vá até o deretório desejado e realize o clone via SSH da seguinte forma:

```
  git clone git@github.com:RodrigoVieira06/freteRapidoTest-CurrencyConverterBRL.git
```

Em seguida, vamos construir a imagem docker antes de iniciar a aplicação com o 
comando:
```
 make build
```

Por fim, podemos iniciar a imagem criada com o comando:
```
 make run
```

Esses comandos "make" irão executar comandos docker automaticamente, facilitando a 
inicialização do sistema.

Antes de realizar um novo pull request, certifique-se de que os testes conitnuam
funcionando, utilizando o comando:
```
  ng test
```

# Conhecendo o projeto 📖

Esta aplicação foi desenvolvida com Angular 18 (útlima versão disponibilizada no 
momento do desenvolvimento), além de estilizações com SCSS e uso de padrões com a lib 
RxJS para as requisições e atualização de dados. Além disso, o app está em um container
docker, para auxiliar que outros desewnvolvedores possam atuar em novas features e 
correções sem se preocupar com seu ambiente de trabalho. O projeto conta também com 
testes de unidade utilizando Karma e Jasmine, garantindo que as funcionalidades estejam
funcionando sempre que um novo commit for realizado.

<div align="center">
  <img alt="Angular" src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white">
  <img alt="SASS" src="https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white">
  <img alt="SASS" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="SASS" src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white">
  <img alt="SASS" src="https://img.shields.io/badge/-Jasmine-%238A4182?style=for-the-badge&logo=Jasmine&logoColor=white">
  <img alt="SASS" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">
  <img alt="SASS" src="https://img.shields.io/badge/CMake-%23008FBA.svg?style=for-the-badge&logo=cmake&logoColor=white">
</div>

## Estrutura de pastas 🏛️

Abaixo, está o modelo da estrutura dos diretórios do projeto.

```
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
