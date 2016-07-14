node-postgres-restapi
=====================

A bootstrap to create RESTful APIs with [Node.js](https://nodejs.org/), [Express](http://expressjs.com/) and [Postgres](https://www.postgresql.org/).

## Installation

```
npm install
```

## Setting up your queries

You can configure your database connection in the `api/queries.js` file. The line:

```
var connectionString = 'postgres://localhost:5432/locations'; // Locations is an example database name
```

For the queries, you'll need to modify:

- `api/queries.js`: functions and exports.
- `api/index.js`: connect the functions to the server permalinks.


## Usage

```
npm start
```

or

```
node server.js
```

## Credits

This bootstrap is based on [this tutorial](http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/) for the queries file structure. This repo is not using the express-framework to generate the code, so the code is cleaner.
