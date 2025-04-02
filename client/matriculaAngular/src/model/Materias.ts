import { Curso } from "./Curso";
import { Estado } from "./Estado";
import { PlanEstudios } from "./PlanEstudios";

export interface Materia {
    idMateria: number;
    idPlan?: number;  // Opcional ya que es nullable en el modelo Prisma
    descripcion: string;
    estado: Estado;
    planEstudios?: PlanEstudios;  // Relación con PlanEstudios, opcional
    //curso: Curso[];  // Relación con varios cursos
  }