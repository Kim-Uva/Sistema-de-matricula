import { Estado } from "@prisma/client";
export const materias = [
        // **Inglés**
        { descripcion: "English for Business", estado: Estado.Activo },
        { descripcion: "English Literature", estado: Estado.Activo },
        { descripcion: "Advanced English Grammar", estado: Estado.Activo },
        { descripcion: "Conversational English", estado: Estado.Activo },
        { descripcion: "English Phonetics", estado: Estado.Activo },
      
        // **Contabilidad**
        { descripcion: "Contabilidad Financiera", estado: Estado.Activo },
        { descripcion: "Contabilidad de Costos", estado: Estado.Activo },
        { descripcion: "Contabilidad Tributaria", estado: Estado.Activo },
        { descripcion: "Contabilidad Administrativa", estado: Estado.Activo },
        { descripcion: "Auditoría Contable", estado: Estado.Activo },
      
        // **Ingeniería**
        { descripcion: "Fundamentos de Ingeniería Eléctrica", estado: Estado.Activo },
        { descripcion: "Cálculo Diferencial e Integral", estado: Estado.Activo },
        { descripcion: "Estructuras y Materiales", estado: Estado.Activo },
        { descripcion: "Termodinámica", estado: Estado.Activo },
        { descripcion: "Circuitos Eléctricos", estado: Estado.Activo },
        { descripcion: "Electrónica Analógica", estado: Estado.Activo },
        { descripcion: "Control Automático", estado: Estado.Activo },
        { descripcion: "Mecánica de Fluidos", estado: Estado.Activo },
        { descripcion: "Ingeniería de Software", estado: Estado.Activo },
        { descripcion: "Gestión de Proyectos de Ingeniería", estado: Estado.Activo },
      
        // **Medicina**
        { descripcion: "Anatomía Humana", estado: Estado.Activo },
        { descripcion: "Fisiología Humana", estado: Estado.Activo },
        { descripcion: "Microbiología Médica", estado: Estado.Activo },
        { descripcion: "Farmacología Básica", estado: Estado.Activo },
        { descripcion: "Pediatría", estado: Estado.Activo },
        { descripcion: "Medicina Interna", estado: Estado.Activo },
        { descripcion: "Psicología Médica", estado: Estado.Activo },
        { descripcion: "Enfermería Básica", estado: Estado.Activo },
        { descripcion: "Cirugía General", estado: Estado.Activo },
        { descripcion: "Emergencias Médicas", estado: Estado.Activo },
      
        //Arte  
        { descripcion: "Historia del Arte", estado: Estado.Activo },
        { descripcion: "Dibujo Artístico", estado: Estado.Activo },
        { descripcion: "Pintura", estado: Estado.Activo },
        { descripcion: "Escultura", estado: Estado.Activo },
        { descripcion: "Fotografía", estado: Estado.Activo },
        { descripcion: "Arte Contemporáneo", estado: Estado.Activo },
        { descripcion: "Arte Digital", estado: Estado.Activo },
        { descripcion: "Arte Urbano", estado: Estado.Activo },
        { descripcion: "Arte y Diseño", estado: Estado.Activo },
        { descripcion: "Arte y Cultura", estado: Estado.Activo },

        { descripcion: "Fundamentos de Arquitectura", estado: Estado.Activo },
        { descripcion: "Diseño Arquitectónico", estado: Estado.Activo },
        { descripcion: "Estructuras en la Arquitectura", estado: Estado.Activo },
        { descripcion: "Urbanismo", estado: Estado.Activo },
        { descripcion: "Historia de la Arquitectura", estado: Estado.Activo },
      
        // **Biología**
        { descripcion: "Biología Celular", estado: Estado.Activo },
        { descripcion: "Genética", estado: Estado.Activo },
        { descripcion: "Ecología", estado: Estado.Activo },
        { descripcion: "Biología Molecular", estado: Estado.Activo },
        { descripcion: "Fisiología Vegetal", estado: Estado.Activo },
      
        // **Ciencias de la Computación**
        { descripcion: "Algoritmos y Estructuras de Datos", estado: Estado.Activo },
        { descripcion: "Sistemas Operativos", estado: Estado.Activo },
        { descripcion: "Bases de Datos", estado: Estado.Activo },
        { descripcion: "Programación en Java", estado: Estado.Activo },
        { descripcion: "Redes de Computadoras", estado: Estado.Activo },
      
         // **Diseño Gráfico**
        { descripcion: "Teoría del Color", estado: Estado.Activo },
        { descripcion: "Diseño de Logotipos", estado: Estado.Activo },
        { descripcion: "Diseño Web", estado: Estado.Activo },
        { descripcion: "Tipografía", estado: Estado.Activo },
        { descripcion: "Photoshop Avanzado", estado: Estado.Activo },
      
        // **Economía**
        { descripcion: "Microeconomía", estado: Estado.Activo },
        { descripcion: "Macroeconomía", estado: Estado.Activo },
        { descripcion: "Economía Internacional", estado: Estado.Activo },
        { descripcion: "Teoría Económica", estado: Estado.Activo },
        { descripcion: "Economía del Trabajo", estado: Estado.Activo },

        // **Negocios**
        { descripcion: "Gestión Empresarial", estado: Estado.Activo },
        { descripcion: "Emprendimiento", estado: Estado.Activo },
        { descripcion: "Estrategias de Negocios", estado: Estado.Activo },
        { descripcion: "Negociación Internacional", estado: Estado.Activo },
        { descripcion: "Gestión de Recursos Humanos", estado: Estado.Activo },
        // **Marketing**
        { descripcion: "Fundamentos de Marketing", estado: Estado.Activo },
        { descripcion: "Marketing Digital", estado: Estado.Activo },
        { descripcion: "Investigación de Mercados", estado: Estado.Activo },
        { descripcion: "Comportamiento del Consumidor", estado: Estado.Activo },
        { descripcion: "Estrategias de Marketing", estado: Estado.Activo },
      
        // **Comunicación**
        { descripcion: "Comunicación Corporativa", estado: Estado.Activo },
        { descripcion: "Redacción de Contenidos", estado: Estado.Activo },
        { descripcion: "Medios de Comunicación", estado: Estado.Activo },
        { descripcion: "Comunicaciones Digitales", estado: Estado.Activo },
        { descripcion: "Publicidad y Propaganda", estado: Estado.Activo },
      

                // **Matemáticas**
        { descripcion: "Cálculo Diferencial", estado: Estado.Activo },
        { descripcion: "Álgebra Lineal", estado: Estado.Activo },
        { descripcion: "Geometría Analítica", estado: Estado.Activo },
        { descripcion: "Estadística", estado: Estado.Activo },
        { descripcion: "Teoría de Números", estado: Estado.Activo },
      
         // **Física**
        { descripcion: "Mecánica Clásica", estado: Estado.Activo },
        { descripcion: "Física Cuántica", estado: Estado.Activo },
        { descripcion: "Electromagnetismo", estado: Estado.Activo },
        { descripcion: "Termodinámica", estado: Estado.Activo },
        { descripcion: "Óptica", estado: Estado.Activo },

                // **Química**
        { descripcion: "Química Orgánica", estado: Estado.Activo },
        { descripcion: "Química Inorgánica", estado: Estado.Activo },
        { descripcion: "Química Analítica", estado: Estado.Activo },
        { descripcion: "Bioquímica", estado: Estado.Activo },
        { descripcion: "Química Física", estado: Estado.Activo },
      

           
        // **Educación**
        { descripcion: "Fundamentos de la Educación", estado: Estado.Activo },
        { descripcion: "Psicología Educacional", estado: Estado.Activo },
        { descripcion: "Metodología de la Enseñanza", estado: Estado.Activo },
        { descripcion: "Desarrollo Infantil", estado: Estado.Activo },
        { descripcion: "Técnicas de Estudio", estado: Estado.Activo },
      
       ];
      
