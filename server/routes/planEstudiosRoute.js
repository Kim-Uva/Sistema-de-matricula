const express = require("express");

const router = express.Router();

const ServicioPlan = require('../services/planEstudiosService');

router.get('/', ServicioPlan.getPlanes);
router.post('/', ServicioPlan.createPlan);
router.put('/:id', ServicioPlan.updatePlan);
router.delete('/:id', ServicioPlan.deletePlan);

//Get by id
router.get('/:id', ServicioPlan.getPlanById);
module.exports = router;
