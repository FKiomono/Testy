// config.js

const dotenv = require('dotenv');
dotenv.config();
var client = require('pg').Client;

    const config = {
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        port: process.env.PGPORT
    };

    var connection = new client(config);
    connection.connect();

  module.exports = {
    hostport: process.env.HOSTPORT,
    connection: connection
  };


