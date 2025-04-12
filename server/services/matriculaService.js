const { PrismaClient, Estado } = require("@prisma/client")

const prisma = new PrismaClient();


//Crear matricula
module.exports.createMatricula = async (request, response, next) => {
  try {
    const { idEstudiante  } = request.body;

    const matricula = await prisma.matriculaEncabezado.create({
      data: {
        idEstudiante: idEstudiante,
        estado: "Activo",
      },
    });

    response.json({
        message: "Matrícula creada con éxito",
        idEncabezado: matricula.idEncabezado, 
      });  } catch (error) {
    console.error("Error al crear matrícula:", error);
    response.status(500).json({ error: "Error interno al crear la matrícula" });
  }
};


//crear detalle de matricula
module.exports.createMatriculaDetalle = async (request, response, next) => {
  try {
    const { idEncabezado, idCurso } = request.body;

    const matriculaDetalle = await prisma.matriculaDetalle.create({
      data: {
        idEncabezado: idEncabezado,
        idCurso: idCurso,
        estado: Estado.Activo
      }
    });

    response.json({ message: "Detalle de matrícula creado con éxito", matriculaDetalle });
  } catch (error) {
    console.error("Error al crear detalle de matrícula:", error);
    response.status(500).json({ error: "Error interno al crear el detalle de matrícula" });
  }
};


//get matriculaEncabezado
module.exports.getMatriculaEncabezado = async (request, response, next) => {
  try {
    const matriculaEncabezado = await prisma.matriculaEncabezado.findMany({
      include: {
        estudiante: true,
        matriculaDetalle: {
          include: {
            curso: {
              include: {
                materia: true,
                docente: {
                  include: {
                    perfil: true,
                  },
                },
                horario: true,
              },
            },
          },
        },
      },
    });

    if (matriculaEncabezado.length === 0) {
      return response.status(404).json({ message: 'No se encontraron matrículas' });
    }

    response.json(matriculaEncabezado);
  } catch (error) {
    console.error('Error al obtener matrícula:', error);
    response.status(500).json({ error: 'Error interno al obtener las matrículas' });
  }
};