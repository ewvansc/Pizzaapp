const Pool = require("pg").Pool;
 require('dotenv').config();
 
 const pool = new Pool ({
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
 
 }); 
 
 pool.on('connect', ()=> {
     console.log('connected to database');
 });
 
 
 module.exports = pool;