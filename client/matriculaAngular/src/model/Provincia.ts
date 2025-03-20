export interface Provincia {
    ProvinciaId?: string;
    Provincia: string;
    // FechaDeCreacion?: string;
    // ActualizadoEn?: string;
    }

    export interface Canton {
        CantonId?: number;
        Canton: string;
        ProvinciaId?: number;
        Provincias: Provincia;
        Distritos: Distrito[];
      }
      
      export interface Distrito {
        DistritoId?: number;
        Distrito: string;
        CantonId?: number;
        Cantones: Canton;
      }