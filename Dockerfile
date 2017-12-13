FROM node:latest

COPY . /usr/src/app/
WORKDIR /usr/src/app

RUN npm install

ENV PORT 8010

# tell docker what port to expose
EXPOSE 8010

CMD [ "npm", "start" ]
