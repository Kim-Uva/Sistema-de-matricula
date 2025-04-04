const express = require("express");

const router = express.Router();

const ServicioCurso = require('../services/cursoService');
const perfilService = require('../services/loginService.js');
const perfil = new perfilService();

//obtener todos los cursos si el usuario es Docente con el token
router.get("/", async (request, response) => {
    try {
      // Validar el token desde el header Authorization
      const datos = await perfil.ValidarToken(request);
      console.log("Datos del token:", datos); // Verificar los datos del token
      // Verificar tipo de usuario
      if (datos.data !== 'Docente') {
        return response.status(403).json({
          error: "No tienes permiso para acceder a esta información",
        });
      }
  
      // Ejecutar servicio si es Docente
      return ServicioCurso.getCursos(request, response);
    } catch (error) {
      return response.status(401).json({
        error: "Token inválido o no proporcionado",
      });
    }
  });

router.post('/', ServicioCurso.createCurso);
router.put('/:id', ServicioCurso.updateCurso);
router.delete('/:id', ServicioCurso.deleteCurso);

//Get by id
router.get('/:id', ServicioCurso.getCursoById);


module.exports = router; 