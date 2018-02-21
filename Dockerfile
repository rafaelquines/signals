FROM arm32v7:node:8.9.4

ADD ./ /sources

WORKDIR /sources

RUN npm i

ENTRYPOINT [ "./init.sh" ]

CMD [ "start" ]