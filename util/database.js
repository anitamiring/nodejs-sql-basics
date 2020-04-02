const mysql = require('mysql2');

const params = {
    host: 'localhost',
    user: 'root',
    database: 'nodejs-course',
    password: 'Swizzle123##'
};

const pool = mysql.createPool(params);

module.exports = pool.promise();