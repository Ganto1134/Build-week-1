document.addEventListener('DOMContentLoaded',function(){
    var stella = document.querySelectorAll('.immagine_stella input');
    stella.forEach(function(star){
        star.addEventListener('click', function(){
            console.log('You rated this: ' + star.value);
        });
    });
});

const questions = [
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
    ],
    },
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
    },
    {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    },
    {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    },
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
    ],
    },
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
        "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
    ],
    },
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
    },
    {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
    },
    {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
        "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
    },
];
const mischia = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const n = Math.floor(Math.random() * (i + 1));
        [array[i], array[n]] = [array[n], array[i]];
    }
    return array
}

mischia(questions)
let score = 0;
let n = 0;
const inserisci_domanda = (array) => {
    const spazioDomanda = document.getElementById('domandone');
    const luogo = document.getElementById('rispostine');
    luogo.innerHTML = ''; // Pulisci le risposte precedenti prima di aggiungere nuove
    if (n < array.length) {
        spazioDomanda.innerText = array[n].question;
        const domandaCorrente = array[n];
        const risposte = [domandaCorrente.correct_answer, ...domandaCorrente.incorrect_answers];
        mischia(risposte);
        risposte.forEach((risposta) => { 
            const forma = document.createElement('button');
            const contiene = document.getElementById('richieste');
            forma.innerText = risposta;
            forma.addEventListener('click', () => {
                if (risposta === domandaCorrente.correct_answer) {
                    score++; // Incrementa il punteggio se la risposta è corretta
                } 
                n++; // Passa alla prossima domanda
                if (n < array.length) {
                    inserisci_domanda(array); // Richiama la funzione per la prossima domanda
                } else {
                    contiene.innerHTML = '';                  //      spazioDomanda.innerText = 'Quiz finito! Il tuo punteggio finale è: ' + score;
                }
            });
            luogo.appendChild(forma);
        });
    }
};
inserisci_domanda(questions);