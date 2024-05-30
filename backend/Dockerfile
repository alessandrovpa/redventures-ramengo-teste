FROM node:20.14.0-alpine3.20 AS builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install -g @nestjs/cli
RUN npm install
COPY . .
RUN npm run build

FROM node:20.14.0-alpine3.20
WORKDIR /app
COPY --from=builder /usr/src/app/dist/  ./dist/
COPY --from=builder /usr/src/app/package.json  .
COPY --from=builder /usr/src/app/package-lock.json  .

RUN npm install --omit=dev
EXPOSE 3000
ENTRYPOINT ["node", "dist/src/infra/http/nestjs/main.js"]
