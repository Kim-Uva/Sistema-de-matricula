const express = require("express");
// Importar Router desde express
const router = express.Router();
// Importar el servicio de login
const servicioUsuarioLogin = require("../services/loginService.js");

router.get("/autenticar/", async (solicitud, respuesta) => {
    respuesta.json(servicioUsuarioLogin.Autenticacion(solicitud.body.CorreoElectronico, solicitud.body.Clave));
  });
  
  router.get("/validarToken", async (solicitud, respuesta) => {
    respuesta.json(await servicioUsuarioLogin.ValidarToken(solicitud));
  });

  module.exports = router;
