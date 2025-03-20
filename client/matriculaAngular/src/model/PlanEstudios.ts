import { Materia } from "./Materias";

export interface PlanEstudios {
    idPlan: number;
    nombre: string;
    descripcion: string;
    materias: Materia[];  // Relación con varias materias
  }