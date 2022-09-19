# Specifing node 16:slim as base image
FROM node:16-slim

# Setting up the tests home so we can use it forward
ENV TESTS_HOME=/usr/

# We are copying the the tests directory and package.json from the host to the container
COPY /tests $TESTS_HOME/tests
COPY package.json $TESTS_HOME/package.json

# Setting our workdir as the tests_home
WORKDIR $TESTS_HOME

# We're installing all the required dependencies
RUN npm i