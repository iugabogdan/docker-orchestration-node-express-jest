
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about"> ➤ About </a></li>
    <li><a href="#technologies"> ➤ Technologies</a></li>
    <li><a href="#prerequisites"> ➤ Prerequisites </a></li>
    <li><a href="#scripts"> ➤ Scripts </a></li>
    <li><a href="#folder-structure"> ➤ Folder Structure </a></li>
  </ol>
</details>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="about"> About</h2>

The scope of this repository is to act as support for this Medium post and to demonstrate a simple way of how to orchestrate **docker** containers and validate your application in simple steps using **Node**, a basic **Express** server, **Axios** to trigger requests and **Jest** to execute your tests. 


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="technologies"> Technology Stack</h2>

[![node.js](https://img.shields.io/badge/node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/en/) 
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/) 
[![express](https://img.shields.io/badge/express-000000?style=flat&logo=express&logoColor=white)](http://expressjs.com/) 
[![axios](https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white)](https://axios-http.com/docs/intro) 
[![jest](https://img.shields.io/badge/jest-C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/) 
[![docker](https://img.shields.io/badge/docker-0DB7ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/) 

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="prerequisites"> Prerequisites</h2>

* Node (latest stable `v16.17.0`)
* npm 
* Docker

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="scripts"> Scripts</h2>

```shell
$ npm run start # will start the express server on your localhost
```

```shell
$ npm run test:local # will execute the tests against the server started on your localhost
```

```shell
$ npm run test:remote # will start two containers (one will boot the app - the other will execute the tests)
```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="folder-structure"> Folder Structure</h2>

```
.
├── LICENSE
├── Makefile
├── README.md
├── application
│   └── app.js
├── docker
│   ├── application.Dockerfile
│   ├── docker-compose.yml
│   └── test-executor.Dockerfile
├── package-lock.json
├── package.json
└── tests
    ├── application-service.js
    ├── environment
    ├── environment.js
    ├── global-setup.config.js
    ├── jest.config.js
    ├── request.js
    └── test.spec.js
```