let quizData = [
    {
        img: "ImgPreguntas/pn.jpg",
        question: "¿Qué tipo de permutaciones se usan cuando:/s-no hay elementos repetidos/s-se usan todos los elementos?",
        options: ["Permutaciones simples", "Permutaciones con repetición", "Permutaciones de r elementos tomados de n", "Permutaciones circulares"],
        answer: "Permutaciones simples"
    },
    {
        img: "",
        question: "¿Qué fórmula corresponde a las permutaciones simples?",
        options: ["n!", "n^r", "n! / (n - r)!", "n! / (n1! * n2! * ...)"],
        answer: "n!"
    },
    {
        img: "ImgPreguntas/n1n2n3.jpg",
        question: "¿Qué tipo de permutaciones se usan cuando:/s-algunos elementos se repiten/s-se usan todos los elementos?",
        options: ["Permutaciones con repetición", "Permutaciones simples", "Permutaciones circulares", "Permutaciones parciales"],
        answer: "Permutaciones con repetición"
    },
    {
        img: "",
        question: "¿Qué fórmula se usa para permutaciones con repetición?",
        options: ["n! / (n1! * n2! * ...)", "n!", "n! / (n - r)!", "(n - 1)!"],
        answer: "n! / (n1! * n2! * ...)"
    },
    {
        img: "ImgPreguntas/n-r.jpg",
        question: "¿Qué tipo de permutaciones se usan cuando:/s-se seleccionan r elementos de un total de n/s-no se repiten/s-importa el orden?",
        options: ["Permutaciones de r elementos tomados de n", "Permutaciones con repetición", "Combinaciones", "Permutaciones circulares"],
        answer: "Permutaciones de r elementos tomados de n"
    },
    {
        img: "",
        question: "¿Qué fórmula corresponde a las permutaciones de r elementos tomados de n?",
        options: ["n! / (n - r)!", "n! / r!", "n^r", "n! / (n1! * n2! * ...)"],
        answer: "n! / (n - r)!"
    },
    {
        img: "/ImgPreguntas/n-1.jpg",
        question: "¿Qué tipo de permutaciones se usan cuando:/s-los elementos se disponen en círculo/s-se consideran equivalentes las rotaciones?",
        options: ["Permutaciones circulares", "Permutaciones con repetición", "Permutaciones simples", "Permutaciones de r elementos"],
        answer: "Permutaciones circulares"
    },
    {
        img: "",
        question: "¿Qué fórmula se usa para permutaciones circulares?",
        options: ["(n - 1)!", "n!", "n! / (n - r)!", "n^r"],
        answer: "(n - 1)!"
    },
    {
        img: "",
        question: "¿Cuántas formas diferentes hay de ordenar la palabra 'MAMA'?",
        options: ["6", "12", "24", "8"],
        answer: "6"
    },
    {
        img: "",
        question: "¿Qué representa el símbolo 'n!' en las fórmulas de permutaciones?",
        options: ["Producto de todos los enteros desde n hasta 1", "División entre n y r", "Suma de n elementos", "Combinaciones posibles"],
        answer: "Producto de todos los enteros desde n hasta 1"
    },
        // --- PERMUTACIONES SIMPLES (n!) ---
    {
        img: "",
        question: "¿Cuántas maneras distintas hay de ordenar 5 libros diferentes?",
        options: ["120", "60", "24", "20"],
        answer: "120"
    },
    {
        img: "",
        question: "Si tienes 6 personas y deseas ordenarlas en una fila:/s¿Cuántas permutaciones posibles existen?",
        options: ["720", "36", "120", "360"],
        answer: "720"
    },
    {
        img: "",
        question: "¿Cuántas formas se pueden ordenar las letras de la palabra 'CASA', considerando que todas son distintas?",
        options: ["24", "12", "8", "16"],
        answer: "24"
    },
    {
        img: "",
        question: "¿Cuántas permutaciones tiene un grupo de 3 personas distintas?",
        options: ["6", "9", "3", "12"],
        answer: "6"
    },
    {
        img: "",
        question: "Si hay 4 llaves distintas:/s¿Cuántas formas distintas hay de ordenarlas en una fila?",
        options: ["24", "16", "12", "20"],
        answer: "24"
    },
    
    // --- PERMUTACIONES CON REPETICIÓN ---
    {
        img: "",
        question: "¿Cuántas permutaciones se pueden formar con la palabra 'MAMA'?",
        options: ["6", "12", "24", "8"],
        answer: "6"
    },
    {
        img: "",
        question: "¿Cuántas formas de ordenar la palabra 'AABB' hay?",
        options: ["6", "24", "12", "4"],
        answer: "6"
    },
    {
        img: "",
        question: "¿Cuántas permutaciones tiene la palabra 'PEPE'?",
        options: ["6", "12", "24", "8"],
        answer: "6"
    },
    {
        img: "",
        question: "¿Cuántas formas distintas hay de ordenar las letras de 'LLAMA'?",
        options: ["30", "60", "20", "15"],
        answer: "30"
    },
    {
        img: "",
        question: "¿Cuántas permutaciones tiene la palabra 'COCOA'?",
        options: ["30", "60", "20", "15"],
        answer: "30"
    },
    
    // --- PERMUTACIONES DE r ELEMENTOS TOMADOS DE n ---
    {
        img: "",
        question: "¿Cuántas formas hay de ordenar 3 personas elegidas de un grupo de 5?",
        options: ["60", "10", "20", "120"],
        answer: "60"
    },
    {
        img: "",
        question: "De 6 letras diferentes, ¿cuántas formas hay de elegir y ordenar 2?",
        options: ["30", "15", "36", "12"],
        answer: "30"
    },
    {
        img: "",
        question: "¿Cuántas permutaciones se pueden formar al elegir 4 elementos de 7?",
        options: ["840", "35", "210", "5040"],
        answer: "840"
    },
    {
        img: "",
        question: "Si el grupo tiene 8 personas y se eligen 2:/s¿Cuántas maneras distintas hay de ordenarlas?",
        options: ["56", "16", "28", "64"],
        answer: "56"
    },
    {
        img: "",
        question: "¿Cuántas permutaciones de 3 elementos se pueden hacer de un conjunto de 9?",
        options: ["504", "720", "216", "84"],
        answer: "504"
    },
    
    // --- PERMUTACIONES CIRCULARES ---
    {
        img: "",
        question: "¿Cuántas formas distintas hay de sentar 5 personas alrededor de una mesa circular?",
        options: ["24", "120", "60", "20"],
        answer: "24"
    },
    {
        img: "",
        question: "Si hay 6 personas sentadas en círculo:/s¿Cuántas permutaciones circulares posibles hay?",
        options: ["120", "720", "60", "24"],
        answer: "120"
    },
    {
        img: "",
        question: "¿Cuántas formas distintas hay de ordenar 7 elementos en un círculo?",
        options: ["720", "5040", "7200", "720"],
        answer: "720"
    },
    {
        img: "",
        question: "¿Cuántas maneras hay de organizar 8 figuras alrededor de un círculo?",
        options: ["5040", "40320", "4032", "720"],
        answer: "5040"
    },
    {
        img: "",
        question: "Una familia de 4 personas se sienta en una mesa redonda:/s¿Cuántas formas distintas hay?",
        options: ["6", "24", "12", "4"],
        answer: "6"
    }
];

