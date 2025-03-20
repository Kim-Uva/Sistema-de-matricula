import { Curso } from "./Curso";
import { Estado } from "./Estado";

export interface Horario {
    idHorario: number;
    idCurso: number;
    diaSemana: string;  
    horaInicio: string;  
    horaFin: string; 
    estado: Estado;
    curso: Curso;  
  }