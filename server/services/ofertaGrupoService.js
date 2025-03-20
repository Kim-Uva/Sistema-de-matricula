const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//OfertaGrupo
module.exports.getOfertaGrupos = async (request, response, next) => {
  try {
    const ofertaGrupo = await prisma.ofertaAcademicaGrupo.findMany({
      include: {
        ofertaAcademica: true,
        planEstudio: true,
      },
    });

    if (ofertaGrupo.length === 0) {
      return response
        .status(404)
        .json({ message: "No se encontraron ofertas de grupo" });
    }

    response.json(ofertaGrupo);
  } catch (error) {
    console.error("Error al obtener ofertas de grupo:", error);
    response
      .status(500)
      .json({ error: "Error interno al obtener las ofertas de grupo" });
  }
};

//Crear oferta de grupo
module.exports.createOfertaGrupo = async (request, response, next) => {
  try {
    const { idOfertaAcademica, idPlanEstudio } = request.body;
    const ofertaGrupo = await prisma.ofertaAcademicaGrupo.create({
      data: {
        ofertaAcademica: {
          connect: { 
            idOfertaAcademica: idOfertaAcademica }, // Conectar oferta académica existente
        },
        planEstudio: {
          connect: { 
            idPlan: idPlanEstudio }, // Conectar plan de estudio existente
        },
      },
      include: {
        ofertaAcademica: true,
        planEstudio: true,
      },
    });

    response.json({ message: "Oferta de grupo creada con éxito", ofertaGrupo });
  } catch (error) {
    console.error("Error al crear oferta de grupo:", error);
    response
      .status(500)
      .json({ error: "Error interno al crear la oferta de grupo" });
  }
};

//Actualizar oferta de grupo
module.exports.updateOfertaGrupo = async (request, response, next) => {
    try {
      const idOfertaAcademica = parseInt(request.params.idOfertaAcademica); // ID de la oferta académica
      const idPlanEstudios = parseInt(request.params.idPlanEstudios); // ID del plan de estudios
  
      const { idOfertaAcademica: nuevoIdOfertaAcademica, idPlanEstudio: nuevoIdPlanEstudios } = request.body;
      const nuevoIdOfertaAcademicaInt = parseInt(nuevoIdOfertaAcademica);
      const nuevoIdPlanEstudiosInt = parseInt(nuevoIdPlanEstudios);
  
      if (isNaN(nuevoIdOfertaAcademicaInt) || isNaN(nuevoIdPlanEstudiosInt)) {
        return response.status(400).json({ error: "Los nuevos IDs no son válidos" });
      }
      // Verificar si el grupo de oferta existe con esos IDs
      const existingOfertaGrupo = await prisma.ofertaAcademicaGrupo.findUnique({
        where: {
          idOfertaAcademica_idPlanEstudios: {
            idOfertaAcademica: idOfertaAcademica,
            idPlanEstudios: idPlanEstudios,
          },
        },
      });
  
      if (!existingOfertaGrupo) {
        return response.status(404).json({ error: "Oferta de grupo no encontrada" });
      }
  

      // Ahora proceder con la actualización
      const ofertaGrupo = await prisma.ofertaAcademicaGrupo.update({
        where: {
          idOfertaAcademica_idPlanEstudios: {
            idOfertaAcademica: idOfertaAcademica,
            idPlanEstudios: idPlanEstudios,
          },
        },
        data: {
          ofertaAcademica: {
            connect: {
              idOfertaAcademica: nuevoIdOfertaAcademicaInt,
            },
          },
          planEstudio: {
            connect: {
              idPlan: nuevoIdPlanEstudiosInt,
            },
          },
        },
        include: {
          ofertaAcademica: true,
          planEstudio: true,
        },
      });
  
      response.json({
        message: "Oferta de grupo actualizada con éxito",
        ofertaGrupo,
      });
    } catch (error) {
      console.error("Error al actualizar oferta de grupo:", error);
      response.status(500).json({ error: "Error interno al actualizar la oferta de grupo" });
    }
  };

//Eliminar oferta de grupo
module.exports.deleteOfertaGrupo = async (request, response, next) => {
    try {
        const idOfertaAcademica = parseInt(request.params.idOfertaAcademica); // ID de la oferta académica
        const idPlanEstudios = parseInt(request.params.idPlanEstudios);// ID del plan de estudios
  
      // Verifica que los parámetros sean números válidos
      if (isNaN(idOfertaAcademica) || isNaN(idPlanEstudios)) {
        return response.status(400).json({ error: "Los IDs proporcionados no son válidos" });
      }
  
      // Verificar si el grupo de oferta existe antes de eliminarlo
      const ofertaGrupoExistente = await prisma.ofertaAcademicaGrupo.findUnique({
        where: {
          idOfertaAcademica_idPlanEstudios: {
            idOfertaAcademica: idOfertaAcademica,
            idPlanEstudios: idPlanEstudios,
          },
        },
      });
  
      if (!ofertaGrupoExistente) {
        return response.status(404).json({ error: "Oferta de grupo no encontrada" });
      }
  
      // Si existe, eliminarla
      const ofertaGrupoEliminada = await prisma.ofertaAcademicaGrupo.delete({
        where: {
          idOfertaAcademica_idPlanEstudios: {
            idOfertaAcademica: idOfertaAcademica,
            idPlanEstudios: idPlanEstudios,
          },
        },
      });
  
      response.json({
        message: "Oferta de grupo eliminada con éxito",
        ofertaGrupo: ofertaGrupoEliminada,
      });
    } catch (error) {
      console.error("Error al eliminar oferta de grupo:", error);
      response.status(500).json({ error: "Error interno al eliminar la oferta de grupo" });
    }
  };
  