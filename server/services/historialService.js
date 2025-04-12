const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//Historial
module.exports.getHistoriales = async (request, response, next) => {
  try {
    const historial = await prisma.historialAcademico.findMany({
      include: {
        estudiante: {
          include: {
            perfil: true,
          },
        },
        curso: true,
      },
      
    });

    if (historial.length === 0) {
      return response
        .status(404)
        .json({ message: "No se encontraron historiales" });
    }

    response.json(historial);
  } catch (error) {
    console.error("Error al obtener historiales:", error);
    response
      .status(500)
      .json({ error: "Error interno al obtener los historiales" });
  }
};

//Crear historial
module.exports.createHistorial = async (request, response, next) => {
  try {
    const { idEstudiante, idCurso, historialAcademico, notaFinal } =
      request.body;

    const historial = await prisma.historialAcademico.create({
      data: {
        estudiante: {
          connect: {
            idEstudiante: idEstudiante,
          },
        },
        curso: {
          connect: {
            idCurso: idCurso,
          },
        },
        idHistorialAcademico: historialAcademico,
        notaFinal: notaFinal,
      },
      include: {
        estudiante: {
          include: {
            perfil: true,
          },
        },
      },
    });

    response.json({ message: "Historial creado con éxito", historial });
  } catch (error) {
    console.error("Error al crear historial:", error);
    response.status(500).json({ error: "Error interno al crear el historial" });
  }
};

//Actualizar historial
module.exports.updateHistorial = async (request, response, next) => {
  try {
    const { id } = request.params;
    const { idEstudiante, idMateria, notaFinal } =
      request.body;

    const historial = await prisma.historialAcademico.update({
      where: {
        idHistorialAcademico: parseInt(id),
      },
      data: {
        estudiante: {
          connect: {
            idEstudiante: idEstudiante,
          },
        },
        curso: {
          connect: {
            idCurso: idMateria,
          },
        },
        notaFinal: notaFinal,
      },
      include: {
        estudiante: {
          include: {
            perfil: true,
          },
        },
      },
    });

    response.json({ message: "Historial actualizado con éxito", historial });
  } catch (error) {
    console.error("Error al actualizar historial:", error);
    response
      .status(500)
      .json({ error: "Error interno al actualizar el historial" });
  }
};

//Eliminar historial
module.exports.deleteHistorial = async (request, response, next) => {
  try {
    const { id } = request.params;
    const historial = await prisma.historialAcademico.delete({
      where: {
        idHistorialAcademico: parseInt(id)
      }
    });

    response.json({message: "Historial eliminado con éxito", historial});
  } catch (error) {
    console.error('Error al eliminar historial:', error);
    response.status(500).json({ error: 'Error interno al eliminar el historial'});
  }
};