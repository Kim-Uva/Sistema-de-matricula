const express = require("express");

const router = express.Router();

const ServicioCurso = require('../services/cursoService');

router.get('/', ServicioCurso.getCursos);
router.post('/', ServicioCurso.createCurso);
router.put('/:id', ServicioCurso.updateCurso);
router.delete('/:id', ServicioCurso.deleteCurso);

//Get by id
router.get('/:id', ServicioCurso.getCursoById);


module.exports = router;