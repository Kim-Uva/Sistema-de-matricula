const express = require("express");

const router = express.Router();

const ServicioHistorial = require('../services/historialService');


router.get('/', ServicioHistorial.getHistoriales);
router.post('/', ServicioHistorial.createHistorial);
router.put('/:id', ServicioHistorial.updateHistorial);
router.delete('/:id', ServicioHistorial.deleteHistorial);
module.exports = router;