# Projeto Aplicativo React 16+ com Spring Boot, Hibernate, Microsoft SQL

## Descrição do projeto

Projeto Java + ReactJS web full-stack que é um aplicativo básico de gerenciamento de funcionários com recursos CRUD:

- Listar | GET | `localhost:8080/api/v1/funcionarios/listar` | Status Code (200 (OK)) | Busca todos os funcionários
- Criar | POST | `localhost:8080/api/v1/funcionarios/criar` | Status Code (201 (OK)) | criar um novo funcionário
- Buscar | GET | `localhost:8080/api/v1/funcionarios/{id}` | Status Code (200 (OK)) | Buscar funcionário
- Editar | PUT | `localhost:8080/api/v1/funcionarios/{id}` | Status Code (200 (OK)) | Atualizar funcionário
- Excluir | DELETE | `localhost:8080/api/v1/funcionarios/{id}` | Status Code (204 (No Content)) | Deletar funcionário

## Antes de iniciar

Verifique o ambiente com os seguintes parâmetros:

## Ferramentas e tecnologias do lado do cliente usadas

- React 16+
- Importante - use o react-router-dom 5.x
- Modern JavaScript (ES6)
- NodeJS 14+ and Yarn
- VS Code IDE
- Create React App CLI
- Bootstrap 4.x and Axios HTTP Library

Bora ao projeto, entra na pasta frontend e execute:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
