import { Estado } from "./Estado";

export interface MatriculaEncabezado {
    idEncabezado: number;
    idEstudiante: number;
    fechaMatricula: Date;
    estado: Estado;
    
}
