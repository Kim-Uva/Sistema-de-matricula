const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

//Ofertas
module.exports.getOfertas = async (request, response, next) => {
  try {
    const oferta = await prisma.ofertaAcademica.findMany();

    if (oferta.length === 0) {
      return response.status(404).json({ message: 'No se encontraron ofertas' });
    }

    response.json(oferta);
  } catch (error) {
    console.error('Error al obtener ofertas:', error);
    response.status(500).json({ error: 'Error interno al obtener las ofertas' });
  }
};

//Crear oferta
module.exports.createOferta = async (request, response, next) => {
  try {
    const { descripcionPeriodo } = request.body;
    const oferta = await prisma.ofertaAcademica.create({
      data: {
        descripcionPeriodo: descripcionPeriodo,
      }
    });

    response.json({message: "Oferta creada con éxito", oferta});
  } catch (error) {
    console.error('Error al crear oferta:', error);
    response.status(500).json({ error: 'Error interno al crear la oferta' });
  }
};

//Actualizar oferta
module.exports.updateOferta = async (request, response, next) => {
  try {
    const { id } = request.params;
    const { descripcionPeriodo } = request.body;
    const oferta = await prisma.ofertaAcademica.update({
      where: {
        idOfertaAcademica: parseInt(id)
      },
      data: {
        descripcionPeriodo: descripcionPeriodo,
      }
    });

    response.json({message: "Oferta actualizada con éxito", oferta});
  } catch (error) {
    console.error('Error al actualizar oferta:', error);
    response.status(500).json({ error: 'Error interno al actualizar la oferta' });
  }
};

//Eliminar oferta
module.exports.deleteOferta = async (request, response, next) => {
  try {
    const { id } = request.params;
    const oferta = await prisma.ofertaAcademica.delete({
      where: {
        idOfertaAcademica: parseInt(id)
      }
    });

    response.json({message: "Oferta eliminada con éxito", oferta});
  } catch (error) {
    console.error('Error al eliminar oferta:', error);
    response.status(500).json({ error: 'Error interno al eliminar la oferta'});
  }
};

//Oferta por id
module.exports.getOfertaById = async (request, response, next) => {
  let idOferta = parseInt(request.params.id);
  try {
    const oferta = await prisma.ofertaAcademica.findUnique({
      where: {
        idOfertaAcademica: idOferta
      }
    });

    if (!oferta) {
      return response.status(404).json({ message: 'No se encontró la oferta' });
    }

    response.json(oferta);
  } catch (error) {
    console.error('Error al obtener oferta:', error);
    response.status(500).json({ error: 'Error interno al obtener la oferta' });
  }
};