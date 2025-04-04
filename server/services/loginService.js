//Constantes y librerias requeridas
const { PrismaClient } = require("@prisma/client")
const bcrypt = require ('bcrypt');
const crypto = require ('crypto');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

class servicioUsuarioLogin {
    constructor() {
    };

    PalabraSecreta = "MiPalabraSecreta";

    async Autenticacion(correo, ClaveSinEncriptar) {
      try {
          const usuario = await prisma.perfil.findUnique({
              where: { correo : correo }
          });
    
          if (!usuario) throw new Error("Usuario no encontrado");
    
          const resultado = await bcrypt.compare(ClaveSinEncriptar, usuario.clave);
          if (!resultado) throw new Error("Contraseña incorrecta");
    

          console.log("Clave ingresada:", ClaveSinEncriptar);
          console.log("Clave en BD:", usuario.clave);
    
          return jwt.sign({ data: usuario.tipoUsuario }, this.PalabraSecreta, { expiresIn: '1h' });
    
      } catch (error) {
          console.error(`Error en autenticación: ${error.message}`);
          return null;
      }
    }
 
        //Validar el token
        async ValidarToken(solicitud) {
            let Resultado;
            try {
              Resultado = await jwt.verify(solicitud.headers.authorization.split(" ")[1], this.PalabraSecreta); 
            } catch(err) {
              Resultado = err;
            }
           return Resultado;
          };
        }
        module.exports = servicioUsuarioLogin;
 
        
    

