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
    
          return jwt.sign({ idUsuario:usuario.idUsuario, tipoUsuario: usuario.tipoUsuario}, this.PalabraSecreta, { expiresIn: '1h' });
    
      } catch (error) {
          console.error(`Error en autenticación: ${error.message}`);
          return null;
      }
    }
 
        //Validar el token
        async ValidarToken(solicitud) {
            let Resultado;
            try {
              //Autenticar el token
              if (!solicitud.headers.authorization) 
                throw new Error("Token no proporcionado");
        
              Resultado = await jwt.verify(solicitud.headers.authorization.split(" ")[1], this.PalabraSecreta); 
              console.log("Token verificado:", Resultado);
              
            } catch(err) {
              Resultado = err;
            }
           return Resultado;
          };
        }
        module.exports = servicioUsuarioLogin;
 
        
    

