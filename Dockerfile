FROM node:14-alpine

RUN apk add ca-certificates

ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY package.json ./
RUN yarn

COPY . .
EXPOSE 3000

RUN yarn build:modern

CMD [ "yarn", "start:modern" ]