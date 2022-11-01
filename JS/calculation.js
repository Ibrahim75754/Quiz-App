const QuizQuestion = [
    {
        "title": "What is the past form of 'eat'?",
        "options": ["eat", "ate", "eaten", "have ate"],
        "answer": "ate"
    },
    {
        "title": "Which sentence is present continuous tense?",
        "options": [
            "I eat rice",
            "I am eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I am eating rice"
    },
    {
        "title": "Which sentence is present perfect tense?",
        "options": [
            "I eat rice",
            "I am eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have eaten rice"
    },
    {
        "title": "Which sentence is present perfect continuous tense?",
        "options": [
            "I eat rice",
            "I am eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have been eating rice for 1 year"
    },
    {
        "title": "Which sentence is past continuous tense?",
        "options": [
            "I eat rice",
            "I was eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I was eating rice"
    },
    {
        "title": "Which sentence is past perfect tense?",
        "options": [
            "I eat rice",
            "I was eating rice",
            "I had eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I had eaten rice"
    },
    {
        "title": "Which sentence is past perfect continuous tense?",
        "options": [
            "I eat rice",
            "I was eating rice",
            "I have eaten rice",
            "I had been eating rice for 1 year"
        ],
        "answer": "I had been eating rice for 1 year"
    },
    {
        "title": "Which sentence is future continuous tense?",
        "options": [
            "I eat rice",
            "I will be eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I will be eating rice"
    },
    {
        "title": "Which sentence is future perfect tense?",
        "options": [
            "I eat rice",
            "I will be eating rice",
            "I will have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I will have eaten rice"
    },
    {
        "title": "Which sentence is future perfect continuous tense?",
        "options": [
            "I eat rice",
            "I will be eating rice",
            "I will have eaten rice",
            "I will have been eating rice for 1 year"
        ],
        "answer": "I will have been eating rice for 1 year"
    }
];

let score = 0;
let serial = 1;

const questionContainer = document.getElementById("mcqContainer");
QuizQuestion.forEach(question => {
    // console.log(question);

    const radioButtoValue = (option, answer) => {
        if (option === answer) {
            score++;
        }
        console.log(score);
        localStorage.setItem("result", score);
    }

    const div = document.createElement('div');
    const ul = document.createElement('ul');
    question.options.forEach(option => {
        // console.log(question);
        const li = document.createElement('li')
        const input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('name', question.title)
        const level = document.createElement('label')
        input.addEventListener('click', () => {
            radioButtoValue(option, question.answer);
        })
        level.innerText = option;
        li.appendChild(input)
        li.appendChild(level)
        ul.appendChild(li)
    })

    const heading = document.createElement('h2')
    heading.innerText = serial + ". " + question.title;
    div.classList.add('mcqBox');

    div.appendChild(heading);
    div.appendChild(ul);
    questionContainer.appendChild(div);

    serial++;
});



function countdown(elementName, minutes, seconds) {
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer() {
        msLeft = endTime - (+new Date);
        if (msLeft < 1000) {
            window.location.href = "TimeOut.html";
        } else {
            time = new Date(msLeft);
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
            setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        }
    }

    element = document.getElementById(elementName);
    endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
    updateTimer();
}

countdown("ten-countdown", QuizQuestion.length, 0);



