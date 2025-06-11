const ConfingOptions = {
    
    
    
    ClassList: (Element) => {
        const Classes = Element.ElementConfigObject.ClassList;
        if (!ErrorManager({ typeOfValue: { expected: ['object', 'sting'], catch: Classes }, FunctioError: 'ConfigOptions > ClassList()' })) {
            return;
        }
        if (Classes instanceof Array) {
            Classes.forEach(function(e) {
                Element.element.classList.add(e);
            });
        } else {
            Element.element.classList.add(Classes)
        }
    },
    
    PropetyList: (Element) => {
        const Propeties = Element.ElementConfigObject.PropetyList;
        if (!ErrorManager({ typeOfValue: { expected: ['object', 'sting'], catch: Propeties }, FunctioError: 'ConfigOptions > ClassList()' })) {
            return;
        }
        if (Propeties instanceof Object) {
            for (let Propety in Propeties) {
                Element.element.setAttribute(Propety, Propeties[Propety]);
            }
        } else {
            Element.element.classList.add(Propety)
        }
    },
    
    EventList: (Element) => {
        eventList = Element.ElementConfigObject.EventList;
        for (let event in eventList) {
            Element.element.addEventListener(event, eventList[event]);
        }
    },
    
    ChildOf: (Element) => {
        const Parent = Element.ElementConfigObject.ChildOf;
        
        Parent.appendChild(Element.element);
        Element.element.classList.add('Animacion_de_aparicion')
    },
}

class CreateElement {
    constructor(ElementTag, ElementName, ElementConfigObject) {
        this.ElementTag = ElementTag.toLowerCase();
        this.ElementName = ElementName;
        this.ElementConfigObject = ElementConfigObject;
        this.element = document.createElement(this.ElementTag); //cambiar a dom
    }
    create() {
        for (let config in this.ElementConfigObject) {
            if (config in ConfingOptions) {
                ConfingOptions[config](this);
            } else {}
        }
    }
}
//solo funciona con Tipos de valor, podria dar problemas con array al ser un Object.
function ErrorManager(ErrorObject) {
    if (ErrorObject.typeOfValue.expected.includes(typeof ErrorObject.typeOfValue.catch)) {
        return true;
    } else {
        console.error(`\n El tipo valor dado no es de el tipo: "${ErrorObject.typeOfValue.expected}"\n tipo de valor dado:  ${ErrorObject.typeOfValue.catch} \n Funcion de origen: ${ErrorObject.FunctioError}`);
        return false;
    }
}
// Datos de preguntas y respuestas

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Genera un índice aleatorio entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        
        // Intercambia los elementos en las posiciones i y j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
quizData = shuffleArray(quizData);

// Crear el contenedor de preguntas
const quizContainer = document.getElementById('quiz-container');

quizData.forEach((questionData, index) => {
    const quizBox = new CreateElement('div', `question-${index}`, {
        ClassList: ['quiz-box'],
        ChildOf: quizContainer
    });
    quizBox.create();
    if ("img" in questionData) {
        
        const imgBox = new CreateElement("div", `$question-img-${index}-box`, { ChildOf: quizBox.element, ClassList: ['quiz-img'] });
        if(questionData.img) imgBox.create();
        const img = new CreateElement("img", `$question-img-${index}-box`, { ChildOf: imgBox.element, PropetyList: { src: questionData.img } });
        if(questionData.img) img.create();
    }
    const lineText = questionData.question.split("/s");
    console.log(lineText);
    
    lineText.forEach((txt,i) => {
        let num= (i==0)? index+1+".-" : "";
        const questionText = new CreateElement('p', `$question-text-${index}`, {
            ChildOf: quizBox.element
        });
        questionText.element.textContent = `${num}` + txt
        questionText.create();
    });
    
    
    const OPTION = shuffleArray(questionData.options);
    OPTION.forEach((option, optionIndex) => {
        const label = new CreateElement('label', `option-${index}-${optionIndex}`, {
            ChildOf: quizBox.element
        });
        if (option == questionData.answer) {
            label.element.classList.add("true");
        }
        label.create();
        
        const input = new CreateElement('input', `input-${index}-${optionIndex}`, {
            PropetyList: { type: 'radio', name: `question-${index}` },
            ChildOf: label.element
        });
        input.element.classList.add("input");
        input.create();
        
        const span = new CreateElement('span', `span-${index}-${optionIndex}`, {
            ChildOf: label.element
        });
        
        span.create();
        
        const optionText = new CreateElement('p', `option-text-${index}-${optionIndex}`, {
            
            ChildOf: label.element
        });
        optionText.element.textContent = option;
        optionText.create();
    });
    const InfoBox = new CreateElement('div', '', {
        ChildOf: quizBox.element
    });
    InfoBox.element.classList.add('info');
    InfoBox.create();
    
    
});

const submitBtnGlobal = new CreateElement('button', '', {
    ChildOf: quizContainer,
    PropetyList: { id: "submit-btn" }
});
submitBtnGlobal.element.textContent = "Calificar";
submitBtnGlobal.create();


// Botón de modo oscuro
const darkModeBtn = document.getElementById('dark-mode-btn');
darkModeBtn.addEventListener('click', () => {
    if (darkModeBtn.textContent == "☀️") {
        darkModeBtn.textContent = "🌙"
    } else {
        darkModeBtn.textContent = "☀️"
    }
    
    document.body.classList.toggle('dark-mode');
});

// Botón de calificar
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', () => {
    let score = 0;
    quizData.forEach((questionData, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && selectedOption.nextElementSibling.nextElementSibling.textContent === questionData.answer) {
            score++;
        }
    });
    submitBtn.remove();
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    
    const resultBox = new CreateElement('div', 'result-box', {
        ClassList: ['quiz-box'],
        ChildOf: document.getElementById("Box")
    });
    
    resultBox.create();
    
    const resultText = new CreateElement('p', 'result-text', {
        ChildOf: resultBox.element
    });
    resultText.element.textContent = `Calificación: ${score} de ${quizData.length}`
    resultText.create();
    
    const retryBtn = new CreateElement('button', 'retry-btn', {
        
        ChildOf: resultBox.element,
        EventList: { click: () => location.reload() }
    });

    let imgSrcMeme= (score < (quizData.length*0.8))? "mrd.png" : (score === quizData.length)? "alber.png" : "pensar.png";
    const imgBox = new CreateElement("div", `meme-img-box`, {
        ChildOf: resultBox.element,
        ClassList: ['quiz-img'] 
    });
    const img = new CreateElement("img", "meme-img", { 
        ChildOf: imgBox.element,
        PropetyList: { src:imgSrcMeme }
    });
    imgBox.create();
    img.create();
    retryBtn.element.textContent = "Repetir prueba"
    retryBtn.create();
    document.body.classList.add("Revisado");
    document.querySelectorAll(".input").forEach(function(element) { element.disabled = true })
});