// --- COMBINACIONES (orden no importa) ---
quizData.push(
    {
        img: "",
        question: "¿Cuántas combinaciones hay al elegir 3 personas de un grupo de 7?",
        options: ["35", "210", "21", "42"],
        answer: "35"
    },
    {
        img: "",
        question: "¿Cuántas combinaciones posibles hay al elegir 5 cartas de una baraja de 52?",
        options: ["2598960", "311875200", "1533939", "2000000"],
        answer: "2598960"
    },
    {
        img: "",
        question: "¿Cuántas formas hay de elegir 2 sabores de helado entre 6 disponibles?",
        options: ["15", "12", "30", "36"],
        answer: "15"
    },
    {
        img: "",
        question: "¿Cuántas combinaciones se pueden formar al seleccionar 4 alumnos entre 10?",
        options: ["210", "5040", "120", "40"],
        answer: "210"
    },
    {
        img: "",
        question: "¿Cuántas combinaciones hay al elegir 2 personas de un grupo de 8?",
        options: ["28", "16", "56", "64"],
        answer: "28"
    }
);
// --- PROBABILIDAD ---
quizData.push(
    {
        img: "",
        question: "Se lanza una moneda justa. ¿Cuál es la probabilidad de obtener cara?",
        options: ["1/2", "1/3", "2/3", "1"],
        answer: "1/2"
    },
    {
        img: "",
        question: "Se elige una carta al azar de una baraja de 52:/s¿Cuál es la probabilidad de obtener un as?",
        options: ["4/52", "1/4", "1/52", "13/52"],
        answer: "4/52"
    },
    {
        img: "",
        question: "Se eligen al azar 2 cartas de una baraja sin reemplazo:/s¿Cuál es la probabilidad de que ambas sean ases?",
        options: ["6/1326", "4/52", "1/13", "1/169"],
        answer: "6/1326"
    },
    {
        img: "",
        question: "En una bolsa hay 3 bolas rojas y 2 azules:/s¿Cuál es la probabilidad de sacar una roja al azar?",
        options: ["3/5", "2/5", "1/2", "3/4"],
        answer: "3/5"
    },
    {
        img: "",
        question: "Tiras un dado:/s¿Cuál es la probabilidad de obtener un número primo?",
        options: ["3/6", "1/2", "2/6", "4/6"],
        answer: "3/6"
    }
);
