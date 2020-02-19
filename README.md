
Este projeto foi iniciado com [Create React App](https://github.com/facebook/create-react-app).

## Sheetgo Virtual Bookshelf Project

Aplicativo de inserção, edição e controle de livros, sendo eles podendo ser categorizados por: Lidos, quero ler e estou lendo.

- [Instalação](#instalação)
- [Iniciando o projeto](#Iniciando-o-projeto)
- [Api](#api)
- [Metodologia BEM](#metodologia-bem)

### Instalação

Após clonar este repositório e acessar a pasta do projeto, instale todas as dependências com:
```sh
npm install
```

### Iniciando o projeto

Após a instalação do projeto, execute o seguinte comando para iniciar:
```sh
npm start
```

### Api
Todos os dados do projeto são armazenados em localStorage e manipulados através de uma `api`, localizado na raiz do projeto com nome `api.js`. O intuíto de uso do mesmo, se faz devido a centralização de manipulação e busca de dados inseridos.


### Metodologia BEM
Todo o visual foi desenvolvido utilizando metologia BEM, para auxiliar na escrita de um SASS/CSS mais inteligente, código reutilizável e sustentável. Além de convenções de nomeação, tornando mais informativo e fácil de entender.



