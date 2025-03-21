//npm install express
//npm install @prisma/client
//npm install dotenv
//npm install cors
//npm install morgan
const dotEnv = require('dotenv');
const express = require('express');

const cors = require('cors');
const logger = require('morgan');
const app = express();
const bycript = require('bcrypt');

bycript.hash('123456', 10, function(err, hash){
  console.log(hash);
});

//---Archivos de rutas---
const provinciaRoute = require("./routes/provinciaRoute.js");
const usuarioRoute = require("./routes/usuarioRoute.js");
const planRoute = require("./routes/planEstudiosRoute.js");
const materiaRoute = require("./routes/materiaRoute.js");
const ofertaRoute = require("./routes/ofertaRoute.js");
const cursoRoute = require("./routes/cursoRoute.js");
const grupoRoute = require("./routes/ofertaGrupoRoute.js");
const historialRoute = require("./routes/historialRoute.js");
const usuarioLogin = require("./routes/loginRoute.js");

// Acceder a la configuracion del archivo .env
dotEnv.config();
// Puero que escucha por defecto 300 o definido .env
const port = process.env.PORT || 3000;
// Middleware CORS para aceptar llamadas en el servidor
app.use(cors());
// Middleware para loggear las llamadas al servidor
app.use(logger('dev'));
// Middleware para gestionar Requests y Response json
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


//---- Definir rutas recordar actualizar ----
app.use('/provincias/', provinciaRoute)
app.use('/usuario/', usuarioRoute)
app.use('/usuariologin/', usuarioLogin)
app.use('/plan/', planRoute)
app.use('/materia/', materiaRoute)
app.use('/oferta/', ofertaRoute)
app.use('/curso/', cursoRoute)
app.use('/grupo/', grupoRoute)
app.use('/historial/', historialRoute)

// Servidor
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log('Presione CTRL-C para deternerlo\n');
});
