import { Docente } from "./Docente";
import { Estudiante } from "./Estudiante";

export interface Perfil {
    idUsuario?: number; 
    identificacion: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    telefono: string;
    correo: string;
    tipoUsuario: TipoUsuario;
    docente?: Docente;
    estudiante?: Estudiante; 
  }
  

  
  export type TipoUsuario = 'Usuario' | 'Docente' | 'Estudiante';
