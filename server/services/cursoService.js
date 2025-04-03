const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//Cursos
module.exports.getCursos = async (request, response, next) => {
  try {
    const curso = await prisma.curso.findMany({
      include: {
        materia: true,
        docente: {
          include: {
            perfil: true,
        },
      },
        horario: true,
      },
    });

    if (curso.length === 0) {
      return response.status(404).json({ message: "No se encontraron cursos" });
    }

    response.json(curso);
  } catch (error) {
    console.error("Error al obtener cursos:", error);
    response.status(500).json({ error: "Error interno al obtener los cursos" });
  }
};

//Crear curso
module.exports.createCurso = async (request, response, next) => {
  try {
    const { idMateria, idDocente, aula, estado, horario } = request.body;

    const curso = await prisma.curso.create({
      data: {
        idMateria: idMateria,
        idDocente: idDocente,
        aula: aula,
        estado: estado,
        horario: {
          create: horario.map((h) => ({
            diaSemana: h.diaSemana,
            horaInicio: h.horaInicio,
            horaFin: h.horaFin,
            estado: h.estado,
          })),
        },
      },
      include: {
        materia: true,
        docente: {
          include: {
            perfil: true,
          },
        },
        horario: true,
      },
    });

    response.json({ message: "Curso creado con éxito", curso });
  } catch (error) {
    console.error("Error al crear curso:", error);
    response.status(500).json({ error: "Error interno al crear el curso" });
  }
};

//Actualizar curso
module.exports.updateCurso = async (request, response, next) => {
  try {
    const { id } = request.params;
    const { idMateria, idDocente, aula, horario } = request.body;

    const curso = await prisma.curso.update({
      where: {
        idCurso: parseInt(id),
        },
      data: {
        idMateria: idMateria,
        idDocente: idDocente,
        aula: aula,
        horario: {
          deleteMany: {},     //Agregar nuevos horarios**
          create: horario.map((h) => ({
            diaSemana: h.diaSemana,
            horaInicio: h.horaInicio,
            horaFin: h.horaFin,
            estado: h.estado,
          })),
        },
      },
      include: {
        materia: true,
        docente: {
          include: {
            perfil: true,
          },
        },
        horario: true,
      },
    });

    response.json({ message: "Curso actualizado con éxito", curso });
  } catch (error) {
    console.error("Error al actualizar curso:", error);
    response
      .status(500)
      .json({ error: "Error interno al actualizar el curso" });
  }
};

//Eliminar curso
module.exports.deleteCurso = async (request, response, next) => {
  try {
    const { id } = request.params;
     await prisma.horario.deleteMany({
      where: {
        idCurso: parseInt(id),
       
      },
    });

   const curso = await prisma.curso.delete({
      where: {
        idCurso: parseInt(id),
        },
        include: {
            materia: true,
            docente: {
              include: {
                perfil: true,
              },
            },
          },
    });

    response.json({ message: "Curso eliminado con éxito", curso });
  } catch (error) {
    console.error("Error al eliminar curso:", error);
    response
      .status(500)
      .json({ error: "Error interno al eliminar el curso" });
  }
};

//Curso por id
module.exports.getCursoById = async (request, response, next) => {
  try {
    const { id } = request.params;
    const curso = await prisma.curso.findUnique({
      where: {
        idCurso: parseInt(id),
      },
      include: {
        materia: true,
        docente: {
          include: {
            perfil: true,
          },
        },
        horario: true,
      },
    });

    if (!curso) {
      return response.status(404).json({ message: "No se encontró el curso" });
    }

    response.json(curso);
  } catch (error) {
    console.error("Error al obtener curso:", error);
    response.status(500).json({ error: "Error interno al obtener el curso" });
  }
};

