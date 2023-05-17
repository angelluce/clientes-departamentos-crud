const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'desarrollo',
    database: 'viamatica',
    port: '5432'
})

module.exports = {
    pool
}