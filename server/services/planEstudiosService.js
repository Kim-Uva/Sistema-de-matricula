const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

//Planes de estudios
module.exports.getPlanes = async (request, response, next) => {
  try {
    const plan = await prisma.planEstudios.findMany({
      include: {
        materias: true,  // Incluir materias asociadas al Plan de Estudios
      }
    });
    if (plan.length === 0) {
      return response.status(404).json({ message: 'No se encontraron planes de estudio' });
    }

    response.json(plan);
  } catch (error) {
    console.error('Error al obtener planes de estudio:', error);
    response.status(500).json({ error: 'Error interno al obtener los planes de estudio' });
  }
};
//Obtener plan por id
module.exports.getPlanById = async (request, response, next) => {
  let idPlan = parseInt(request.params.id);
  try {
    const plan = await prisma.planEstudios.findUnique({
      where: {
        idPlan: idPlan
      }
    });

    if (!plan) {
      return response.status(404).json({ message: 'No se encontró el plan de estudio' });
    }

    response.json(plan);
  } catch (error) {
    console.error('Error al obtener plan de estudio:', error);
    response.status(500).json({ error: 'Error interno al obtener el plan de estudio' });
  }
};

//Crear plan de estudios
module.exports.createPlan = async (request, response, next) => {
  try {
    const { descripcion, estado } = request.body;
    const plan = await prisma.planEstudios.create({
      data: {
        descripcion: descripcion,
        estado: estado,
      }
    });

    response.json({message: "Plan de estudio creado con éxito", plan});
  } catch (error) {
    console.error('Error al crear plan de estudios:', error);
    response.status(500).json({ error: 'Error interno al crear el plan de estudios' });
  }
};

//Actualizar plan de estudios
module.exports.updatePlan = async (request, response, next) => {
  let idPlan = parseInt(request.params.id);
  try {
    const { descripcion, estado } = request.body;
    const plan = await prisma.planEstudios.update({
      where: {
        idPlan: idPlan
      },
      data: {
        descripcion: descripcion,
        estado: estado,
      }
    });

    response.json({message: "Plan de estudio actualizado con éxito", plan});
  } catch (error) {
    console.error('Error al actualizar plan de estudios:', error);
    response.status(500).json({ error: 'Error interno al actualizar el plan de estudios' });
  }
};

//Eliminar plan de estudios
module.exports.deletePlan = async (request, response, next) => {
  let idPlan = parseInt(request.params.id);
  try {
    const plan = await prisma.planEstudios.delete({
      where: {
        idPlan: idPlan
      }
    });

    response.json({message: "Plan de estudio eliminado con éxito", plan});
  } catch (error) {
    console.error('Error al eliminar plan de estudios:', error);
    response.status(500).json({ error: 'Error interno al eliminar el plan de estudios' });
  }
};