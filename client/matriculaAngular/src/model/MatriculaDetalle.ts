import { Estado } from "./Estado";

export interface MatriculaDetalle {
    idMatriculaDetalle: number;
    idEncabezado: number;
    idMateria: number;
    idEstudiante: number;
    idCurso: number;
    estado: Estado;
}