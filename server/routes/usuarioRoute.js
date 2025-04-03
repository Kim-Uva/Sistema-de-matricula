const express = require("express");

const router = express.Router();

const ServicioUsuarios = require('../services/usuarioService');

//Usuarios
router.get('/', ServicioUsuarios.getUsuarios);
router.post('/', ServicioUsuarios.createUsuario);
router.put('/:id', ServicioUsuarios.updateUsuario);
router.delete('/:id', ServicioUsuarios.deleteUsuario);


//Docentes
router.get('/docentes', ServicioUsuarios.getDocentes);

//Get by id
router.get('/:id', ServicioUsuarios.getUsuarioById);
//get by docente
router.get('/docente/:id', ServicioUsuarios.getDocenteById);
//Get by tipoUsuario
router.get('/tipoUsuario/:tipoUsuario', ServicioUsuarios.getUsuariosByTipo);

module.exports = router;
