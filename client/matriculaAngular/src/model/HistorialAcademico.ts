import { Estudiante } from "./Estudiante";
import { Materia } from "./Materias";

export interface HistorialAcademico {
    idHistorialAcademico: number;
    idEstudiante: number;
    idMateria: number;
    notaFinal: number;
    estudiante: Estudiante;  // Relación con el estudiante
    materia: Materia;  // Relación con la materia
  }