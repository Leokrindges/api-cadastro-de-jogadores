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

#### Retorna uma lista de todos os times com seus devidos jogadores cadastrados.

```http
  GET /times
```

#### Criar um time

```http
  POST /times/
```

| Parâmetro   | Tipo               | Descrição                                   |
| :---------- | :----------------- | :------------------------------------------ |
| `nomeTime`        | `string`           | **Obrigatório**. nome do time |
| `cidade`       | `String`           | **Obrigatório**. cidade do time |
| `estadio `      | `string`           | **Obrigatório**. nome do estadio |
