node-postgres-restapi
=====================

A bootstrap to create RESTful APIs with [Node.js](https://nodejs.org/), [Express](http://expressjs.com/) and [Postgres](https://www.postgresql.org/).

## Installation

```
npm install
```

## Postgres setup

You can find a dumb database under `data/startrek.sql`. You can import it with software like [Postico](https://eggerapps.at/postico/) (for OSX) or by running the following `psql` command in your terminal:

```
psql -f startrek.sql
```

You can configure your database connection in the `api/queries.js` file. The line:

```
var connectionString = 'postgres://localhost:5432/startrek'; // startrek is an example database name
```

## Usage

```
npm start
```

And check the server in:

or

```
node server.js
```

Test in the browser:

```
http://localhost:3000
```

If everything is ok, you should see:

```
{"status":"success","message":"Live long and prosper!"}
```

## Setting up your queries

- `api/queries.js`: functions and exports.
- `api/index.js`: connect the functions to the server permalinks.


## Credits

This bootstrap is based on [this tutorial](http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/) for the queries' file structure. This repo is not using the express-framework to generate the code, so the code is cleaner. But you can check the tutorial for more information about how it works.
