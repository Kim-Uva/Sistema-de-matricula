const express = require("express");

const router = express.Router();

const ServicioOferta = require('../services/ofertaService');

router.get('/', ServicioOferta.getOfertas);
router.post('/', ServicioOferta.createOferta);
router.put('/:id', ServicioOferta.updateOferta);
router.delete('/:id', ServicioOferta.deleteOferta);

//Get by id
router.get('/:id', ServicioOferta.getOfertaById);

module.exports = router;