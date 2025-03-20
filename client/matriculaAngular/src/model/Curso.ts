import { Docente } from "./Docente";
import { Estado } from "./Estado";
import { Horario } from "./Horario";
import { Materia } from "./Materias";

export interface Curso {
    idCurso: number;
    idMateria: number;
    idDocente: number;
    aula: string;
    estado: Estado;
    materia: Materia;  // Relación con Materias
    docente: Docente;   // Relación con Docente
    horario: Horario[]; // Relación con Horario, es un arreglo de objetos Horario
  }