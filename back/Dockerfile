FROM node:14.17.1

WORKDIR /var/www
COPY . /var/www

RUN npm ci
RUN npm run build
EXPOSE 8080
CMD ["node", "./dist/index.js"]