FROM hub.c.163.com/nce2/nodejs:0.12.2

RUN mkdir -p /home/Service

WORKDIR /home/Service

COPY . /home/Service

EXPOSE 3000

CMD npm start
