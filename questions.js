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
    question: "¿Dónde se almacenan los metadatos en un DBMS?",
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
    question: "¿Cuál fue una evolución posterior de los sistemas de BD?",
    options: [
      "BD distribuidas y cliente/servidor",
      "Archivos binarios",
      "Registros manuales",
    ],
    answer: "BD distribuidas y cliente/servidor"
  },

  // --- Modelo Relacional y ER ---
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
    question: "¿Cómo se representa una relación en un diagrama ER?",
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
    question: "¿Qué atributo diferencia ocurrencias en entidades débiles?",
    options: ["Discriminador", "Derivado", "Multivaluado"],
    answer: "Discriminador"
  },

  // --- Tipos de datos ---
  {
    question: "¿Cuál de estos es un tipo de dato frecuente en BD?",
    options: ["varchar", "boolean custom", "xml-node"],
    answer: "varchar"
  },
  {
    question: "¿Qué tipo de dato se usa para texto de longitud fija?",
    options: ["char", "varchar", "float"],
    answer: "char"
  },
  {
    question: "¿Qué tipo de dato se usa para números con decimales?",
    options: ["int", "float", "varchar"],
    answer: "float"
  },
  {
    question: "¿Qué tipo de dato se usa para fechas?",
    options: ["date", "char", "numeric"],
    answer: "date"
  },
  {
    question: "¿Qué tipo de dato se usa para números enteros?",
    options: ["int", "float", "varchar"],
    answer: "int"
  },

  // --- DBMS ---
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

  // --- Desarrollo y normalización ---
  {
    question: "¿Qué es el modelado de base de datos?",
    options: [
      "El proceso de diseñar cómo se organizará la información en una base de datos",
      "Un método para programar consultas SQL",
      "Un lenguaje de programación",
      "Un proceso exclusivo de bases NoSQL"
    ],
    answer: "El proceso de diseñar cómo se organizará la información en una base de datos"
  },
  {
    question: "¿Cuáles son los tres niveles principales de modelado de BD?",
    options: [
        "Conceptual, lógico y físico",
        "Visual, lógico y numérico",
        "Jerárquico, en red y relacional",
        "Cliente, servidor y distribuido"
    ],
    answer: "Conceptual, lógico y físico"
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
  {
    question: "¿Cuál es el objetivo de la normalización?",
    options: [
        "Evitar redundancias y anomalías",
        "Aumentar el tamaño de las tablas",
        "Reducir la cantidad de claves primarias",
        "Eliminar la necesidad de relaciones"
    ],
    answer: "Evitar redundancias y anomalías"
  },
  {
    question: "¿Qué exige la Primera Forma Normal (1FN)?",
    options: [
        "Que los atributos sean atómicos",
        "Que cada tabla tenga al menos dos claves primarias",
        "Que no existan dependencias transitivas",
        "Que todo atributo dependa de la clave primaria completa"
    ],
    answer: "Que los atributos sean atómicos"
  },
  {
    question: "En la Segunda Forma Normal (2FN), los atributos deben depender de:",
    options: [
        "Toda la clave primaria completa",
        "Otro atributo de la tabla",
        "El motor de base de datos",
        "Un índice externo"
    ],
    answer: "Toda la clave primaria completa"
  },
  {
    question: "¿Qué se elimina en la Tercera Forma Normal (3FN)?",
    options: [
        "Dependencias transitivas",
        "Claves primarias",
        "Atributos atómicos",
        "Entidades débiles"
    ],
    answer: "Dependencias transitivas"
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
    question: "¿Qué significa la cardinalidad N:M?",
    options: [
      "Varias ocurrencias de A se relacionan con varias de B",
      "Una ocurrencia de A con una sola de B",
      "Una ocurrencia de A con varias de B",
    ],
    answer: "Varias ocurrencias de A se relacionan con varias de B"
  },

  // --- Imagen: Identificar conceptos ---
  { question: "¿A qué corresponde la imagen?", options: ["Entidad", "Relación", "Atributo", "Entidad débil"], answer: "Entidad", img: "img/Entidad.png" },
  { question: "¿A qué corresponde la imagen?", options: ["Entidad", "Relación", "Atributo", "Entidad débil"], answer: "Relación", img: "img/Relacion.png" },
  { question: "¿A qué corresponde la imagen?", options: ["Entidad", "Relación", "Atributo", "Entidad débil"], answer: "Atributo", img: "img/Atributo.png" },
  { question: "¿A qué corresponde la imagen?", options: ["Entidad", "Relación", "Atributo", "Entidad débil"], answer: "Entidad débil", img: "img/Entidad_debil.png" },

  // --- Imagen: atributos ---
  { question: "¿A qué tipo de atributo corresponde la imagen?", options: ["Derivado","Compuesto","Multivaluado"], answer: "Derivado", img: "img/Derivado.png" },
  { question: "¿A qué tipo de atributo corresponde la imagen?", options: ["Derivado","Compuesto","Multivaluado"], answer: "Compuesto", img: "img/Compuesto.png" },
  { question: "¿A qué tipo de atributo corresponde la imagen?", options: ["Derivado","Compuesto","Multivaluado"], answer: "Multivaluado", img: "img/Multivaluado.png" },
];

