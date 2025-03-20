import { Estado } from "@prisma/client";



export const planEstudios = [
    //Inglés
    { 
        descripcion: "Nivel A1: Inglés Básico - Introducción a la lengua", 
        estado: Estado.Activo,
        materias: [1, 2, 3]  // IDs de las materias (de 1 a 5)
      },
      { 
        descripcion: "Nivel A2: Inglés Básico - Comprensión y Producción de Texto", 
        estado: Estado.Activo,
        materias: [2, 4, 5]  // IDs de las materias (de 1 a 5)
      },
      { 
        descripcion: "Nivel B1: Inglés Intermedio - Conversación y Escritura Básica", 
        estado: Estado.Activo,
        materias: [3, 4, 1]  // IDs de las materias (de 1 a 5)
      },
      { 
        descripcion: "Nivel B2: Inglés Intermedio Alto - Expresión Oral y Redacción Avanzada", 
        estado: Estado.Activo,
        materias: [1, 5, 2]  // IDs de las materias (de 1 a 5)
      },
      { 
        descripcion: "Nivel C1: Inglés Avanzado - Uso Profesional del Idioma", 
        estado: Estado.Activo,
        materias: [4, 2, 3]  // IDs de las materias (de 1 a 5)
      },
      { 
        descripcion: "Nivel C2: Inglés Avanzado - Perfeccionamiento y Fluidez", 
        estado: Estado.Activo,
        materias: [5, 3, 1]  // IDs de las materias (de 1 a 5)
      },
      { 
        descripcion: "Curso Libre: Inglés para Negocios", 
        estado: Estado.Activo,
        materias: [2, 3, 4]  // IDs de las materias (de 1 a 5)
      },
      { 
        descripcion: "Curso Libre: Inglés Conversacional", 
        estado: Estado.Activo,
        materias: [1, 4, 5]  // IDs de las materias (de 1 a 5)
      },
    

// //contabilidad
    { 
      descripcion: "Nivel 1: Introducción a la Contabilidad - Conceptos Básicos", 
      estado: Estado.Activo,
      materias: [6, 7, 8, 61,69,81]
    },
    { 
      descripcion: "Nivel 2: Contabilidad Financiera - Registro de Transacciones", 
      estado: Estado.Activo,
      materias: [6, 9, 10, 62,70,82]
    },
    { 
      descripcion: "Nivel 3: Contabilidad de Costos - Análisis de Costos y Presupuestos", 
      estado: Estado.Activo,
      materias: [7, 8, 10, 63, 66,83]
    },
    { 
      descripcion: "Nivel 4: Contabilidad de Sociedades - Estructuras y Tipos de Entidades", 
      estado: Estado.Activo,
      materias: [8, 9, 6, 64,67,84]
    },
    { 
      descripcion: "Nivel 5: Auditoría Contable - Procedimientos y Técnicas de Auditoría", 
      estado: Estado.Activo,
      materias: [9, 7, 10, 65,68,85]
    },

//Ingeniería
    { 
      descripcion: "Nivel 1: Fundamentos de Programación - Introducción a los Lenguajes de Programación", 
      estado: Estado.Activo,
      materias: [11, 12, 13,51,81]
    },
    { 
      descripcion: "Nivel 2: Estructuras de Datos - Arreglos, Listas, Pilas y Colas", 
      estado: Estado.Activo,
      materias: [11, 14, 15,52,82]
    },
    { 
      descripcion: "Nivel 3: Programación Orientada a Objetos - Clases y Objetos", 
      estado: Estado.Activo,
      materias: [12, 16, 17,53,83]
    },
    { 
      descripcion: "Nivel 4: Desarrollo Web - HTML, CSS y JavaScript", 
      estado: Estado.Activo,
      materias: [13, 17, 18,54,84]
    },
    { 
      descripcion: "Nivel 5: Bases de Datos - SQL y Modelado de Datos", 
      estado: Estado.Activo,
      materias: [14, 18, 19 ,55,85]
    },
    { 
      descripcion: "Nivel 6: Desarrollo de Aplicaciones Móviles - Android y iOS", 
      estado: Estado.Activo,
      materias: [15, 16, 19]
    },
    { 
      descripcion: "Nivel 7: Programación en Python - Fundamentos y Aplicaciones", 
      estado: Estado.Activo,
      materias: [11, 14, 17]
    },
    { 
      descripcion: "Nivel 8: Desarrollo de Software Ágil - Scrum y Metodologías Ágiles", 
      estado: Estado.Activo,
      materias: [12, 15, 18]
    },
    { 
      descripcion: "Curso Libre: Desarrollo de Videojuegos con Unity", 
      estado: Estado.Activo,
      materias: [13, 16, 19]
    },
    { 
      descripcion: "Curso Libre: Inteligencia Artificial y Machine Learning con Python", 
      estado: Estado.Activo,
      materias: [14, 17, 19]
    },
    { 
      descripcion: "Curso Libre: Desarrollo de Aplicaciones Web con React", 
      estado: Estado.Activo,
      materias: [15, 18, 19]
    },

//     //Medicina
    { 
      descripcion: "Nivel 1: Fundamentos de Medicina - Anatomía Humana y Fisiología Básica", 
      estado: Estado.Activo,
      materias: [20, 21, 45,91]
    },
    { 
      descripcion: "Nivel 2: Bioquímica y Biología Celular - Procesos Bioquímicos y Celulares en el Cuerpo Humano", 
      estado: Estado.Activo,
      materias: [20, 22, 46,92]
    },
    { 
      descripcion: "Nivel 3: Microbiología y Parasitología - Bacterias, Virus y Parásitos en el Cuerpo Humano", 
      estado: Estado.Activo,
      materias: [21, 23, 47,93]
    },
    { 
      descripcion: "Nivel 4: Farmacología - Medicamentos y Su Efecto en el Cuerpo", 
      estado: Estado.Activo,
      materias: [22, 24 , 48,94]
    },
    { 
      descripcion: "Nivel 5: Patología - Enfermedades Comunes y su Diagnóstico", 
      estado: Estado.Activo,
      materias: [23, 25 , 49,95]
    },
    { 
      descripcion: "Nivel 6: Cirugía General - Principios y Procedimientos Quirúrgicos Básicos", 
      estado: Estado.Activo,
      materias: [24, 26 , 50]
    },
    { 
      descripcion: "Nivel 7: Medicina Interna - Diagnóstico y Tratamiento de Enfermedades Sistémicas", 
      estado: Estado.Activo,
      materias: [25, 27 , 48]
    },
    { 
      descripcion: "Nivel 8: Obstetricia y Ginecología - Salud Reproductiva y Obstétrica", 
      estado: Estado.Activo,
      materias: [26, 28]
    },
    { 
      descripcion: "Nivel 9: Pediatría - Diagnóstico y Tratamiento de Enfermedades en Niños", 
      estado: Estado.Activo,
      materias: [20, 27]
    },
    { 
      descripcion: "Nivel 10: Psiquiatría - Trastornos Mentales y Tratamientos", 
      estado: Estado.Activo,
      materias: [21, 28]
    },
    { 
      descripcion: "Curso Libre: Primeros Auxilios - Técnicas Básicas de Emergencia", 
      estado: Estado.Activo,
      materias: [22, 23]
    },
    { 
      descripcion: "Curso Libre: Medicina de Urgencias - Manejo de Casos Críticos", 
      estado: Estado.Activo,
      materias: [23, 24]
    },
    { 
      descripcion: "Curso Libre: Ética Médica y Bioética - Principios Éticos en la Práctica Médica", 
      estado: Estado.Activo,
      materias: [25, 26]
    },    

//     //Robótica
    { 
      descripcion: "Nivel 1: Fundamentos de Robótica - Introducción a la Robótica y sus Componentes", 
      estado: Estado.Activo,
      materias: [10, 11,86]
    },
    { 
      descripcion: "Nivel 2: Programación de Robots - Lenguajes de Programación y Algoritmos de Control", 
      estado: Estado.Activo,
      materias: [10, 12, 87]
    },
    { 
      descripcion: "Nivel 3: Electrónica para Robótica - Circuitos, Sensores y Actuadores", 
      estado: Estado.Activo,
      materias: [11, 13, 88]
    },
    { 
      descripcion: "Nivel 4: Mecánica de Robots - Diseño y Construcción de Estructuras Robóticas", 
      estado: Estado.Activo,
      materias: [12, 14, 89]
    },
    { 
      descripcion: "Nivel 5: Control de Robots - Teoría de Control y Sistemas de Retroalimentación", 
      estado: Estado.Activo,
      materias: [13, 15, 90]
    },
    { 
      descripcion: "Nivel 6: Robótica Móvil - Diseño y Control de Robots Autónomos y Vehículos Móviles", 
      estado: Estado.Activo,
      materias: [14, 16]
    },
    { 
      descripcion: "Nivel 7: Robótica Industrial - Aplicaciones de Robots en la Industria y Automatización", 
      estado: Estado.Activo,
      materias: [15, 17]
    },
    { 
      descripcion: "Nivel 8: Inteligencia Artificial en Robótica - Algoritmos de Aprendizaje Automático y Visión por Computadora", 
      estado: Estado.Activo,
      materias: [16, 18]
    },
    { 
      descripcion: "Nivel 9: Robótica Humanoide - Diseño y Control de Robots que Imitan el Comportamiento Humano", 
      estado: Estado.Activo,
      materias: [17, 19]
    },
    { 
      descripcion: "Nivel 10: Robótica Espacial - Aplicaciones de Robótica en el Espacio Exterior", 
      estado: Estado.Activo,
      materias: [10, 18]
    },
    { 
      descripcion: "Curso Libre: Drones y Robots Aéreos - Diseño y Operación de Robots Aéreos No Tripulados", 
      estado: Estado.Activo,
      materias: [11, 13]
    },
    { 
      descripcion: "Curso Libre: Robótica Colaborativa - Robots que Trabajan en Equipo con Humanos", 
      estado: Estado.Activo,
      materias: [14, 17]
    },
    { 
      descripcion: "Curso Libre: Robótica de Rescate - Diseño de Robots para Operaciones de Rescate y Emergencias", 
      estado: Estado.Activo,
      materias: [15, 19]
    },

      //arte
      { 
        descripcion: "Nivel 1: Introducción al Arte - Historia del Arte y Estilos Principales", 
        estado: Estado.Activo,
        materias: [28, 29]
      },
      { 
        descripcion: "Nivel 2: Dibujo Básico - Técnicas de Dibujo y Representación Visual", 
        estado: Estado.Activo,
        materias: [28, 30]
      },
      { 
        descripcion: "Nivel 3: Pintura - Técnicas de Pintura en Óleo, Acrílico y Acuarela", 
        estado: Estado.Activo,
        materias: [29, 31]
      },
      { 
        descripcion: "Nivel 4: Escultura - Modelado en Arcilla, Madera y Otros Materiales", 
        estado: Estado.Activo,
        materias: [30, 32]
      },
      { 
        descripcion: "Nivel 5: Historia del Arte - Estudio de Movimientos Artísticos y Artistas Clásicos", 
        estado: Estado.Activo,
        materias: [31, 33]
      },
      { 
        descripcion: "Nivel 6: Diseño Gráfico - Fundamentos del Diseño Digital y Composición Visual", 
        estado: Estado.Activo,
        materias: [32, 34]
      },
      { 
        descripcion: "Nivel 7: Fotografía Artística - Técnicas de Fotografía y Edición Digital", 
        estado: Estado.Activo,
        materias: [33, 35]
      },
      { 
        descripcion: "Nivel 8: Teoría del Arte - Análisis Crítico de Obras Artísticas y Movimientos", 
        estado: Estado.Activo,
        materias: [34, 36]
      },
      { 
        descripcion: "Nivel 9: Arte Contemporáneo - Estudio de Arte Contemporáneo y Nuevas Técnicas", 
        estado: Estado.Activo,
        materias: [35, 37]
      },
      { 
        descripcion: "Nivel 10: Instalación y Arte Urbano - Creación de Instalaciones y Arte en Espacios Públicos", 
        estado: Estado.Activo,
        materias: [36, 38]
      },
      { 
        descripcion: "Curso Libre: Arte Digital - Diseño y Creación de Obras Artísticas en Entornos Digitales", 
        estado: Estado.Activo,
        materias: [28, 37]
      },
      { 
        descripcion: "Curso Libre: Arte en 3D - Modelado y Creación de Obras Artísticas en Tres Dimensiones", 
        estado: Estado.Activo,
        materias: [29, 32]
      },
      { 
        descripcion: "Curso Libre: Técnicas de Collage - Composición Artística a Través de Recortes y Pega", 
        estado: Estado.Activo,
        materias: [30, 36]
      },
      { 
        descripcion: "Curso Libre: Arte y Cultura - Estudio de la Influencia de la Cultura en el Arte Contemporáneo", 
        estado: Estado.Activo,
        materias: [31, 38]
      },
      { 
        descripcion: "Curso Libre: Restauración de Arte - Técnicas para la Conservación y Restauración de Obras de Arte", 
        estado: Estado.Activo,
        materias: [32, 37]
      },
      { 
        descripcion: "Curso Libre: Pintura Abstracta - Creación y Teoría detrás de la Pintura Abstracta", 
        estado: Estado.Activo,
        materias: [33, 35]
      },
      

    //Ilustración
    { 
      descripcion: "Nivel 1: Introducción al Dibujo - Técnicas Básicas de Dibujo y Sombras", 
      estado: Estado.Activo,
      materias: [28, 29, 56]
    },
    { 
      descripcion: "Nivel 2: Anatomía para Ilustradores - Estudio de la Figura Humana", 
      estado: Estado.Activo,
      materias: [28, 30, 57]
    },
    { 
      descripcion: "Nivel 3: Composición Visual - Fundamentos de la Composición y el Diseño Gráfico", 
      estado: Estado.Activo,
      materias: [29, 31, 58]
    },
    { 
      descripcion: "Nivel 4: Técnicas de Dibujo a Lápiz - Expresión y Sombreado en Dibujos Tradicionales", 
      estado: Estado.Activo,
      materias: [30, 32, 59]
    },
    { 
      descripcion: "Nivel 5: Color en Ilustración - Teoría del Color y su Aplicación en la Ilustración", 
      estado: Estado.Activo,
      materias: [31, 33, 60]
    },
    { 
      descripcion: "Nivel 6: Ilustración Digital I - Introducción a las Herramientas Digitales de Ilustración", 
      estado: Estado.Activo,
      materias: [32, 34]
    },
    { 
      descripcion: "Nivel 7: Ilustración de Personajes - Creación y Diseño de Personajes y Estilos Visuales", 
      estado: Estado.Activo,
      materias: [33, 35]
    },
    { 
      descripcion: "Nivel 8: Ilustración de Paisajes - Creación de Ambientes y Escenarios en Ilustración", 
      estado: Estado.Activo,
      materias: [34, 36]
    },
    { 
      descripcion: "Nivel 9: Cómic y Novela Gráfica - Técnicas de Ilustración para Narrativas Visuales", 
      estado: Estado.Activo,
      materias: [35, 37]
    },
    { 
      descripcion: "Nivel 10: Ilustración Editorial - Diseño de Portadas y Contenido para Publicaciones", 
      estado: Estado.Activo,
      materias: [36, 38]
    },
    { 
      descripcion: "Curso Libre: Ilustración en Movimiento - Animación de Ilustraciones y Técnicas de Motion Graphics", 
      estado: Estado.Activo,
      materias: [28, 37]
    },
    { 
      descripcion: "Curso Libre: Ilustración Infantil - Técnicas y Estilos para Crear Libros Infantiles", 
      estado: Estado.Activo,
      materias: [29, 32]
    },
    { 
      descripcion: "Curso Libre: Ilustración para Videojuegos - Diseño de Personajes y Elementos Gráficos para Videojuegos", 
      estado: Estado.Activo,
      materias: [30, 36]
    },
    { 
      descripcion: "Curso Libre: Ilustración Digital II - Avanzando en las Herramientas Digitales para la Ilustración", 
      estado: Estado.Activo,
      materias: [31, 39]
    },
    { 
      descripcion: "Curso Libre: Ilustración de Moda - Creación de Diseños y Estilos en la Industria de la Moda", 
      estado: Estado.Activo,
      materias: [32, 40]
    },
    { 
      descripcion: "Curso Libre: Ilustración Científica - Técnicas de Representación Visual para el Campo Científico", 
      estado: Estado.Activo,
      materias: [33, 41]
    },
    { 
      descripcion: "Curso Libre: Ilustración Experimental - Explorando Nuevas Técnicas y Estilos Visuales", 
      estado: Estado.Activo,
      materias: [34, 42]
    },
    { 
      descripcion: "Curso Libre: Ilustración Surrealista - Creación de Imágenes Fantásticas e Imaginativas", 
      estado: Estado.Activo,
      materias: [35, 43]
    },
    { 
      descripcion: "Curso Libre: Ilustración Realista - Técnicas para Lograr un Estilo Visual Realista", 
      estado: Estado.Activo,
      materias: [36, 44]
    },
    
    
    //     //varios
    { 
      descripcion: "Curso Libre: Microsoft Excel - Técnicas Avanzadas de Análisis de Datos", 
      estado: Estado.Activo,
      materias: [71, 72]
    },
    { 
      descripcion: "Curso Libre: Microsoft Word - Diseño de Documentos Profesionales y Formatos", 
      estado: Estado.Activo,
      materias: [73, 74]
    },
    { 
      descripcion: "Curso Libre: Microsoft PowerPoint - Creación de Presentaciones Impactantes", 
      estado: Estado.Activo,
      materias: [75, 76]
    },
    { 
      descripcion: "Curso Libre: Microsoft Access - Gestión de Bases de Datos Relacionales", 
      estado: Estado.Activo,
      materias: [77, 78]
    },
    { 
      descripcion: "Curso Libre: Enseñanza - Pedagogía y Técnicas de Enseñanza Efectiva", 
      estado: Estado.Activo,
      materias: [96,97,98,99,100]
    },
    { 
      descripcion: "Curso Libre: Microsoft Outlook - Gestión Eficiente del Correo Electrónico y Calendarios", 
      estado: Estado.Activo,
      materias: [71, 80]
    },
    { 
      descripcion: "Curso Libre: Microsoft Teams - Colaboración y Comunicación en Equipos de Trabajo", 
      estado: Estado.Activo,
      materias: [72, 77]
    },
    { 
      descripcion: "Curso Libre: Photoshop CC - Edición Avanzada de Imágenes para Profesionales", 
      estado: Estado.Activo,
      materias: [73, 75, 77]
    },
    { 
      descripcion: "Curso Libre: Windows PowerShell - Automatización y Administración del Sistema", 
      estado: Estado.Activo,
      materias: [74, 76]
    },
    { 
      descripcion: "Curso Libre: OneDrive - Almacenamiento en la Nube y Gestión de Archivos Compartidos", 
      estado: Estado.Activo,
      materias: [78, 79]
    },
    
 //     //Marketing
    { 
      descripcion: "Nivel 1: Introducción al Marketing - Conceptos Básicos y Estrategias Iniciales", 
      estado: Estado.Activo,
      materias: [71, 72]
    },
    { 
      descripcion: "Nivel 2: Marketing Digital - Estrategias de Marketing en Plataformas Online", 
      estado: Estado.Activo,
      materias: [73, 74]
    },
    { 
      descripcion: "Nivel 3: Marketing de Contenidos - Creación y Gestión de Contenido para Audiencias", 
      estado: Estado.Activo,
      materias: [75, 76]
    },
    { 
      descripcion: "Nivel 4: Publicidad en Redes Sociales - Creación de Campañas en Facebook, Instagram y Twitter", 
      estado: Estado.Activo,
      materias: [77, 78]
    },
    { 
      descripcion: "Nivel 5: Marketing de Influencers - Estrategias de Colaboración con Influencers y Creadores de Contenido", 
      estado: Estado.Activo,
      materias: [79, 80]
    },
    { 
      descripcion: "Curso Libre: Marketing de Afiliados - Generación de Ingresos a Través de Programas de Afiliados", 
      estado: Estado.Activo,
      materias: [71, 76]
    },
    { 
      descripcion: "Curso Libre: Branding - Creación de una Marca Fuerte y Consistente en el Mercado", 
      estado: Estado.Activo,
      materias: [73, 77]
    },
    { 
      descripcion: "Curso Libre: Marketing de Producto - Estrategias de Posicionamiento y Lanzamiento de Productos", 
      estado: Estado.Activo,
      materias: [74, 75]
    },
    { 
      descripcion: "Curso Libre: Marketing en Buscadores - SEO y SEM para Mejorar la Visibilidad de la Marca", 
      estado: Estado.Activo,
      materias: [76, 78]
    },
    { 
      descripcion: "Curso Libre: Análisis de Mercado - Técnicas y Herramientas para Evaluar Tendencias y Competencia", 
      estado: Estado.Activo,
      materias: [79, 80]
    }
    

 ];

