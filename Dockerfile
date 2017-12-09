FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

ENV PORT 8010

# set a health check
HEALTHCHECK --interval=5s \
  --timeout=5s \
  CMD curl -f http://127.0.0.1:8010/healthz || exit 1

# tell docker what port to expose
EXPOSE 8010

CMD [ "npm", "start" ]