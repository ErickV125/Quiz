let quizData = [
    {
        topic: "Electricidad - Corrientes",
        question: "¿Qué característica tiene la corriente directa (CD)?",
        options: [
            "Cambia de dirección constantemente",
            "Solo ocurre en casas",
            "Fluye en un solo sentido",
            "No se usa en ningún dispositivo"
        ],
        answer: "Fluye en un solo sentido"
    },
    {
        topic: "Electricidad - Corrientes",
        question: "¿Qué característica tiene la corriente alterna (CA)?",
        options: [
            "Fluye solo en pilas",
            "Es constante",
            "Cambia de dirección continuamente",
            "No sirve para electrodomésticos"
        ],
        answer: "Cambia de dirección continuamente"
    },
    {
        topic: "Corriente Eléctrica",
        question: "¿Qué es la corriente eléctrica?",
        options: [
            "Movimiento de neutrones",
            "Movimiento ordenado de electrones",
            "Movimiento aleatorio de átomos",
            "Energía acumulada en baterías"
        ],
        answer: "Movimiento ordenado de electrones"
    },
    {
        topic: "Procedimientos para obtener electricidad",
        question: "¿Cuál de estas formas NO es una forma común de obtener electricidad?",
        options: [
            "Fricción",
            "Presión",
            "Reacción química",
            "Fotosíntesis"
        ],
        answer: "Fotosíntesis"
    },
    {
        topic: "Intensidad de Corriente",
        question: "¿En qué unidad se mide la intensidad de corriente?",
        options: ["Voltios (V)", "Ohmios (Ω)", "Amperios (A)", "Watts (W)"],
        answer: "Amperios (A)"
    },
    {
        topic: "Resistencia Eléctrica",
        question: "¿Qué afecta el valor de la resistencia eléctrica?",
        options: [
            "Color del conductor",
            "Forma del circuito",
            "Longitud, grosor y material del conductor",
            "Distancia entre interruptores"
        ],
        answer: "Longitud, grosor y material del conductor"
    },
    {
        topic: "Ley de Ohm",
        question: "¿Cuál es la fórmula de la Ley de Ohm?",
        options: [
            "I = V + R",
            "V = I × R",
            "R = V - I",
            "V = I / R"
        ],
        answer: "V = I × R"
    },
    {
        topic: "Circuito en Serie",
        question: "¿Qué característica tiene un circuito en serie?",
        options: [
            "El voltaje es igual en todos los elementos",
            "Tiene varias rutas para la corriente",
            "La corriente es la misma en todos los elementos",
            "La resistencia total es menor que la individual"
        ],
        answer: "La corriente es la misma en todos los elementos"
    },
    {
        topic: "Circuito en Paralelo",
        question: "¿Qué característica tiene un circuito en paralelo?",
        options: [
            "Solo tiene una ruta para la corriente",
            "La resistencia total se suma directamente",
            "El voltaje es igual en cada rama",
            "La corriente es igual en todos los elementos"
        ],
        answer: "El voltaje es igual en cada rama"
    },
    {
        topic: "Leyes de Kirchhoff",
        question: "¿Qué establece la Ley de Corrientes de Kirchhoff?",
        options: [
            "La corriente se divide de forma aleatoria",
            "La suma de voltajes es cero",
            "La suma de las corrientes que entran a un nodo es igual a la que sale",
            "La energía se pierde en forma de calor"
        ],
        answer: "La suma de las corrientes que entran a un nodo es igual a la que sale"
    },
    {
        topic: "Leyes de Kirchhoff",
        question: "¿Qué establece la Ley de Voltajes de Kirchhoff?",
        options: [
            "La suma de resistencias es constante",
            "La corriente se mantiene estable en todas las ramas",
            "La suma de las tensiones en una malla cerrada es cero",
            "El voltaje total siempre es igual a cero"
        ],
        answer: "La suma de las tensiones en una malla cerrada es cero"
    },
    {
        topic: "Ejemplo Ley de Corrientes",
        question: "Si I₁ entra a un nodo y I₂, I₃ salen, ¿cuál es la ecuación correcta?",
        options: [
            "I₁ = I₂ - I₃",
            "I₁ = I₂ + I₃",
            "I₂ + I₃ = 0",
            "I₁ + I₂ = I₃"
        ],
        answer: "I₁ = I₂ + I₃"
    },
    {
        topic: "Ejemplo Ley de Voltajes",
        question: "Si Vₜ = 60V, V₁ = 20V y V₂ = 15V, ¿cuánto vale V₃?",
        options: ["15 V", "20 V", "25 V", "30 V"],
        answer: "25 V"
    },
    //problemas
    {
        question: "Un alambre conductor deja pasar 6 amperes al aplicarle una diferencia de potencial de 110 volts. ¿Cuál es el valor de su resistencia?",
        options: [
            "18.3 Ω",
            "660 Ω",
            "0.054 Ω",
            "12 Ω"
        ],
        answer: "18.3 Ω"
    },
    {
        question: "En un circuito en serie, una resistencia es de 4 Ω y otra de 6 Ω. Si se aplican 20 V al circuito, ¿cuál es la corriente total?",
        options: [
            "2 A",
            "5 A",
            "0.5 A",
            "1 A"
        ],
        answer: "2 A"
    },
    {
        question: "Tres resistencias de 12 Ω, 6 Ω y 4 Ω están conectadas en paralelo. ¿Cuál es la resistencia total del circuito?",
        options: [
            "22 Ω",
            "2 Ω",
            "1.5 Ω",
            "5.14 Ω"
        ],
        answer: "2 Ω"
    },
    {
        question: "En un nodo de un circuito eléctrico entran 4 A y 2 A, y salen 3 A. ¿Cuánta corriente falta por salir?",
        options: [
            "3 A",
            "2 A",
            "1 A",
            "6 A"
        ],
        answer: "3 A"
    },
    {
        question: "En una malla cerrada, la fuente de voltaje entrega 12 V. Si hay dos resistencias de 3 Ω cada una y pasa una corriente de 2 A, ¿se cumple la Ley de Kirchhoff?",
        options: [
            "Sí, 12V = 6V + 6V",
            "No, 12V ≠ 6V",
            "Sí, 12V = 3V + 3V",
            "No se puede saber"
        ],
        answer: "Sí, 12V = 6V + 6V"
    },
    // Reactancia inductiva
    {
        question: "¿Qué es la reactancia inductiva?",
        options: [
            "La resistencia que ofrece un capacitor al paso de corriente",
            "La oposición al cambio de corriente en una bobina",
            "La energía almacenada en un campo magnético",
            "La fuerza electromotriz en un circuito"
        ],
        answer: "La oposición al cambio de corriente en una bobina"
    },
    {
        question: "¿Cómo se representa la reactancia inductiva?",
        options: [
            "Xc",
            "Z",
            "L",
            "Xl"
        ],
        answer: "Xl"
    },
    {
        question: "¿Cuál es la expresión matemática de la reactancia inductiva?",
        options: [
            "Xl = 1 / (2πfL)",
            "Xl = 2πfL",
            "Xl = f / (2πL)",
            "Xl = L / f"
        ],
        answer: "Xl = 2πfL"
    },
    {
        question: "¿Cuál es la unidad de la reactancia inductiva?",
        options: [
            "Henry",
            "Voltio",
            "Ohm",
            "Faradio"
        ],
        answer: "Ohm"
    },

    // Reactancia capacitiva
    {
        question: "¿Qué es la reactancia capacitiva?",
        options: [
            "La resistencia de una bobina al paso de corriente alterna",
            "La oposición al cambio de voltaje en un capacitor",
            "La energía disipada en un capacitor",
            "La carga máxima almacenada por un capacitor"
        ],
        answer: "La oposición al cambio de voltaje en un capacitor"
    },
    {
        question: "¿Cómo se representa la reactancia capacitiva?",
        options: [
            "Xl",
            "Z",
            "C",
            "Xc"
        ],
        answer: "Xc"
    },
    {
        question: "¿Cuál es la expresión matemática de la reactancia capacitiva?",
        options: [
            "Xc = 2πfC",
            "Xc = 1 / (2πfC)",
            "Xc = C / (2πf)",
            "Xc = f / (2πC)"
        ],
        answer: "Xc = 1 / (2πfC)"
    },
    {
        question: "¿Cuál es la unidad de la reactancia capacitiva?",
        options: [
            "Henry",
            "Voltio",
            "Ohm",
            "Faradio"
        ],
        answer: "Ohm"
    },

    // Impedancia
    {
        question: "¿Qué es la impedancia?",
        options: [
            "La resistencia de un circuito a corriente continua",
            "La oposición total al paso de corriente alterna",
            "La carga almacenada en un circuito",
            "La diferencia de potencial en corriente alterna"
        ],
        answer: "La oposición total al paso de corriente alterna"
    },
    {
        question: "¿Cómo se representa la impedancia?",
        options: [
            "X",
            "Z",
            "I",
            "R"
        ],
        answer: "Z"
    },
    {
        question: "¿Cuál es la expresión matemática de la impedancia en un circuito RLC?",
        options: [
            "Z = R + Xl - Xc",
            "Z = R² + (Xl + Xc)²",
            "Z = √(R² + (Xl - Xc)²)",
            "Z = R / (Xl + Xc)"
        ],
        answer: "Z = √(R² + (Xl - Xc)²)"
    },
    {
        question: "¿Cuál es la unidad de la impedancia?",
        options: [
            "Faradio",
            "Henry",
            "Ohm",
            "Voltio"
        ],
        answer: "Ohm"
    }
];
quizData.push(
    {
        img: "serie.png",
        question: "¿Qué tipo de circuito se muestra en la imagen?",
        options: ["Circuito en paralelo", "Circuito mixto", "Circuito en serie", "Circuito abierto"],
        answer: "Circuito en serie"
    },
    {
        img: "paralelo.png",
        question: "¿Qué tipo de circuito se muestra en la imagen?",
        options: ["Circuito en serie", "Circuito cerrado", "Circuito mixto", "Circuito en paralelo"],
        answer: "Circuito en paralelo"
    }
);
quizData.push(
    {
        question: "Un circuito de CA tiene una resistencia de 10 Ω y una reactancia inductiva de 5 Ω. ¿Cuál es la impedancia total del circuito?",
        options: ["15 Ω", "√125 Ω", "11.18 Ω", "10.5 Ω"],
        answer: "11.18 Ω" // Z = √(R² + Xl²) = √(10² + 5²) = √125 ≈ 11.18
    },
    {
        question: "Un circuito de CA tiene una reactancia capacitiva de 12 Ω y una reactancia inductiva de 8 Ω. ¿Cuál es la reactancia neta (X)?",
        options: ["4 Ω", "-4 Ω", "20 Ω", "√(8² + 12²)"],
        answer: "-4 Ω" // X = Xl - Xc = 8 - 12 = -4
    },
    {
        question: "Si un circuito RLC tiene R = 6 Ω, Xl = 10 Ω y Xc = 4 Ω, ¿cuál es su impedancia?",
        options: ["10 Ω", "√(6² + (10 - 4)²) Ω", "6 + 10 + 4 Ω", "√(10² + 4²) Ω"],
        answer: "√(6² + (10 - 4)²) Ω" // Z = √(R² + (Xl - Xc)²)
    },
    {
        question: "¿Qué sucede en un circuito RLC cuando la reactancia inductiva es igual a la capacitiva?",
        options: [
            "La corriente se vuelve continua",
            "El circuito entra en resonancia",
            "La impedancia se anula",
            "El voltaje disminuye a cero"
        ],
        answer: "El circuito entra en resonancia"
    },
    {
        question: "¿Qué ocurre con la corriente en un circuito de CA cuando aumenta la frecuencia y hay un capacitor conectado?",
        options: [
            "La corriente aumenta",
            "La corriente disminuye",
            "La corriente se mantiene constante",
            "La corriente se vuelve continua"
        ],
        answer: "La corriente disminuye" // Porque Xc = 1 / (2πfC) → más frecuencia, mayor oposición
    }
);

