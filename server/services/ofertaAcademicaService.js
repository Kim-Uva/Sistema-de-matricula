const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();


//Oferta Academica
module.exports.getOfertaAcademica = async (request, response, next) => {
  try {
    const ofertaAcademica = await prisma.ofertaAcademica.findMany({
      include: {
        grupos: true,
      },
    });

    if (ofertaAcademica.length === 0) {
      return response.status(404).json({ message: 'No se encontraron ofertas académicas' });
    }

    response.json(ofertaAcademica);
  } catch (error) {
    console.error('Error al obtener ofertas académicas:', error);
    response.status(500).json({ error: 'Error interno al obtener las ofertas académicas' });
  }
};

// Get Oferta Academica by id
module.exports.getOfertaAcademicaById = async (request, response, next) => {
  let idOfertaAcademica = parseInt(request.params.id);
  try {
    const ofertaAcademica = await prisma.ofertaAcademica.findUnique({
      where: {
        idOfertaAcademica: idOfertaAcademica,
      },
      include: {
        grupos: true,
      },
    });

    if (!ofertaAcademica) {
      return response.status(404).json({ message: 'No se encontró la oferta académica' });
    }

    response.json(ofertaAcademica);
  } catch (error) {
    console.error('Error al obtener la oferta académica:', error);
    response.status(500).json({ error: 'Error interno al obtener la oferta académica' });
  }
};
