const express = require('express');
const router = express.Router();

const db = require('../database');


router.get('/', (req, res) => {
    res.send('<h1>Bienvenidos!</h1>');
});


router.get('/usuarios/add', (req, res) => {
    res.render('usuarios/add');
});

router.post('/usuarios/add', async (req, res) => {
    const { Usuario, Nombre, Apellido, Telefono } = req.body
    const nuevo_usuario = {
        Usuario,
        Nombre,
        Apellido,
        Telefono
    }
    await db.query('INSERT INTO usuarios set ?', [nuevo_usuario]);
    console.log(nuevo_usuario)
    res.send('usuarios/add');
});


module.exports = router;