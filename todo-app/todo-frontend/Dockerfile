FROM node:24 AS test

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm test

FROM test AS build

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

