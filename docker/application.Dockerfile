# Specifing node 16:slim as base image
FROM node:16-slim

# Setting up the application home so we can use it forward
ENV APP_HOME=/usr/app/docker-orchestration-node-express-jest

# We are copying the the application directory and package.json from the host to the container
COPY /application $APP_HOME/application
COPY package.json $APP_HOME/package.json

# Setting our workdir as the application_home
WORKDIR $APP_HOME

# We're installing all the required dependencies
RUN npm i

# We're exposing port 3000 as it is the port our application uses
EXPOSE 3000