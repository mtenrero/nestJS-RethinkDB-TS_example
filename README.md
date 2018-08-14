# nest-rethink-db

## Description

Simple example using NestJS framework + RethinkDB without any ORM.

The project heavily relies in Dependency Inversion pattern using NestJS providers.

TypeScript & Promises


## Requirements

It requires a RethinkDB instance accesible via `localhost` at its custom port `28015`.
It's easy to run it with Docker:

```bash
docker run --name some-rethink -v "$PWD:/data" -d -p 8081:8080 -p 28015:28015 -p 29015:29015 rethinkdb
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

