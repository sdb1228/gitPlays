FROM node:4-onbuild
RUN npm install webpack -g
RUN webpack
EXPOSE 3000
