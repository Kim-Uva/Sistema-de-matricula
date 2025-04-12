const express = require("express");

const router = express.Router();

const ServicioMatricula = require("../services/matriculaService");

// Obtener todas las matrículasEncabezado
router.get("/", ServicioMatricula.getMatriculaEncabezado);
//createMatricula
router.post("/", ServicioMatricula.createMatricula);

//createMatriculadetalle
router.post("/detalle/", ServicioMatricula.createMatriculaDetalle);

module.exports = router;
