const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

//Materias
module.exports.getMaterias = async (request, response, next) => {
  try {
    const materia = await prisma.materias.findMany();

    if (materia.length === 0) {
      return response.status(404).json({ message: 'No se encontraron materias' });
    }

    response.json(materia);
  } catch (error) {
    console.error('Error al obtener materias:', error);
    response.status(500).json({ error: 'Error interno al obtener las materias' });
  }
};

//Crear materia
module.exports.createMateria = async (request, response, next) => {
  try {
    const { idPlan, descripcion, estado } = request.body;
    const materia = await prisma.materias.create({
      data: {
        idPlan: idPlan,
        descripcion: descripcion,
        estado: estado,
      }
    });

    response.json({message: "Materia creada con éxito", materia});
  } catch (error) {
    console.error('Error al crear materia:', error);
    response.status(500).json({ error: 'Error interno al crear la materia' });
  }
};

//Obtener materia por id
module.exports.getMateriaById = async (request, response, next) => {
  try {
    const { id } = request.params;
    const materia = await prisma.materias.findUnique({
      where: {
        idMateria: parseInt(id)
      }
    });

    if (!materia) {
      return response.status(404).json({ message: 'Materia no encontrada' });
    }

    response.json(materia);
  } catch (error) {
    console.error('Error al obtener materia por id:', error);
    response.status(500).json({ error: 'Error interno al obtener la materia' });
  }
};

//Actualizar materia
module.exports.updateMateria = async (request, response, next) => {
  try {
    const { id } = request.params;
    const { idPlan, descripcion, estado } = request.body;
    const materia = await prisma.materias.update({
      where: {
        idMateria: parseInt(id)
      },
      data: {
        idPlan: idPlan,
        descripcion: descripcion,
        estado: estado,
      }
    });

    response.json({message: "Materia actualizada con éxito", materia});
  } catch (error) {
    console.error('Error al actualizar materia:', error);
    response.status(500).json({ error: 'Error interno al actualizar la materia' });
  }
};

//Eliminar materia
module.exports.deleteMateria = async (request, response, next) => {
  try {
    const { id } = request.params;
    const materia = await prisma.materias.delete({
      where: {
        idMateria: parseInt(id)
      }
    });

    response.json({message: "Materia eliminada con éxito", materia});
  } catch (error) {
    console.error('Error al eliminar materia:', error);
    response.status(500).json({ error: 'Error interno al eliminar la materia' });
  }
};