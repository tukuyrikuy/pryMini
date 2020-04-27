/**
 * AUTOR: Rony Villafuerte Serna
 * FECHA: 02-AGO-2019
 * DESCRIPCION: encargada de realizar una conexion a la BD
 * 
 * MODIFICACIONES:

*/


const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 3,
    host: '192.168.1.98',//127.0.0.1
    user: 'usuario',
    password: '123456',
    database: 'DBdemo'
});



module.exports = pool;