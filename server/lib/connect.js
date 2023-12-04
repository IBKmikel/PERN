const config = require('../config');
const { Pool } = require('pg');

const pool = new Pool({
        user: config.pgUser,
        host: config.pgHost,
        database: config.pgDatabase,
        password: config.pgPassword,
        port: config.pgPort,
        max: 5, // maximum number of connections in the pool
        idleTimeoutMillis: 20000, // how long a client is allowed to remain idle before being closed
        connectionTimeoutMillis: 20000,
        allowExitOnIdle: false,
        ssl: {
            rejectUnauthorized: false
        }
});

console.log('Connected to database');


pool.on('connect', connection =>{
    console.log('New connection to database');
});

module.exports = pool;
