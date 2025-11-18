let quizData = [
  // --- int ---
  {
    question: "¿Qué tipo de dato representa un número entero en Python?",
    options: ["int", "str", "float"],
    answer: "int"
  },
  {
    question: "¿Cuál de los siguientes es un int válido?",
    options: ["42", '"42"', "42.0"],
    answer: "42"
  },

  // --- str ---
  {
    question: "¿Qué tipo de dato es 'Hola Mundo'?",
    options: ["str", "int", "float"],
    answer: "str"
  },
  {
    question: "¿Cuál es la forma correcta de crear un string?",
    options: ["'Python'", "Python", "str(Python)"],
    answer: "'Python'"
  },

  // --- float ---
  {
    question: "¿Qué tipo representa números decimales?",
    options: ["float", "int", "str"],
    answer: "float"
  },
  {
    question: "¿Cuál de los siguientes es un float?",
    options: ["3.14", "'3.14'", "3"],
    answer: "3.14"
  },

  // --- input ---
  {
    question: "¿Qué retorna la función input() por defecto?",
    options: ["Un str", "Un int", "Un float"],
    answer: "Un str"
  },
  {
    question: "¿Cómo conviertes un input a número entero?",
    options: ["int(input())", "float(input())", "str(input())"],
    answer: "int(input())"
  },

  // --- for ---
  {
    question: "¿Qué estructura se usa para iterar sobre una secuencia?",
    options: ["for", "if", "def"],
    answer: "for"
  },
  {
    question: "¿Cuál es un ejemplo correcto de un for en Python?",
    options: [
      "for i in range(5):",
      "for (i < 5)",
      "loop i to 5"
    ],
    answer: "for i in range(5):"
  },

  // --- while ---
  {
    question: "¿Qué estructura repite código mientras una condición sea verdadera?",
    options: ["while", "for", "elif"],
    answer: "while"
  },
  {
    question: "¿Cuál es una condición válida para un while?",
    options: ["while x < 10:", "while (10):", "while range(5):"],
    answer: "while x < 10:"
  },

  // --- range ---
  {
    question: "¿Qué hace range(5)?",
    options: [
      "Genera una secuencia 0 a 4",
      "Genera una secuencia 1 a 5",
      "Genera un solo número"
    ],
    answer: "Genera una secuencia 0 a 4"
  },
  {
    question: "¿Cuál genera una secuencia del 2 al 8?",
    options: ["range(2, 9)", "range(2, 8)", "range(1, 8)"],
    answer: "range(2, 9)"
  },

  // --- len ---
  {
    question: "¿Para qué sirve len()?",
    options: [
      "Para obtener el tamaño de una secuencia",
      "Para convertir a entero",
      "Para cortar un string"
    ],
    answer: "Para obtener el tamaño de una secuencia"
  },
  {
    question: "¿Cuál es el resultado de len('hola')?",
    options: ["4", "3", "5"],
    answer: "4"
  },

  // --- def & return ---
  {
    question: "¿Qué palabra clave define una función?",
    options: ["def", "func", "make"],
    answer: "def"
  },
  {
    question: "¿Qué palabra se usa para devolver un valor en una función?",
    options: ["return", "break", "yield"],
    answer: "return"
  },

  // --- import / from ---
  {
    question: "¿Cuál es la forma correcta de importar un módulo?",
    options: ["import math", "include math", "using math"],
    answer: "import math"
  },
  {
    question: "¿Qué hace 'from math import sqrt'?",
    options: [
      "Importa solo sqrt del módulo math",
      "Importa todo el módulo math",
      "Elimina la función sqrt"
    ],
    answer: "Importa solo sqrt del módulo math"
  },

  // --- if / elif / else ---
  {
    question: "¿Qué estructura se usa para tomar decisiones?",
    options: ["if", "for", "while"],
    answer: "if"
  },
  {
    question: "¿Qué palabra se usa para evaluar una condición extra?",
    options: ["elif", "elseif", "else if"],
    answer: "elif"
  },
  {
    question: "¿Qué palabra se usa cuando ninguna condición se cumple?",
    options: ["else", "otherwise", "default"],
    answer: "else"
  },

  // --- match / pass ---
  {
    question: "¿Para qué sirve match en Python?",
    options: [
      "Para comparar un valor con múltiples casos",
      "Para crear funciones",
      "Para importar módulos"
    ],
    answer: "Para comparar un valor con múltiples casos"
  },
  {
    question: "¿Qué hace la instrucción pass en un match-case?",
    options: ["No ejecuta nada", "Detiene el loop", "Devuelve un valor"],
    answer: "No ejecuta nada"
  },

  // --- break ---
  {
    question: "¿Qué hace break dentro de un loop?",
    options: [
      "Detiene el ciclo inmediatamente",
      "Reinicia el ciclo",
      "Salta al siguiente ciclo"
    ],
    answer: "Detiene el ciclo inmediatamente"
  },
  {
    question: "¿En qué estructuras se puede usar break?",
    options: ["for y while", "if y else", "def y return"],
    answer: "for y while"
  },

  // --- Operadores aritméticos ---
  {
    question: "¿Cuál operador corresponde a la multiplicación?",
    options: ["*", "+", "%"],
    answer: "*"
  },
  {
    question: "¿Qué resultado da 10 % 3?",
    options: ["1", "3", "0"],
    answer: "1"
  },

  // --- Operadores de comparación ---
  {
    question: "¿Qué operador se usa para igualdad?",
    options: ["==", "=", "==="],
    answer: "=="
  },
  {
    question: "¿Cuál expresión es verdadera?",
    options: ["5 > 3", "3 > 5", "2 == 3"],
    answer: "5 > 3"
  }
];
