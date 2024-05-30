## Como rodar a API

```bash
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

$ docker run -dit -p 3000:3000 --name red-ventures-teste-backend
```