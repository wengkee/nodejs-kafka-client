FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY producer.js .

CMD [ "node", "producer.js" ]