import { HistorialAcademico } from "./HistorialAcademico";
import { Perfil } from "./Perfil";

export interface Estudiante {
    idEstudiante: number;
    idPerfil: number;
    perfil: Perfil; 
    historialAcademico: HistorialAcademico[];  

    
  }