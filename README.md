## Instalação

Clonar o repositório

```bash
  git clone [repositório](https://github.com/Leokrindges/api-cadastro-de-jogadores/)
```

Instalar as depêndencias do projeto

```bash
  yarn install | npm install
```

Iniciar o projeto

```bash
  yarn run dev | yarn dev | npm run dev
```

## Documentação da API

Essa api foi desenvolvida para fazer a listagem, cadastro, busca e exclusão de jogadores de times de futebol.

## URL base
http://localhost:8080/


#### Login
```http
  POST /login/
```

| Parâmetro   | Tipo               | Descrição                                   |
| :---------- | :----------------- | :------------------------------------------ |
| `email`        | `string`           | **Obrigatório**. email do usuário |
| `senha`       | `String`           | **Obrigatório**. senha do usuário |


#### Criar um usuário

```http
  POST /novaconta/
```

| Parâmetro   | Tipo               | Descrição                                   |
| :---------- | :----------------- | :------------------------------------------ |
| `nome`        | `string`           | **Obrigatório**. nome do usuário |
| `email`       | `String`           | **Obrigatório**. email do usuário |
| `senha `      | `string`           | **Obrigatório**. senha do usuário |

#### Busca um usuário

```http
  GET /usuarios/
```

#### Retorna uma lista de todos os times com seus devidos jogadores cadastrados, sendo possivel passar um parametro opcional para busca.

```http
  GET /times/?nomeTime=
```

| Parâmetro   | Tipo               | Descrição                                   |
| :---------- | :----------------- | :------------------------------------------ |
| `nomeTime`        | `string`           | **Opcional**. nome do time |


#### Criar um time

```http
  POST /times/
```

| Parâmetro   | Tipo               | Descrição                                   |
| :---------- | :----------------- | :------------------------------------------ |
| `idUsuario`        | `string`           | **Obrigatório**. ID do usuario |
| `nomeTime`        | `string`           | **Obrigatório**. nome do time |
| `cidade`       | `String`           | **Obrigatório**. cidade do time |
| `estadio `      | `string`           | **Obrigatório**. nome do estadio |
| `capacidade `      | `integer`           | **Obrigatório**. capacidade do estadio |


#### Atualizar dados de um time.

```http
  PUT /times/:idTime?estadio=nome_Estadio&capacidade=capacidade_estadio
```
<p>É possivel atualizar somente a capacidade ou o estádio ou se preferir, pode atualizar os dois dados.</p>

| Parâmetro   | Tipo               | Descrição                                   |
| :---------- | :----------------- | :------------------------------------------ |
| `idUsuario`        | `string`           | **Obrigatório**. ID do usuario |
| `idTime`        | `string`           | **Obrigatório**. id do time |
| `estadio `      | `string`           | **Opcional**. nome do estadio |
| `capacidade`       | `integer`           | **Opcional**. capacidade do estádio |


#### Deleta um time.

```http
  DELTE /times/
```

| Parâmetro   | Tipo               | Descrição                                   |
| :---------- | :----------------- | :------------------------------------------ |
| `idUsuario`        | `string`           | **Obrigatório**. ID do usuario |
| `idTime`        | `string`           | **Obrigatório**. id do time |