FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY consumer.js .

CMD [ "node", "consumer.js" ]