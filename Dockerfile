FROM hub.c.163.com/nce2/nodejs:0.12.2  

RUN mkdir -p /home/Service

WORKDIR /home/Service  

COPY . /home/Service

RUN npm install

EXPOSE 8080

CMD npm start
