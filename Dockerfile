FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
RUN yarn

COPY . .
EXPOSE 3000

RUN yarn build:modern

CMD [ "yarn", "start:modern" ]