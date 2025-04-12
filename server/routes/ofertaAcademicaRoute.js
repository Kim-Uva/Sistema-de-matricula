const express = require("express");

const router = express.Router();

const ServicioOfertaAcademica = require("../services/ofertaAcademicaService");

// Obtener todas las ofertas académicas
router.get("/", ServicioOfertaAcademica.getOfertaAcademica);

module.exports = router;
