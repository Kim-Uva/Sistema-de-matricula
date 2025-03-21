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

    async Autenticacion(CorreoElectronico, ClaveSinEncriptar) {
        //Buscar el usuario en la base de datos
        let Usuario = await prisma.perfil.findFirst({
            where: {
              correo: CorreoElectronico,
            },
            select: {
              tipoUsuario: true,
              clave: true,
            }
          });

          // Comparar la clave encriptada con la clave sin encriptar
          let Resultado = await bcrypt.compare(ClaveSinEncriptar, Usuario.clave);
          if (Resultado === true) {
            return jwt.sign({ data: Usuario.clave }, this.PalabraSecreta, { expiresIn: '1m' });
          } else {
            return false;
          }
        };


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

        
    

