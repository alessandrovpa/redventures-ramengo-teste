## Como rodar a API

```bash
# Crie um arquivo .env e siga o modelo do arquivo .env.example
# Adicione o valor dessa env no api.js do FrontEnd

$ npm install

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Usando Docker

```bash
$ docker build -t red-ventures-teste-backend .

$ docker run -dit -p 3000:3000 --name red-ventures-teste-api red-ventures-teste-backend
```

## Insomnia
Você pode importar a configuração do insomnia utilizada para desenvolvimento pelo arquivo .json na pasta do backend