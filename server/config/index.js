const dotenv = require('dotenv');
dotenv.config();

const config = {
    portServer: process.env.PORT || 3000,
    pgHost: `${process.env.DB_HOSTNAME}`,
    pgPort: `${process.env.DB_PORT}`,
    pgUser: `${process.env.DB_USER}`,
    pgPassword: `${process.env.DB_PASSWORD}`,
    pgDatabase: `${process.env.DB_DATABASE}`,
    // connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOSTNAME}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
    corsOrigin: process.env.CORS_ORIGIN || "https://mikelibk.com"
}


module.exports = config;