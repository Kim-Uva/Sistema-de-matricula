const express = require("express");

const router = express.Router();

const ServicioUsuarios = require('../services/usuarioService');

router.get('/', ServicioUsuarios.getUsuarios);
router.post('/', ServicioUsuarios.createUsuario);
router.put('/:id', ServicioUsuarios.updateUsuario);
router.delete('/:id', ServicioUsuarios.deleteUsuario);

//Get by id
router.get('/:id', ServicioUsuarios.getUsuarioById);

module.exports = router;