// Edgar F. Codd - Modelo Relacional
quizData.push({
    question: "¿Quién es considerado el padre del modelo relacional de bases de datos?",
    options: [
        "Edgar F. Codd",
        "Peter Chen",
        "Charles Babbage",
        "E. F. Schumacher"
    ],
    answer: "Edgar F. Codd"
});

quizData.push({
    question: "¿Cuál fue el mayor aporte de Edgar Codd a las bases de datos?",
    options: [
        "El modelo relacional",
        "El modelo en red",
        "La programación orientada a objetos",
        "Los sistemas distribuidos"
    ],
    answer: "El modelo relacional"
});

quizData.push({
    question: "¿En qué década Edgar Codd propuso el modelo relacional?",
    options: [
        "1970s",
        "1960s",
        "1980s",
        "1950s"
    ],
    answer: "1970s"
});

// Peter Chen - Modelo Entidad-Relación
quizData.push({
    question: "¿Quién propuso el modelo Entidad-Relación (ER)?",
    options: [
        "Peter Chen",
        "Edgar Codd",
        "Alan Turing",
        "Donald Knuth"
    ],
    answer: "Peter Chen"
});

quizData.push({
    question: "¿Cuál es el principal aporte de Peter Chen a las bases de datos?",
    options: [
        "El modelo Entidad-Relación",
        "El modelo lógico",
        "La normalización",
        "La creación de SQL"
    ],
    answer: "El modelo Entidad-Relación"
});

// Integridad referencial
quizData.push({
    question: "¿Qué garantiza la integridad referencial en bases de datos?",
    options: [
        "Que los valores de clave foránea correspondan a valores existentes en la clave primaria relacionada",
        "Que no existan duplicados en la tabla",
        "Que todos los atributos sean atómicos",
        "Que las tablas estén en 3FN"
    ],
    answer: "Que los valores de clave foránea correspondan a valores existentes en la clave primaria relacionada"
});

quizData.push({
    question: "¿Qué ocurre si intentamos insertar una clave foránea que no existe en la tabla padre?",
    options: [
        "Se viola la integridad referencial",
        "Se crea automáticamente en la tabla padre",
        "No afecta a la base de datos",
        "Se elimina la fila de la tabla padre"
    ],
    answer: "Se viola la integridad referencial"
});

quizData.push({
    question: "¿Qué sucede si eliminamos un registro en la tabla padre al que hacen referencia varias claves foráneas?",
    options: [
        "Puede provocar violación de integridad referencial",
        "La base de datos lo permite siempre",
        "No tiene ningún efecto",
        "Se borran todos los registros hijos automáticamente"
    ],
    answer: "Puede provocar violación de integridad referencial"
});
