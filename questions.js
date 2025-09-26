let quizData = [
  // --- Concepto de SO ---
  {
    question: "¿Qué es un sistema operativo?",
    options: [
      "Un conjunto de programas que controla, coordina y dirige los servicios y aplicaciones de la computadora",
      "Un tipo de hardware especializado",
      "Un lenguaje de programación"
    ],
    answer: "Un conjunto de programas que controla, coordina y dirige los servicios y aplicaciones de la computadora"
  },
  {
    question: "¿Cuál es la jerarquía correcta de los elementos de una computadora?",
    options: [
      "Hardware → SO → Aplicación → Usuario",
      "Usuario → Aplicación → SO → Hardware",
      "Aplicación → Usuario → SO → Hardware"
    ],
    answer: "Usuario → Aplicación → SO → Hardware"
  },
  {
    question: "¿Qué tipos de recursos administra el sistema operativo?",
    options: [
      "Recursos físicos o lógicos",
      "Solamente recursos físicos",
      "Solamente recursos lógicos"
    ],
    answer: "Recursos físicos o lógicos"
  },

  // --- Componentes ---
  {
    question: "¿Cuál NO es un componente básico del sistema operativo?",
    options: [
      "Gestor de procesos",
      "Gestor de memoria",
      "Compilador de código"
    ],
    answer: "Compilador de código"
  },
  {
    question: "¿Qué hace el intérprete de comandos?",
    options: [
      "Traduce lo que el usuario escribe en la terminal en instrucciones para el SO",
      "Administra la memoria entre procesos",
      "Crea la estructura de árbol del sistema de archivos"
    ],
    answer: "Traduce lo que el usuario escribe en la terminal en instrucciones para el SO"
  },

  // --- Procesos ---
  {
    question: "¿Cuáles son los 5 estados de un proceso?",
    options: [
      "Inicio, Listo, Ejecución, Bloqueado, Fin",
      "Inicio, Espera, Ejecución, Suspensión, Fin",
      "Creación, Ejecución, Bloqueo, Suspensión, Terminación"
    ],
    answer: "Inicio, Listo, Ejecución, Bloqueado, Fin"
  },
  {
    question: "¿Cuál NO es una causa de interrupción de procesos?",
    options: [
      "Por el propio sistema operativo",
      "Por hardware",
      "Por compilación de código"
    ],
    answer: "Por compilación de código"
  },

  // --- Memoria ---
  {
    question: "¿Cuál es la función principal de la gestión de memoria?",
    options: [
      "Asignar y proteger espacios de memoria a procesos",
      "Ejecutar instrucciones en la CPU",
      "Optimizar la velocidad del disco duro"
    ],
    answer: "Asignar y proteger espacios de memoria a procesos"
  },
  {
    question: "¿Qué ocurre en un sistema monoprogramado?",
    options: [
      "La memoria se divide en dos: una para el SO y otra para el programa en ejecución",
      "La memoria se subdivide en múltiples particiones dinámicas",
      "Cada proceso obtiene un espacio lógico independiente"
    ],
    answer: "La memoria se divide en dos: una para el SO y otra para el programa en ejecución"
  },
  {
    question: "¿Qué ocurre en un sistema multiprogramado?",
    options: [
      "Solo puede ejecutarse un proceso a la vez",
      "La memoria se subdivide para alojar varios procesos",
      "No existe protección entre procesos"
    ],
    answer: "La memoria se subdivide para alojar varios procesos"
  },

  // --- Reubicación ---
  {
    question: "La reubicación estática:",
    options: [
      "Se hace antes o durante la carga del proceso y genera fragmentación interna",
      "Se hace en tiempo de ejecución y genera fragmentación externa",
      "Elimina por completo la fragmentación"
    ],
    answer: "Se hace antes o durante la carga del proceso y genera fragmentación interna"
  },
  {
    question: "La reubicación dinámica:",
    options: [
      "Se hace antes de la carga del proceso",
      "Traduce direcciones virtuales a físicas en tiempo de ejecución y puede generar fragmentación externa",
      "Solo se aplica en sistemas monoprogramados"
    ],
    answer: "Traduce direcciones virtuales a físicas en tiempo de ejecución y puede generar fragmentación externa"
  },

  // --- Kernel ---
  {
    question: "¿Qué es el núcleo (kernel) de un sistema operativo?",
    options: [
      "El código central encargado de gestionar hardware, servicios y procesos",
      "El sistema de archivos",
      "El intérprete de comandos"
    ],
    answer: "El código central encargado de gestionar hardware, servicios y procesos"
  },
  {
    question: "¿Qué caracteriza a un kernel monolítico?",
    options: [
      "Todos los componentes están integrados en un único programa",
      "Es modular y fácil de modificar",
      "Oculta información entre sus componentes"
    ],
    answer: "Todos los componentes están integrados en un único programa"
  },

  // --- Componentes Esenciales ---
  {
    question: "¿Cuáles son los tres componentes esenciales de un sistema operativo?",
    options: [
      "Sistema de archivos, intérprete de comandos y núcleo",
      "Gestor de procesos, gestor de memoria y gestor de E/S",
      "Archivo de arranque, compilador y núcleo"
    ],
    answer: "Sistema de archivos, intérprete de comandos y núcleo"
  }
];

