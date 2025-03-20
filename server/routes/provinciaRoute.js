const express = require("express");

const router = express.Router();

const ServicioProvincias = require('../services/provinciaService');

router.get('/', ServicioProvincias.getProvincias); 
router.get('/:id', ServicioProvincias.getCantones);
router.get('/cantones/:id', ServicioProvincias.getDistritos);

//update
router.put('/:id', ServicioProvincias.updateProvincia);

//Get by id
router.get('/provincia/:id', ServicioProvincias.getProvinciaById);
router.get('/canton/:id', ServicioProvincias.getCantonById);
router.get('/distrito/:id', ServicioProvincias.getDistritoById);

module.exports = router;
