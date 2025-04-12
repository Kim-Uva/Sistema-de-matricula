const express = require("express");

const router = express.Router();

const ServicioMateria = require('../services/materiaService');

router.get('/', ServicioMateria.getMaterias);
router.post('/', ServicioMateria.createMateria);
router.put('/:id', ServicioMateria.updateMateria);
router.delete('/:id', ServicioMateria.deleteMateria);


//Obtener materia por id
router.get('/:id', ServicioMateria.getMateriaById);

//Materia por idplan
router.get('/plan/:idPlan', ServicioMateria.getMateriasByIdPlan);

module.exports = router;
