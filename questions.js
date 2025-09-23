let quizData = [
  // --- Concepto y Origen ---
  {
    question: "¿Qué es una Base de Datos (BD)?",
    options: [
      "Conjunto autodescriptivo de registros integrados",
      "Un archivo de texto plano",
      "Una hoja de cálculo",
    ],
    answer: "Conjunto autodescriptivo de registros integrados"
  },
  {
    question: "¿Qué describen los metadatos en una BD?",
    options: [
      "El contenido de los registros",
      "La estructura de la base de datos",
      "La dirección física del servidor",
    ],
    answer: "La estructura de la base de datos"
  },
  {
    question: "¿Dónde se almacenan los metadatos?",
    options: ["En tablas del sistema", "En archivos XML", "En hojas Excel"],
    answer: "En tablas del sistema"
  },
  {
    question: "¿Cuál era una limitación de los sistemas de archivos?",
    options: [
      "Independencia programa/datos",
      "Duplicación e incompatibilidad",
      "Facilidad para representar vistas de usuario",
    ],
    answer: "Duplicación e incompatibilidad"
  },
  {
    question: "¿Qué ventaja trajo el sistema de bases de datos frente al de archivos?",
    options: [
      "Datos integrados y menos duplicación",
      "Mayor dependencia del programa",
      "Mayor dificultad de acceso",
    ],
    answer: "Datos integrados y menos duplicación"
  },
  {
    question: "¿Qué modelo de base de datos utiliza tablas bidimensionales?",
    options: ["Jerárquico", "En red", "Relacional"],
    answer: "Relacional"
  },
  {
    question: "¿Cuál fue una evolución posterior de los sistemas de BD?",
    options: [
      "BD distribuidas y cliente/servidor",
      "Archivos binarios",
      "Registros manuales",
    ],
    answer: "BD distribuidas y cliente/servidor"
  },

  // --- Modelo Relacional ---
  {
    question: "¿Qué representa el modelo relacional?",
    options: [
      "Tablas de dos dimensiones",
      "Árboles con jerarquías",
      "Nodos en red",
    ],
    answer: "Tablas de dos dimensiones"
  },
  {
    question: "¿Qué es una entidad?",
    options: [
      "Un valor único",
      "Algo identificable e importante en el entorno de usuarios",
      "Un campo numérico",
    ],
    answer: "Algo identificable e importante en el entorno de usuarios"
  },
  {
    question: "¿Qué es una ocurrencia de una entidad?",
    options: [
      "Una asociación entre entidades",
      "Una instancia particular de una entidad",
      "Un atributo calculado",
    ],
    answer: "Una instancia particular de una entidad"
  },
  {
    question: "¿Cómo se representa una relación en un diagrama?",
    options: ["Con un rombo", "Con un círculo", "Con un triángulo"],
    answer: "Con un rombo"
  },
  {
    question: "¿Qué indica la cardinalidad en una relación?",
    options: [
      "El tipo de atributo",
      "El número de ocurrencias que pueden relacionarse",
      "El tamaño del dominio",
    ],
    answer: "El número de ocurrencias que pueden relacionarse"
  },
  {
    question: "¿Qué significa una restricción mandatory?",
    options: ["Opcional", "Obligatoria", "Redundante"],
    answer: "Obligatoria"
  },

  // --- Claves y atributos ---
  {
    question: "¿Qué es una clave primaria (PK)?",
    options: [
      "Atributo que enlaza tablas",
      "Atributo único que distingue cada ocurrencia",
      "Un campo calculado",
    ],
    answer: "Atributo único que distingue cada ocurrencia"
  },
  {
    question: "¿Qué es una clave foránea (FK)?",
    options: [
      "Atributo único de la entidad",
      "Atributo que enlaza una entidad con otra",
      "Atributo opcional",
    ],
    answer: "Atributo que enlaza una entidad con otra"
  },
  {
    question: "¿Qué es una entidad fuerte?",
    options: [
      "La que depende de otra entidad",
      "La que tiene clave primaria propia",
      "La que tiene atributos multivaluados",
    ],
    answer: "La que tiene clave primaria propia"
  },
  {
    question: "¿Qué es una entidad débil?",
    options: [
      "La que depende de otra entidad",
      "La que tiene clave primaria propia",
      "La que siempre tiene atributos derivados",
    ],
    answer: "La que depende de otra entidad"
  },
  {
    question: "¿Qué son atributos simples?",
    options: ["Indivisibles", "Que se dividen en subatributos", "Calculados"],
    answer: "Indivisibles"
  },
  {
    question: "¿Qué son atributos compuestos?",
    options: [
      "Indivisibles",
      "Descomponibles en otros atributos",
      "Siempre numéricos",
    ],
    answer: "Descomponibles en otros atributos"
  },
  {
    question: "¿Qué son atributos derivados?",
    options: ["Calculados a partir de otros", "Siempre de texto", "Siempre opcionales"],
    answer: "Calculados a partir de otros"
  },
  {
    question: "¿Qué son atributos multivaluados?",
    options: [
      "Que pueden contener varios valores del mismo dominio",
      "Que son claves foráneas",
      "Que siempre son enteros",
    ],
    answer: "Que pueden contener varios valores del mismo dominio"
  },
  {
    question: "¿Qué tipo de atributo sirve como PK?",
    options: ["Identificador", "Derivado", "Multivaluado"],
    answer: "Identificador"
  },
  {
    question: "¿Qué atributo diferencia ocurrencias en entidades débiles?",
    options: ["Discriminador", "Derivado", "Multivaluado"],
    answer: "Discriminador"
  },
  {
    question: "¿Cuál de estos es un tipo de dato frecuente en BD?",
    options: ["varchar", "boolean custom", "xml-node"],
    answer: "varchar"
  },
  {
    question: "¿Qué tipo de dato se usa para almacenar texto de longitud fija?",
    options: ["char", "varchar", "float"],
    answer: "char"
  },
  {
    question: "¿Qué tipo de dato se usa para almacenar números con decimales?",
    options: ["int", "float", "varchar"],
    answer: "float"
  },
  {
    question: "¿Qué tipo de dato se usa para almacenar fechas?",
    options: ["date", "char", "numeric"],
    answer: "date"
  },
  {
    question: "¿Qué tipo de dato se usa para almacenar números enteros?",
    options: ["int", "float", "varchar"],
    answer: "int"
  },

  // --- Componentes DBMS ---
  {
    question: "¿Qué hace el subsistema de diseño de un DBMS?",
    options: [
      "Procesa consultas en tiempo real",
      "Proporciona herramientas para crear tablas, consultas y reportes",
      "Traduce solicitudes en operaciones físicas",
    ],
    answer: "Proporciona herramientas para crear tablas, consultas y reportes"
  },
  {
    question: "¿Qué hace el subsistema de tiempo de ejecución?",
    options: ["Procesa consultas y reportes", "Administra backups", "Define reglas"],
    answer: "Procesa consultas y reportes"
  },
  {
    question: "¿Qué hace el motor de BD?",
    options: [
      "Traduce solicitudes en operaciones de lectura/escritura",
      "Edita diagramas",
      "Administra pantallas gráficas",
    ],
    answer: "Traduce solicitudes en operaciones de lectura/escritura"
  },
  {
    question: "¿Qué gestiona el motor de BD además de lecturas/escrituras?",
    options: [
      "Transacciones, bloqueos, respaldo y recuperación",
      "Solo pantallas",
      "Solo reportes gráficos",
    ],
    answer: "Transacciones, bloqueos, respaldo y recuperación"
  },

  // --- Desarrollo de BD ---
  {
    question: "¿Cuál es una estrategia de desarrollo de BD?",
    options: [
      "De lo general a lo particular",
      "Por prueba y error",
      "Copiar hojas de cálculo",
    ],
    answer: "De lo general a lo particular"
  },
  {
    question: "¿Qué incluye el modelado de datos?",
    options: [
      "Identificar entidades, atributos y relaciones",
      "Solo escribir código SQL",
      "Definir consultas complejas",
    ],
    answer: "Identificar entidades, atributos y relaciones"
  },
  {
    question: "¿Qué define un esquema de BD?",
    options: [
      "Tablas, relaciones, dominios y reglas de negocio",
      "Solo tablas físicas",
      "La interfaz de usuario",
    ],
    answer: "Tablas, relaciones, dominios y reglas de negocio"
  },

  // --- Cardinalidades ---
  {
    question: "¿Qué significa la cardinalidad 1:1?",
    options: [
      "Una ocurrencia de A se relaciona con una sola de B",
      "Una ocurrencia de A con varias de B",
      "Varias ocurrencias de A con varias de B",
    ],
    answer: "Una ocurrencia de A se relaciona con una sola de B"
  },
  {
    question: "¿Qué significa la cardinalidad 1:N?",
    options: [
      "Una ocurrencia de A con varias de B",
      "Una ocurrencia de A con una de B",
      "Varias ocurrencias de A con varias de B",
    ],
    answer: "Una ocurrencia de A con varias de B"
  },
  {
    question: "¿Qué significa la cardinalidad N:1?",
    options: [
      "Varias ocurrencias de A se relacionan con una de B",
      "Una ocurrencia de A con varias de B",
      "Una ocurrencia de A con una sola de B",
    ],
    answer: "Varias ocurrencias de A se relacionan con una de B"
  },
  {
    question: "¿Qué significa la cardinalidad N:M?",
    options: [
      "Varias ocurrencias de A se relacionan con varias de B",
      "Una ocurrencia de A con una sola de B",
      "Una ocurrencia de A con varias de B",
    ],
    answer: "Varias ocurrencias de A se relacionan con varias de B"
  },

  // --- Imagen: Identificar conceptos ---
  {
    question: "¿A qué corresponde la imagen?",
    options: ["Entidad", "Relación", "Atributo", "Entidad débil"],
    answer: "Entidad",
    img: "Entidad.png"
  },
  {
    question: "¿A qué corresponde la imagen?",
    options: ["Entidad", "Relación", "Atributo", "Entidad débil"],
    answer: "Relación",
    img: "Relacion.png"
  },
  {
    question: "¿A qué corresponde la imagen?",
    options: ["Entidad", "Relación", "Atributo", "Entidad débil"],
    answer: "Atributo",
    img: "Atributo.png"
  },
  {
    question: "¿A qué corresponde la imagen?",
    options: ["Entidad", "Relación", "Atributo", "Entidad débil"],
    answer: "Entidad débil",
    img: "Entidad_debil.png"
  },

  // --- Imagen: sin opciones (usuario las agregará) ---
  {
    question: "¿A qué tipo de atributo corresponde la imagen?",
    options: ["Derivado","Compuesto","Multi evaluados"],
    answer: "Derivado",
    img: "Derivado.png"
  },
  {
    question: "¿A qué tipo de atributo corresponde la imagen?",
    options: ["Derivado","Compuesto","Multi evaluados"],
    answer: "Compuesto",
    img: "Compuesto.png"
  },
  {
    question: "¿A qué tipo de atributo corresponde la imagen?",
    options: ["Derivado","Compuesto","Multi evaluados"],
    answer: "Multi evaluados",
    img: "Multivaluado.png"
  },
];


