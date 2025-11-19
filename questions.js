    let quizData = [
  // ============================
  // -------- INT (6) ----------
  // ============================
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
  {
    question: "¿Cuál de estos NO es un int?",
    options: ["10", "-5", "3.0"],
    answer: "3.0"
  },
  {
    question: "¿Qué resultado es de tipo int?",
    options: ["5 + 5", "5.0 + 5", "'5' + '5'"],
    answer: "5 + 5"
  },
  {
    question: "¿Qué tipo de dato es -100?",
    options: ["int", "float", "str"],
    answer: "int"
  },
  {
    question: "¿Cuál convierte correctamente un string a int?",
    options: ["int('20')", "str(20)", "float('20')"],
    answer: "int('20')"
  },

  // ============================
  // -------- STR (6) ----------
  // ============================
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
  {
    question: "¿Cuál cadena es válida?",
    options: ["'123'", "123", "123'"],
    answer: "'123'"
  },
  {
    question: "¿Qué operador concatena strings?",
    options: ["+", "-", "*"],
    answer: "+"
  },
  {
    question: "¿Cuál convierte un número a string?",
    options: ["str(50)", "int('50')", "float('50')"],
    answer: "str(50)"
  },
  {
    question: "¿Qué tipo resulta de 'Hola' + 'Mundo'?",
    options: ["str", "int", "float"],
    answer: "str"
  },

  // ============================
  // -------- FLOAT (6) ----------
  // ============================
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
  {
    question: "¿Cuál operación produce un float?",
    options: ["5 / 2", "5 // 2", "5 % 2"],
    answer: "5 / 2"
  },
  {
    question: "¿Cuál convierte correctamente un int a float?",
    options: ["float(10)", "int(10.5)", "str(10.5)"],
    answer: "float(10)"
  },
  {
    question: "¿Qué tipo es 2.0?",
    options: ["float", "int", "str"],
    answer: "float"
  },
  {
    question: "¿Cuál expresión da como resultado un float?",
    options: ["3 + 3.0", "3 + 3", "'3' + '3'"],
    answer: "3 + 3.0"
  },

  // ============================
  // -------- INPUT (6) ----------
  // ============================
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
  {
    question: "¿Qué función usas para leer datos del usuario?",
    options: ["input()", "print()", "read()"],
    answer: "input()"
  },
  {
    question: "input('edad: ') retorna:",
    options: ["Siempre str", "Siempre int", "Depende del usuario"],
    answer: "Siempre str"
  },
  {
    question: "¿Cómo se lee un float del usuario?",
    options: ["float(input())", "input(float)", "toFloat(input())"],
    answer: "float(input())"
  },
  {
    question: "¿Qué pasa si int(input()) recibe 'hola'?",
    options: ["Error", "Retorna 0", "Retorna 'hola'"],
    answer: "Error"
  },

  // ============================
  // -------- FOR (6) ----------
  // ============================
  {
    question: "¿Qué estructura se usa para iterar sobre una secuencia?",
    options: ["for", "if", "def"],
    answer: "for"
  },
  {
    question: "¿Cuál es un ejemplo correcto de un for en Python?",
    options: ["for i in range(5):", "for (i < 5)", "loop i to 5"],
    answer: "for i in range(5):"
  },
  {
    question: "¿Qué palabra se usa en un for?",
    options: ["in", "into", "on"],
    answer: "in"
  },
  {
    question: "for i in 'hola': ¿cuántas iteraciones hace?",
    options: ["4", "3", "5"],
    answer: "4"
  },
  {
    question: "for i in range(0): ejecuta:",
    options: ["0 veces", "1 vez", "Error"],
    answer: "0 veces"
  },
  {
    question: "¿Puede un for iterar listas?",
    options: ["Sí", "No", "Solo números"],
    answer: "Sí"
  },

  // ============================
  // -------- WHILE (6) ----------
  // ============================
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
  {
    question: "¿Qué ocurre si la condición nunca cambia a False?",
    options: ["Bucle infinito", "Error", "Termina solo"],
    answer: "Bucle infinito"
  },
  {
    question: "¿Qué palabra permite salir de un while?",
    options: ["break", "stop", "exit"],
    answer: "break"
  },
  {
    question: "while True: significa:",
    options: ["Bucle infinito", "Condición inválida", "Nunca se ejecuta"],
    answer: "Bucle infinito"
  },
  {
    question: "¿Cuál es válida?",
    options: ["while x != 0:", "while x not 0:", "while x <> 0:"],
    answer: "while x != 0:"
  },

  // ============================
  // -------- RANGE (6) ----------
  // ============================
  {
    question: "¿Qué hace range(5)?",
    options: ["Genera una secuencia 0 a 4", "1 a 5", "Un solo número"],
    answer: "Genera una secuencia 0 a 4"
  },
  {
    question: "¿Cuál genera una secuencia del 2 al 8?",
    options: ["range(2, 9)", "range(2, 8)", "range(1, 8)"],
    answer: "range(2, 9)"
  },
  {
    question: "range(3, 3) genera:",
    options: ["Vacío", "3", "0"],
    answer: "Vacío"
  },
  {
    question: "range(0, 10, 2) genera:",
    options: ["0,2,4,6,8", "1,3,5,7,9", "2,4,6,8"],
    answer: "0,2,4,6,8"
  },
  {
    question: "range(5)[0] es:",
    options: ["0", "1", "5"],
    answer: "0"
  },
  {
    question: "¿range puede ir hacia atrás?",
    options: ["Sí", "No", "Solo hasta 0"],
    answer: "Sí"
  },

  // ============================
  // -------- LEN (6) ----------
  // ============================
  {
    question: "¿Para qué sirve len()?",
    options: ["Obtener tamaño", "Convertir a entero", "Cortar un string"],
    answer: "Obtener tamaño"
  },
  {
    question: "len('hola') =",
    options: ["4", "3", "5"],
    answer: "4"
  },
  {
    question: "len([]) =",
    options: ["0", "1", "Error"],
    answer: "0"
  },
  {
    question: "len([1,2,3]) =",
    options: ["3", "2", "4"],
    answer: "3"
  },
  {
    question: "len(' ') =",
    options: ["1", "0", "Error"],
    answer: "1"
  },
  {
    question: "len((1,2)) =",
    options: ["2", "1", "Error"],
    answer: "2"
  },

  // ============================
  // -------- DEF / RETURN (8) ----------
  // ============================
  {
    question: "¿Qué palabra clave define una función?",
    options: ["def", "func", "make"],
    answer: "def"
  },
  {
    question: "¿Qué palabra devuelve un valor?",
    options: ["return", "break", "yield"],
    answer: "return"
  },
  {
    question: "def f(): return 5 — ¿qué retorna?",
    options: ["5", "None", "Error"],
    answer: "5"
  },
  {
    question: "Si una función no tiene return, retorna:",
    options: ["None", "0", "Error"],
    answer: "None"
  },
  {
    question: "def f(x): return x*2. ¿f(3)?",
    options: ["6", "3", "Error"],
    answer: "6"
  },
  {
    question: "¿Puede una función tener varios return?",
    options: ["Sí", "No", "Solo 1"],
    answer: "Sí"
  },
  {
    question: "¿Qué palabra indica parámetros por defecto?",
    options: ["=", "default:", "as"],
    answer: "="
  },
  {
    question: "¿Puede return devolver strings?",
    options: ["Sí", "No", "Solo números"],
    answer: "Sí"
  },

  // ============================
  // -------- IMPORT (6) ----------
  // ============================
  {
    question: "¿Cuál es la forma correcta de importar un módulo?",
    options: ["import math", "include math", "using math"],
    answer: "import math"
  },
  {
    question: "¿Qué hace 'from math import sqrt'?",
    options: ["Importa sqrt", "Importa todo math", "Elimina sqrt"],
    answer: "Importa sqrt"
  },
  {
    question: "import random permite:",
    options: ["Usar random()", "Crear un módulo", "Cerrar Python"],
    answer: "Usar random()"
  },
  {
    question: "import math as m hace:",
    options: ["Renombrar math a m", "Eliminar math", "Clonar math"],
    answer: "Renombrar math a m"
  },
  {
    question: "from module import * significa:",
    options: ["Importar todo", "Importar nada", "Importar solo 1"],
    answer: "Importar todo"
  },
  {
    question: "¿Es válido importar dentro de una función?",
    options: ["Sí", "No", "Solo en Python 2"],
    answer: "Sí"
  },

  // ============================
  // -------- IF / ELIF / ELSE (8) ----------
  // ============================
  {
    question: "¿Qué estructura se usa para tomar decisiones?",
    options: ["if", "for", "while"],
    answer: "if"
  },
  {
    question: "¿Qué palabra se usa para evaluar otra condición?",
    options: ["elif", "elseif", "else if"],
    answer: "elif"
  },
  {
    question: "¿Qué palabra se usa cuando nada se cumple?",
    options: ["else", "otherwise", "default"],
    answer: "else"
  },
  {
    question: "if 5 > 2: print('ok') ¿imprime?",
    options: ["Sí", "No", "Error"],
    answer: "Sí"
  },
  {
    question: "elif solo puede usarse si antes hay:",
    options: ["if", "while", "for"],
    answer: "if"
  },
  {
    question: "else debe ir:",
    options: ["Al final", "Al inicio", "Entre if y elif"],
    answer: "Al final"
  },
  {
    question: "¿if puede existir sin else?",
    options: ["Sí", "No", "Solo en funciones"],
    answer: "Sí"
  },
  {
    question: "if True: ejecuta:",
    options: ["Siempre", "Nunca", "Depende"],
    answer: "Siempre"
  },

  // ============================
  // -------- MATCH / PASS (6) ----------
  // ============================
  {
    question: "¿Para qué sirve match en Python?",
    options: ["Comparar múltiples casos", "Crear funciones", "Importar módulos"],
    answer: "Comparar múltiples casos"
  },
  {
    question: "¿Qué hace pass en un match-case?",
    options: ["No ejecuta nada", "Detiene loop", "Devuelve valor"],
    answer: "No ejecuta nada"
  },
  {
    question: "match x: case 1: print('a') ejecuta si x:",
    options: ["Vale 1", "Vale True", "Vale cualquier cosa"],
    answer: "Vale 1"
  },
  {
    question: "pass sirve para:",
    options: ["Evitar errores en bloques vacíos", "Finalizar programa", "Ignorar imports"],
    answer: "Evitar errores en bloques vacíos"
  },
  {
    question: "case _: significa:",
    options: ["Caso por defecto", "Error", "Ignorar match"],
    answer: "Caso por defecto"
  },
  {
    question: "¿match es similar a switch?",
    options: ["Sí", "No", "Solo en Python 2"],
    answer: "Sí"
  },

  // ============================
  // -------- BREAK (6) ----------
  // ============================
  {
    question: "¿Qué hace break dentro de un loop?",
    options: ["Detiene ciclo", "Reinicia ciclo", "Salta iteración"],
    answer: "Detiene ciclo"
  },
  {
    question: "¿En qué estructuras puede usarse break?",
    options: ["for y while", "if y else", "def y return"],
    answer: "for y while"
  },
  {
    question: "break dentro de un for:",
    options: ["Termina el for", "Hace continue", "Duplica la iteración"],
    answer: "Termina el for"
  },
  {
    question: "break en un while infinito:",
    options: ["Lo detiene", "No funciona", "Hace error"],
    answer: "Lo detiene"
  },
  {
    question: "¿break puede usarse fuera de loops?",
    options: ["No", "Sí", "Solo en funciones"],
    answer: "No"
  },
  {
    question: "¿Qué instrucción se usa para saltar a la siguiente iteración?",
    options: ["continue", "break", "skip"],
    answer: "continue"
  },

  // ============================
  // -------- ARITMÉTICOS (8) ----------
  // ============================
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
  {
    question: "5 ** 2 =",
    options: ["25", "10", "7"],
    answer: "25"
  },
  {
    question: "10 / 2 =",
    options: ["5.0", "5", "Error"],
    answer: "5.0"
  },
  {
    question: "10 // 3 =",
    options: ["3", "3.33", "1"],
    answer: "3"
  },
  {
    question: "8 % 4 =",
    options: ["0", "2", "4"],
    answer: "0"
  },
  {
    question: "2 * 3 + 1 =",
    options: ["7", "8", "5"],
    answer: "7"
  },
  {
    question: "3 + 3 * 3 =",
    options: ["12", "18", "9"],
    answer: "12"
  },

  // ============================
  // -------- COMPARACIÓN (6) ----------
  // ============================
  {
    question: "¿Qué operador se usa para igualdad?",
    options: ["==", "=", "==="],
    answer: "=="
  },
  {
    question: "¿Cuál expresión es verdadera?",
    options: ["5 > 3", "3 > 5", "2 == 3"],
    answer: "5 > 3"
  },
  {
    question: "¿Cuál es el operador 'mayor o igual'?",
    options: [">=", "=>", "=<"],
    answer: ">="
  },
  {
    question: "¿Qué retorna 5 != 5?",
    options: ["False", "True", "Error"],
    answer: "False"
  },
  {
    question: "¿Cuál es verdadero?",
    options: ["4 < 10", "10 < 4", "4 == 10"],
    answer: "4 < 10"
  },
  {
    question: "¿Comparar strings es válido?",
    options: ["Sí", "No", "Solo números"],
    answer: "Sí"
  }
];
