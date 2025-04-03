import { Perfil } from './Perfil';

export interface Docente {
    idDocente: number;
    idPerfil: number;
    perfil?: Perfil; 
  }