import { PrismaClient } from "@prisma/client";
import { Estado } from "@prisma/client";
import { cursos } from "./seeds/cursos";
import { provincias } from "./seeds/direcciones";
import { planEstudios } from "./seeds/planEstudios";
import { materias } from "./seeds/materias";
import { perfil } from "./seeds/usuarios";
import { ofertas  } from "./seeds/ofertas";
const bcrypt = require ('bcrypt');



const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  // Usuarios
  const clavesPorTipo = {
    Docente: "Docente123",
    Estudiante: "Estudiante123",
    Usuario: "Admin123",
  };
  const perfilesConClave = await Promise.all(
    perfil.map(async (p) => ({
      ...p,
      clave: await bcrypt.hash(clavesPorTipo[p.tipoUsuario] || "Usuario123", 10),
    }))
  );
  await prisma.perfil.createMany({ data: perfilesConClave });

  for (const listaPerfil of perfil) {
    const existePerfil = await prisma.perfil.findUnique({
      where: {
        correo: listaPerfil.correo,
      },
    });
    if (existePerfil) {
   
      if (listaPerfil.tipoUsuario === "Docente") {
        await prisma.docente.create({
          data: {
            perfil: {
              connect: {
                idUsuario: existePerfil.idUsuario, // Conectar usando el id generado automáticamente
              },
            },
          },
        });
      } else {
        if (listaPerfil.tipoUsuario === "Estudiante") {
          await prisma.estudiante.create({
            data: {
              perfil: {
                connect: {
                  idUsuario: existePerfil.idUsuario, // Conectar usando el id generado automáticamente
                },
              },
            },
          });
        } else {
          console.log(`Perfil con correo ${listaPerfil.correo} no encontrado.`);
        }
      }
    }
  }

  // Materias
  await prisma.materias.createMany({
    data: materias,
  });



  for (const listaCursos of cursos) {
    const docenteExistente = await prisma.docente.findUnique({
      where: { idDocente: listaCursos.idDocente },
    });
  
    if (!docenteExistente) {
      console.error(`Docente con idDocente ${listaCursos.idDocente} no encontrado.`);
      continue; 
    }
      await prisma.curso.create({
      data: {
        idMateria: listaCursos.idMateria,
        idDocente: listaCursos.idDocente,
        aula: listaCursos.aula,
        estado: listaCursos.estado,
        horario: {
          create: listaCursos.horarios?.map((horario) => ({
            diaSemana: horario.diaSemana,
            horaInicio: horario.horaInicio,
            horaFin: horario.horaFin,
            estado: listaCursos.estado,
          })) || [], 
        },
      },
    });
  }
  
  // Plan de estudios
  for (const listaPlan of planEstudios) {
    // Crear el Plan de Estudios
    const createdPlan = await prisma.planEstudios.create({
      data: {
        descripcion: listaPlan.descripcion,
        estado: listaPlan.estado,
      },
    });

    // Actualizar las materias asociadas al Plan de Estudios
    for (const materia of listaPlan.materias) {
      await prisma.materias.update({
        where: {
          idMateria: materia,
        },
        data: {
          idPlan: createdPlan.idPlan, // idPlan generado
        },
      });
    }

    console.log(`Plan de estudio creado: ${createdPlan.descripcion}`);
  }

  // Ofertas
  await prisma.ofertaAcademica.createMany({
    data: ofertas,
  });

  // Direcciones
  for (const listaProvincias of provincias) {
    // Recorrer la lista de provincias
    const createdDireccion = await prisma.provincias.create({
      // Por cada ciclo, crear una provincia en la base de datos
      data: {
        Provincia: listaProvincias.Provincia, //Atributo Provincia en el doc direcciones.ts
        Cantones: {
          create: listaProvincias.Cantones.map((canton) => ({
            //el map funciona para recorrer la lista de cantones de cada provincia
            Canton: canton.Canton,
            Distritos: {
              create: canton.Distritos.map((distrito) => ({
                Distrito: distrito,
              })),
            },
          })),
        },
      },
    });
    console.log("Dirección creada con exito:", createdDireccion);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
