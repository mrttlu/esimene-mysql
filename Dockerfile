FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
VOLUME .:/usr/src/app
EXPOSE ${PORT}
RUN npm install pm2 -g

CMD ["pm2-runtime", "server.js"]