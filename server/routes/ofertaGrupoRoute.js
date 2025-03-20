const express = require("express");

const router = express.Router();

const ServicioGrupo = require('../services/ofertaGrupoService');

router.get('/', ServicioGrupo.getOfertaGrupos);
router.post('/', ServicioGrupo.createOfertaGrupo);
router.put('/:idOfertaAcademica/:idPlanEstudios', ServicioGrupo.updateOfertaGrupo);
router.delete('/:idOfertaAcademica/:idPlanEstudios', ServicioGrupo.deleteOfertaGrupo);

module.exports = router;

