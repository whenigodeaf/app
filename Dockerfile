FROM node:12.2.0-alpine as builder

COPY package.json package-lock.json ./
RUN npm ci && mkdir /app && mv ./node_modules ./app
WORKDIR /app

RUN npm run build

EXPOSE 8081
CMD["npm","run","start"]