FROM node:24 AS test

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

ARG VITE_BACKEND_URL=/api
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}

RUN npm test

FROM test AS build

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

