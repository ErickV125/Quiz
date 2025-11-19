let quizData = [
  // =====================================================
  // A. MODELO ENTIDAD–RELACIÓN (ER) — CONCEPTOS GENERALES
  // =====================================================

  {
    question: "¿Cuál es el objetivo principal del modelo Entidad–Relación?",
    options: [
      "Representar conceptualmente la información antes del diseño físico",
      "Crear tablas directamente",
      "Optimizar consultas SQL"
    ],
    answer: "Representar conceptualmente la información antes del diseño físico"
  },
  {
    question: "Una entidad representa:",
    options: [
      "Una cosa u objeto del mundo real",
      "Una regla de negocio",
      "Una consulta SQL"
    ],
    answer: "Una cosa u objeto del mundo real"
  },
  {
    question: "¿Cómo se representa una entidad en el modelo ER (Chen)?",
    options: ["Rectángulo", "Rombo", "Óvalo"],
    answer: "Rectángulo"
  },
  {
    question: "¿Qué representa un atributo?",
    options: [
      "Una propiedad de una entidad",
      "Una conexión entre entidades",
      "Un índice"
    ],
    answer: "Una propiedad de una entidad"
  },
  {
    question: "¿Qué tipo de atributo es 'fecha_actual' derivada del sistema?",
    options: ["Derivado", "Multivaluado", "Compuesto"],
    answer: "Derivado"
  },
  {
    question: "Los atributos multivaluados deben modelarse como:",
    options: [
      "Una entidad propia relacionada",
      "Una clave primaria",
      "Un atributo compuesto"
    ],
    answer: "Una entidad propia relacionada"
  },
  {
    question: "¿Cómo se representa una relación en el modelo ER de Chen?",
    options: ["Rombo", "Rectángulo", "Línea punteada"],
    answer: "Rombo"
  },
  {
    question: "La cardinalidad máxima indica:",
    options: [
      "El número máximo de instancias relacionadas",
      "Si la relación es obligatoria",
      "La clave primaria"
    ],
    answer: "El número máximo de instancias relacionadas"
  },
  {
    question: "La participación mínima indica:",
    options: ["Opcional u obligatoria", "Número de atributos", "Tipo de clave"],
    answer: "Opcional u obligatoria"
  },
  {
    question: "Una entidad débil se caracteriza por:",
    options: [
      "Depender de otra entidad para existir",
      "Tener clave natural estable",
      "No tener atributos"
    ],
    answer: "Depender de otra entidad para existir"
  },

  // ======================
  // RELACIONES Y CARDINALIDAD
  // ======================

  {
    question: "En una relación 1:N, ¿dónde se coloca la clave foránea?",
    options: [
      "En el lado N",
      "En el lado 1",
      "En ambos lados"
    ],
    answer: "En el lado N"
  },
  {
    question: "Una relación N:M debe convertirse en:",
    options: [
      "Una tabla intermedia",
      "Una sola tabla",
      "Un atributo derivado"
    ],
    answer: "Una tabla intermedia"
  },
  {
    question: "Una relación con atributo propio (ej. fecha_inscripción) debe modelarse como:",
    options: [
      "Una entidad asociativa",
      "Una entidad débil",
      "Un atributo multivaluado"
    ],
    answer: "Una entidad asociativa"
  },
  {
    question: "Una relación recursiva ocurre cuando:",
    options: [
      "Una entidad se relaciona consigo misma",
      "Dos entidades comparten clave primaria",
      "Hay atributos compuestos"
    ],
    answer: "Una entidad se relaciona consigo misma"
  },
  {
    question: "Participación total significa:",
    options: [
      "Mínima = 1",
      "Máxima = 1",
      "Mínima = 0"
    ],
    answer: "Mínima = 1"
  },

  // ======================
  // CLAVES Y REGLAS
  // ======================

  {
    question: "Una clave primaria debe ser:",
    options: [
      "Única, no nula y estable",
      "Multivaluada",
      "Siempre compuesta"
    ],
    answer: "Única, no nula y estable"
  },
  {
    question: "Una clave surrogate es:",
    options: [
      "Un identificador artificial como un autoincrement",
      "Una clave derivada",
      "Una clave compuesta"
    ],
    answer: "Un identificador artificial como un autoincrement"
  },
  {
    question: "Una clave candidata es:",
    options: [
      "Cualquier atributo que pueda servir como clave primaria",
      "Una clave que no se usa",
      "Una clave foránea"
    ],
    answer: "Cualquier atributo que pueda servir como clave primaria"
  },
  {
    question: "Una superllave es:",
    options: [
      "Un conjunto de atributos que identifica tuplas, aunque tenga extras",
      "Una clave foránea",
      "Una clave compuesta obligatoria"
    ],
    answer: "Un conjunto de atributos que identifica tuplas, aunque tenga extras"
  },
  {
    question: "Una clave compuesta se forma por:",
    options: ["Más de un atributo", "Un atributo único", "Atributos derivados"],
    answer: "Más de un atributo"
  },

  // ======================
  // NORMALIZACIÓN – 1FN, 2FN, 3FN, BCNF, 4FN, 5FN
  // ======================

  {
    question: "La 1FN exige:",
    options: [
      "Atributos atómicos",
      "Eliminar dependencias parciales",
      "Eliminar transitivas"
    ],
    answer: "Atributos atómicos"
  },
  {
    question: "En 1FN, un atributo multivaluado debe:",
    options: [
      "Moverse a una tabla nueva",
      "Convertirse en clave",
      "Unirse con otros atributos"
    ],
    answer: "Moverse a una tabla nueva"
  },
  {
    question: "La 2FN aplica solo si:",
    options: [
      "La clave primaria es compuesta",
      "La clave es surrogate",
      "No hay clave primaria"
    ],
    answer: "La clave primaria es compuesta"
  },
  {
    question: "La 2FN elimina:",
    options: [
      "Dependencias parciales",
      "Dependencias transitivas",
      "Atributos nulos"
    ],
    answer: "Dependencias parciales"
  },
  {
    question: "La 3FN elimina:",
    options: [
      "Dependencias transitivas",
      "Dependencias multivaluadas",
      "Clave primaria compuesta"
    ],
    answer: "Dependencias transitivas"
  },
  {
    question: "BCNF es más estricta que 3FN porque:",
    options: [
      "Exige que todo determinante sea superclave",
      "Prohíbe claves compuestas",
      "No permite atributos derivados"
    ],
    answer: "Exige que todo determinante sea superclave"
  },
  {
    question: "La 4FN trata dependencias:",
    options: ["Multivaluadas", "Transitivas", "Funcionales simples"],
    answer: "Multivaluadas"
  },
  {
    question: "La 5FN se enfoca en:",
    options: [
      "Dependencias por unión",
      "Dependencias parciales",
      "Dependencias multivaluadas"
    ],
    answer: "Dependencias por unión"
  },
  {
    question: "La dependencia funcional A → B significa:",
    options: [
      "Que A determina a B",
      "Que B determina a A",
      "Que A y B no se relacionan"
    ],
    answer: "Que A determina a B"
  },
  {
    question: "La cerradura de atributos sirve para:",
    options: [
      "Determinar claves candidatas",
      "Optimizar consultas",
      "Crear índices"
    ],
    answer: "Determinar claves candidatas"
  },

  // ======================
  // ÁLGEBRA RELACIONAL
  // ======================

  {
    question: "La selección (σ) opera sobre:",
    options: ["Filas", "Columnas", "Índices"],
    answer: "Filas"
  },
  {
    question: "La proyección (π) selecciona:",
    options: ["Columnas", "Filas", "Registros duplicados"],
    answer: "Columnas"
  },
  {
    question: "El producto cartesiano genera:",
    options: [
      "Todas las combinaciones entre filas",
      "Solo coincidencias",
      "Una tabla vacía"
    ],
    answer: "Todas las combinaciones entre filas"
  },
  {
    question: "La operación división (÷) se usa para:",
    options: [
      "Encontrar quién cumple con todos los elementos de un conjunto",
      "Eliminar filas duplicadas",
      "Unir relaciones"
    ],
    answer: "Encontrar quién cumple con todos los elementos de un conjunto"
  },
  {
    question: "El join es equivalente a:",
    options: [
      "Producto cartesiano + selección",
      "Proyección + unión",
      "Selección + división"
    ],
    answer: "Producto cartesiano + selección"
  },

  // ======================
  // SQL AVANZADO
  // ======================

  {
    question: "INNER JOIN devuelve:",
    options: [
      "Solo filas coincidentes",
      "Todas las filas de la izquierda",
      "Todas las filas de ambas tablas"
    ],
    answer: "Solo filas coincidentes"
  },
  {
    question: "LEFT JOIN devuelve:",
    options: [
      "Todas las filas de la tabla izquierda",
      "Solo coincidencias",
      "El producto cartesiano"
    ],
    answer: "Todas las filas de la tabla izquierda"
  },
  {
    question: "FULL OUTER JOIN devuelve:",
    options: [
      "Todas las filas de ambas tablas",
      "Solo filas de la derecha",
      "Solo filas sin coincidencias"
    ],
    answer: "Todas las filas de ambas tablas"
  },
  {
    question: "Una subconsulta correlacionada:",
    options: [
      "Se ejecuta por cada fila de la consulta externa",
      "Se ejecuta una sola vez",
      "No usa tablas externas"
    ],
    answer: "Se ejecuta por cada fila de la consulta externa"
  },
  {
    question: "GROUP BY agrupa por:",
    options: ["Columnas", "Filas", "Registros vacíos"],
    answer: "Columnas"
  },
  {
    question: "HAVING se usa para:",
    options: [
      "Filtrar grupos",
      "Filtrar filas antes del agrupamiento",
      "Crear índices"
    ],
    answer: "Filtrar grupos"
  },
  {
    question: "Una window function usa la cláusula:",
    options: ["OVER", "WINDOW", "BY"],
    answer: "OVER"
  },
  {
    question: "ROW_NUMBER() sirve para:",
    options: [
      "Enumerar filas dentro de una partición",
      "Contar filas globales",
      "Eliminar duplicados"
    ],
    answer: "Enumerar filas dentro de una partición"
  },
  {
    question: "Un índice compuesto (A,B) sirve para:",
    options: [
      "Búsquedas por A o por A+B",
      "Búsquedas por B siempre",
      "Evitar claves primarias"
    ],
    answer: "Búsquedas por A o por A+B"
  },

  // ======================
  // TRANSACTIONS, ACID, ISOLATION
  // ======================

  {
    question: "Atomicidad significa:",
    options: [
      "La transacción se ejecuta toda o nada",
      "La transacción es rápida",
      "No hay claves duplicadas"
    ],
    answer: "La transacción se ejecuta toda o nada"
  },
  {
    question: "Consistencia implica:",
    options: [
      "Mantener reglas de integridad",
      "Evitar bloqueos",
      "Crear índices"
    ],
    answer: "Mantener reglas de integridad"
  },
  {
    question: "Aislamiento garantiza:",
    options: [
      "Equivalencia a ejecución serial",
      "Evitar atributos nulos",
      "Velocidad de consultas"
    ],
    answer: "Equivalencia a ejecución serial"
  },
  {
    question: "Durabilidad significa:",
    options: [
      "Los cambios persisten tras fallos",
      "Las consultas son rápidas",
      "Las transacciones son opcionales"
    ],
    answer: "Los cambios persisten tras fallos"
  },
  {
    question: "Read Uncommitted permite:",
    options: [
      "Dirty reads",
      "Phantom reads pero no dirty reads",
      "Evitar todos los problemas"
    ],
    answer: "Dirty reads"
  },
  {
    question: "Read Committed evita:",
    options: [
      "Dirty reads",
      "Phantom reads",
      "Non-repeatable reads"
    ],
    answer: "Dirty reads"
  },
  {
    question: "Repeatable Read evita:",
    options: [
      "Non-repeatable reads",
      "Dirty reads",
      "Phantom reads exclusivamente"
    ],
    answer: "Non-repeatable reads"
  },
  {
    question: "Serializable evita:",
    options: [
      "Todos los fenómenos",
      "Solo dirty reads",
      "Solo non-repeatable reads"
    ],
    answer: "Todos los fenómenos"
  },
  {
    question: "Un phantom read ocurre cuando:",
    options: [
      "La misma consulta devuelve filas adicionales",
      "Se lee un dato cambiado",
      "Hay dos transacciones esperando un lock"
    ],
    answer: "La misma consulta devuelve filas adicionales"
  },
  {
    question: "Un deadlock ocurre cuando:",
    options: [
      "Dos transacciones esperan recursos que la otra posee",
      "Una tabla queda sin índices",
      "Se corrompe el log"
    ],
    answer: "Dos transacciones esperan recursos que la otra posee"
  },

  // ======================
  // CONSTRAINTS
  // ======================

  {
    question: "PRIMARY KEY equivale a:",
    options: [
      "UNIQUE + NOT NULL",
      "CHECK + UNIQUE",
      "FOREIGN KEY"
    ],
    answer: "UNIQUE + NOT NULL"
  },
  {
    question: "ON DELETE CASCADE significa:",
    options: [
      "Borra los registros hijos al borrar el padre",
      "Impide borrar padres con hijos",
      "Pone los hijos a NULL"
    ],
    answer: "Borra los registros hijos al borrar el padre"
  },
  {
    question: "ON DELETE SET NULL:",
    options: [
      "Pone la FK a NULL",
      "Borra todos los registros",
      "Impide actualización"
    ],
    answer: "Pone la FK a NULL"
  },
  {
    question: "CHECK sirve para:",
    options: [
      "Validar rango o condición",
      "Crear claves",
      "Hacer joins"
    ],
    answer: "Validar rango o condición"
  },

  // ======================
  // NOSQL
  // ======================

  {
    question: "MongoDB es un ejemplo de:",
    options: ["Document store", "Graph DB", "Key-Value"],
    answer: "Document store"
  },
  {
    question: "Redis es un ejemplo de:",
    options: ["Key-Value", "Wide-column", "Document"],
    answer: "Key-Value"
  },
  {
    question: "Cassandra es un ejemplo de:",
    options: ["Wide-column", "Graph DB", "Document store"],
    answer: "Wide-column"
  },
  {
    question: "Neo4j es un ejemplo de:",
    options: ["Graph DB", "Document store", "Column store"],
    answer: "Graph DB"
  },
  {
    question: "NoSQL es ideal cuando:",
    options: [
      "El esquema cambia frecuentemente",
      "Se requiere integridad transaccional estricta",
      "Hay muchas relaciones complejas"
    ],
    answer: "El esquema cambia frecuentemente"
  },
  {
    question: "Eventual consistency significa:",
    options: [
      "La consistencia se garantiza con el tiempo",
      "No hay consistencia",
      "Todo es siempre consistente inmediatamente"
    ],
    answer: "La consistencia se garantiza con el tiempo"
  },

  // ======================
  // UML y Modelado
  // ======================

  {
    question: "En UML, una clase es similar a:",
    options: ["Una entidad", "Una PK", "Un índice"],
    answer: "Una entidad"
  },
  {
    question: "La multiplicidad 1..* equivale a:",
    options: ["1 a muchos", "1 a 1", "0 a 1"],
    answer: "1 a muchos"
  },

  // ======================
  // SQL PRÁCTICO
  // ======================

  {
    question: "¿Cuál comando inicia una transacción?",
    options: ["BEGIN", "START VIEW", "CREATE"],
    answer: "BEGIN"
  },
  {
    question: "¿Cuál comando revierte los cambios?",
    options: ["ROLLBACK", "DELETE", "DROP"],
    answer: "ROLLBACK"
  },
  {
    question: "¿Qué hace EXPLAIN?",
    options: [
      "Muestra el plan de ejecución",
      "Crea índices",
      "Cierra conexiones"
    ],
    answer: "Muestra el plan de ejecución"
  },
  {
    question: "¿Cuál es una buena práctica para producción?",
    options: [
      "Evitar SELECT *",
      "Usar subconsultas correlacionadas siempre",
      "No usar índices"
    ],
    answer: "Evitar SELECT *"
  },

  // ======================
  // MÁS PREGUNTAS PRÁCTICAS
  // ======================

  {
    question: "Una vista materializada:",
    options: [
      "Almacena los resultados",
      "Siempre se vuelve a calcular",
      "No permite índices"
    ],
    answer: "Almacena los resultados"
  },
  {
    question: "Un trigger se ejecuta:",
    options: [
      "Automáticamente ante un evento",
      "Solo manualmente",
      "Solo durante back-ups"
    ],
    answer: "Automáticamente ante un evento"
  },
  {
    question: "Los atributos derivados deben almacenarse solo si:",
    options: [
      "Se requiere rendimiento",
      "Son obligatorios",
      "Son multivaluados"
    ],
    answer: "Se requiere rendimiento"
  },
  {
    question: "Para reconstruir una relación sin pérdida se usa:",
    options: [
      "Join natural",
      "Intersección",
      "Diferencia"
    ],
    answer: "Join natural"
  },
  {
    question: "Una FD se preserva si:",
    options: [
      "Puede verificarse sin joins",
      "Requiere unir todas las tablas",
      "Depende de una clave surrogate"
    ],
    answer: "Puede verificarse sin joins"
  },
  {
    question: "La relación VentaDetalle(idVenta, idProducto, cantidad) tiene PK:",
    options: [
      "(idVenta, idProducto)",
      "idProducto",
      "cantidad"
    ],
    answer: "(idVenta, idProducto)"
  },
  {
    question: "Una entidad débil tiene su PK formada por:",
    options: [
      "La PK de la entidad fuerte + su clave parcial",
      "Solo su clave natural",
      "Un atributo derivado"
    ],
    answer: "La PK de la entidad fuerte + su clave parcial"
  }
];
