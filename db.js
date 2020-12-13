const mysql = require('mysql2')

const pool = mysql.createPool({
  host: '172.17.0.2',
  user: 'root',
  password: 'manager',
  database: 'dockerDB',
  port: 9090,
  connectionLimit: 20
})

module.exports = pool