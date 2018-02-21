FROM node:8.9.4

ADD ./ /sources

WORKDIR /sources

RUN npm i

ENTRYPOINT [ "./init.sh" ]

CMD [ "start" ]