FROM node:24

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "dev"]
