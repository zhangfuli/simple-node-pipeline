#FROM jshmrtn/s2i-nodejs-nginx:latest
#WORKDIR /usr/src/app
#COPY ["package.json", "package-lock.json", "./"]
#RUN npm install
#COPY . .
#RUN npm run build
#
#EXPOSE 80
#RUN cp -r dist/* /var/www/html \
#    && rm -rf /user/src/app
#CMD ["nginx","-g","daemon off;"]

FROM  node:8-slim

RUN mkdir -p /home/Service

WORKDIR /home/Service

COPY . /home/Service

RUN npm install

EXPOSE 3000

CMD npm start
