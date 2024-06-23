const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bill_tables',
  password: 'test',
  port: 5432,
});

module.exports = pool;
