const express = require("express");
// Importar Router desde express
const router = express.Router();
// Importar el servicio de login
const servicioUsuarioLogin = require("../services/loginService.js");
const perfil = new servicioUsuarioLogin();


router.post("/autenticar", async (solicitud, respuesta) => {
  console.log("Solicitud recibida:", solicitud.body); 
  const { correo, clave } = solicitud.body;
  const token = await perfil.Autenticacion(correo, clave);

  if (!token) return respuesta.status(401).json({ error: "Datos inválidos" });
  respuesta.json({ token });
});

  
router.get("/validarToken", async (solicitud, respuesta) => {
  const resultado = await perfil.ValidarToken(solicitud);
  if (resultado.error) return respuesta.status(401).json(resultado);
  respuesta.json({ valido: true, datos: resultado });

});

  module.exports = router;
