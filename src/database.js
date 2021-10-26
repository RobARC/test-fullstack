const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('LA BASE DE DATOS HA SIDO CERRADA')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('LA BASE DE DATOS TIENE MUCHAS CONEXIONES')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('LA CONEXION A LA BASE DE DATOS HA SIDO RECHAZADA')
        }
    }
    if (connection) connection.release();
    console.log('LA BASE DE DATOS ESTA CONECTADA');
    return;

});

//convirtiendo callbacks a promesas
pool.query = promisify(pool.query)

module.exports = pool;

