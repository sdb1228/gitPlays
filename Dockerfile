FROM instructure/node-passenger:6
USER root
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npm install -g nodemon
RUN npm run production
RUN chown -R docker:docker /usr/src/app
EXPOSE 3000
