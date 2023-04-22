FROM node:18-slim

WORKDIR /app
COPY . /app

RUN npm ci
RUN npm run build

EXPOSE 4200

CMD [ "node", "server.js" ]