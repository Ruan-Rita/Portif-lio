# Rodar o Docker - START SERVER
# docker run -p 3000:3000 -d portifolio/dockernode

FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
