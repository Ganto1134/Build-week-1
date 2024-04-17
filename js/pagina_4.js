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
// let x = input.value;
let score = 0;
let n = 0;
let timer;
const tempoDisponibile = 10;
let tempoMancante = tempoDisponibile;
const cerchio = 565.48; // Circonferenza del cerchio SVG
const timerCircle = document.getElementById("timer-circle");
const timerText = document.getElementById("timer-text");
const inserisci_domanda = (array) => {
    clearTimeout(timer);
    tempoMancante = tempoDisponibile; // Reset timer for each question
    const spazioDomanda = document.getElementById('domandone');
    const spazioRisposte = document.getElementById('rispostine');
    spazioRisposte.innerHTML = ''; // Pulisci le risposte precedenti
    spazioDomanda.innerText = array[n].question;
    const domandaCorrente = array[n];
    const risposte = [domandaCorrente.correct_answer, ...domandaCorrente.incorrect_answers];
    mischia(risposte);
    risposte.forEach((risposta) => {
    const forma = document.createElement('button');
    forma.innerText = risposta;
    spazioRisposte.appendChild(forma);
    forma.addEventListener('click', () => {
    clearTimeout(timer); 
    if (risposta === domandaCorrente.correct_answer) {
        score++; // Incrementa il punteggio se la risposta è corretta
    }
      n++; // Passa alla prossima domanda
    if (n < array.length) {
        inserisci_domanda(array); // Richiama la funzione per la prossima domanda
    } else {
        document.getElementById('contenitore').innerHTML = ''; //'Quiz finito! Il tuo punteggio finale è: ' + score;
        var chartDiv = document.createElement('div');
        chartDiv.id = 'donutchart';
        chartDiv.style.width = '900px';
        chartDiv.style.height = '500px';
        document.body.appendChild(chartDiv);
        drawChart()
        // document.getElementById('rispostine').innerHTML = ''; // Pulisci le risposte
        // document.getElementById('timer-container').style.display = 'none'; // Nascondi il timer
    }
    });
});

startTimer();
};

function startTimer() {
aspetto_visivo_timer();
timer = setInterval(() => {
    tempoMancante--;
    aspetto_visivo_timer();
    if (tempoMancante <= 0) {
    clearInterval(timer);
    n++;
    if (n < questions.length) {
        inserisci_domanda(questions);
    } else { 
        document.getElementById('contenitore').innerHTML = '';
    }
    }
}, 1000);
}
function aspetto_visivo_timer() {
    const dashOffset = cerchio - (cerchio * tempoMancante) / tempoDisponibile;
    timerCircle.style.strokeDashoffset = dashOffset;
    timerText.textContent = tempoMancante;
}
inserisci_domanda(questions);



  // Carica il pacchetto di Google Charts
  google.charts.load('current', {packages: ['corechart']});
 google.charts.setOnLoadCallback(drawChart);


 function drawChart() {
    let score = Math.floor(Math.random() * 11); // Genera un punteggio casuale tra 0 e 10
    const testData = generateTestData(score);

    var data = google.visualization.arrayToDataTable(testData);
    var passedMessage = score > 6 ? 'Sei passato' : 'Non sei passato';
    var options = {
        title: passedMessage, // Usa il titolo per mostrare il messaggio di passaggio
        pieHole: 0.4,
        pieSliceText: 'none', // Nasconde il testo nei segmenti del grafico
        tooltip: { trigger: 'none' },
        titleTextStyle: {
            color: score > 6 ? 'green' : 'red',
            fontSize: 24,
            bold: true,
            italic: false
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}

function generateTestData(score) {
    return [
        ['Result', 'Value'],
        ['buone', score],
        ['sbagliate', 10 - score]
    ];
}