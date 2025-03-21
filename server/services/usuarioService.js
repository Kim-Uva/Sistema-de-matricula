const { PrismaClient } = require("@prisma/client");
const bcrypt = require ('bcrypt');
const prisma = new PrismaClient();

//Usuarios
module.exports.getUsuarios = async (request, response, next) => {
  try {
    // Consulta para obtener todos los usuarios
    const perfil = await prisma.perfil.findMany();

    // Si no hay usuarios, devolver mensaje de error
    if (perfil.length === 0) {
      return response
        .status(404)
        .json({ message: "No se encontraron usuarios" });
    }

    // Si hay usuarios, devolverlas como JSON
    response.json(perfil);
  } catch (error) {
    // Manejo de errores si algo falla en la consulta
    console.error("Error al obtener usuarios:", error);
    response
      .status(500)
      .json({ error: "Error interno al obtener los usuarios" });
  }
};

//Usuario por id
module.exports.getUsuarioById = async (request, response, next) => {
  let idUsuario = parseInt(request.params.id);
  try {
    // Consulta para obtener un usuario por id
    const perfil = await prisma.perfil.findUnique({
      where: {
        idUsuario: idUsuario,
      },
    });

    // Si no hay usuario, devolver mensaje de error
    if (!perfil) {
      return response
        .status(404)
        .json({ message: "No se encontró el usuario" });
    }

    // Si hay usuario, devolverla como JSON
    response.json(perfil);
  } catch (error) {
    // Manejo de errores si algo falla en la consulta
    console.error("Error al obtener usuario:", error);
    response.status(500).json({ error: "Error interno al obtener el usuario" });
  }
};

//Crear usuario
module.exports.createUsuario = async (request, response, next) => {
  try {
    const {
      identificacion,
      nombre,
      apellido1,
      apellido2,
      correo,
      clave,
      estado,
      telefono,
      tipoUsuario,
    } = request.body;

    const hash = await bcrypt.hash(clave, 10);

    // Verificar que el correo no esté registrado por ser único
    const existeUsuario = await prisma.perfil.findUnique({
      where: { correo },
    });

    if (existeUsuario) {
      return response
        .status(400)
        .json({ message: "El correo ya está registrado" });
    }

    // Crear un nuevo usuario
    const perfil = await prisma.perfil.create({
      data: {
        identificacion: identificacion,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        correo: correo,
        clave: hash,
        estado: estado,
        telefono: telefono,
        tipoUsuario: tipoUsuario,
      },
    });

    
    if (tipoUsuario === "Docente") {
      await prisma.docente.create({
        data: {
          perfil: {
            connect: {
              idUsuario: perfil.idUsuario,
            },
          },
        },
      });

      return response
        .status(201)
        .json({ message: "Docente creado con éxito", perfil });
    } else if (tipoUsuario === "Estudiante") {
      await prisma.estudiante.create({
        data: {
          perfil: {
            connect: {
              idUsuario: perfil.idUsuario,
            },
          },
        },
      });
      return response
        .status(201)
        .json({ message: "Estudiante creado con éxito", perfil });
    }

    return response
      .status(201)
      .json({ message: "Usuario creado con éxito", perfil });
  } catch (error) {
    console.error(
      error
    );
  }
};

//Actualizar usuario
module.exports.updateUsuario = async (request, response, next) => {
  let idUsuario = parseInt(request.params.id);
  try {
    const {
      identificacion,
      nombre,
      apellido1,
      apellido2,
      correo,
      telefono,
      tipoUsuario,
    } = request.body;

    // Verificar si el correo ya existe en otro usuario
    const correoExistente = await prisma.perfil.findFirst({
      where: {
        correo: correo,
        NOT: { idUsuario: parseInt(idUsuario) }, // Excluir el usuario actual
      },
    });

    if (correoExistente) {
      return response
        .status(400)
        .json({ message: "El correo ya está en uso por otro usuario." });
    }

    // Actualizar un usuario
    const perfil = await prisma.perfil.update({
      where: {
        idUsuario: idUsuario,
      },
      data: {
        identificacion: identificacion,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        correo: correo,
        telefono: telefono,
        tipoUsuario: tipoUsuario,
      },
    });

    // Si no se actualiza el usuario, devolver mensaje de error
    if (!perfil) {
      return response
        .status(404)
        .json({ message: "No se pudo actualizar el usuario" });
    }

    // Si se actualiza el usuario, devolverlo como JSON
    response.json(perfil);
  } catch (error) {
    // Manejo de errores si algo falla en la actualización
    console.error("Error al actualizar usuario:", error);
    response
      .status(500)
      .json({ error: "Error interno al actualizar el usuario" });
  }
};


//Eliminar usuario
module.exports.deleteUsuario = async (request, response, next) => {
  let idUsuario = parseInt(request.params.id);
  try {
    
    // Eliminar la relacion de docente y estudiante
    await prisma.docente.deleteMany({
        where: { idPerfil: idUsuario }
    });

    await prisma.estudiante.deleteMany({
        where: { idPerfil: idUsuario }
    });
    
    const perfil = await prisma.perfil.delete({
      where: {
        idUsuario: idUsuario,
      },
    });

    // Si no se elimina el usuario, devolver mensaje
    if (!perfil) {
      return response
        .status(404)
        .json({ message: "No se pudo eliminar el usuario" });
    }

    // Si se elimina el usuario, devolverlo como JSON
    response.json({message: "Perfil Eliminado correctamente", perfil});
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    response
      .status(500)
      .json({ error: "Error interno al eliminar el usuario" });
  }
};