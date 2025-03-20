const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

//Provincias
module.exports.getProvincias = async (request, response, next) => {
  try {
    // Consulta para obtener todas las provincias
    const provincia = await prisma.provincias.findMany();

    // Si no hay provincias, devolver mensaje de error
    if (provincia.length === 0) {
      return response.status(404).json({ message: 'No se encontraron provincias' });
    }

    // Si hay provincias, devolverlas como JSON
    response.json(provincia);
  } catch (error) {
    // Manejo de errores si algo falla en la consulta
    console.error('Error al obtener provincias:', error);
    response.status(500).json({ error: 'Error interno al obtener las provincias' });
  }
};

//Provincia por id
module.exports.getProvinciaById = async (request, response, next) => {
  let idProvincia = parseInt(request.params.id);
  try {
    // Consulta para obtener una provincia por id
    const provincia = await prisma.provincias.findUnique({
      where: {
        ProvinciaId: idProvincia
      }
    });

    // Si no hay provincia, devolver mensaje de error
    if (!provincia) {
      return response.status(404).json({ message: 'No se encontró la provincia' });
    }

    // Si hay provincia, devolverla como JSON
    response.json(provincia);
  } catch (error) {
    // Manejo de errores si algo falla en la consulta
    console.error('Error al obtener provincia:', error);
    response.status(500).json({ error: 'Error interno al obtener la provincia' });
  }
};

//Modificar provincia
module.exports.updateProvincia = async (request, response, next) => {
  let idProvincia = parseInt(request.params.id);
  let data = request.body;
  try {
    // Consulta para actualizar una provincia por id
    const provincia = await prisma.provincias.update({
      where: {
        ProvinciaId: idProvincia
      },
      data: data
    });

    // Si no hay provincia, devolver mensaje de error
    if (!provincia) {
      return response.status(404).json({ message: 'No se encontró la provincia' });
    }

    // Si hay provincia, devolverla como JSON
    response.json(provincia);
  } catch (error) {
    // Manejo de errores si algo falla en la consulta
    console.error('Error al actualizar provincia:', error);
    response.status(500).json({ error: 'Error interno al actualizar la provincia' });
  }
};
//Cantones por provincia
module.exports.getCantones = async (request, response, next) => {
  let idProvincia = parseInt(request.params.id);
  try {
    // Consulta para obtener todos los cantones de una provincia
    const cantones = await prisma.cantones.findMany({
      where: {
        ProvinciaId: idProvincia
      }
    });

    // Si no hay cantones, devolver mensaje de error
    if (cantones.length === 0) {
      return response.status(404).json({ message: 'No se encontraron cantones' });
    }

    // Si hay cantones, devolverlos como JSON
    response.json(cantones);
  } catch (error) {
    // Manejo de errores si algo falla en la consulta
    console.error('Error al obtener cantones:', error);
    response.status(500).json({ error: 'Error interno al obtener los cantones' });
  }

  
};

//Canton por id
module.exports.getCantonById = async (request, response, next) => {
  let idCanton = parseInt(request.params.id);
  try {
    // Consulta para obtener un canton por id
    const canton = await prisma.cantones.findUnique({
      where: {
        CantonId: idCanton
      }
    });

    // Si no hay canton, devolver mensaje de error
    if (!canton) {
      return response.status(404).json({ message: 'No se encontró el canton' });
    }

    // Si hay canton, devolverlo como JSON
    response.json(canton);
  } catch (error) {
    // Manejo de errores si algo falla en la consulta
    console.error('Error al obtener canton:', error);
    response.status(500).json({ error: 'Error interno al obtener el canton' });
  }
};

// Distritos por canton
module.exports.getDistritos = async (request, response, next) => {
  let idCanton = parseInt(request.params.id);
  try {
    // Consulta para obtener todos los distritos de un canton
    const distritos = await prisma.distritos.findMany({
      where: {
        CantonId: idCanton
      }
    });

    // Si no hay distritos, devolver mensaje de error
    if (distritos.length === 0) {
      return response.status(404).json({ message: 'No se encontraron distritos' });
    }

    // Si hay distritos, devolverlos como JSON
    response.json(distritos);
  } catch (error) {
    // Manejo de errores si algo falla en la consulta
    console.error('Error al obtener distritos:', error);
    response.status(500).json({ error: 'Error interno al obtener los distritos' });
  }
};

//Distrito por id
module.exports.getDistritoById = async (request, response, next) => {
  let idDistrito = parseInt(request.params.id);
  try {
    // Consulta para obtener un distrito por id
    const distrito = await prisma.distritos.findUnique({
      where: {
        DistritoId: idDistrito
      }
    });

    // Si no hay distrito, devolver mensaje de error
    if (!distrito) {
      return response.status(404).json({ message: 'No se encontró el distrito' });
    }

    // Si hay distrito, devolverlo como JSON
    response.json(distrito);
  } catch (error) {
    // Manejo de errores si algo falla en la consulta
    console.error('Error al obtener distrito:', error);
    response.status(500).json({ error: 'Error interno al obtener el distrito' });
  }
};





