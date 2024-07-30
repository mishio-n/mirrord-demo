FROM node:lts-slim

WORKDIR /app

COPY package.json pnpm-lock.yaml  ./

RUN corepack enable pnpm
RUN pnpm install

COPY . .

CMD [ "pnpm", "tsx", "src/index.ts" ]