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
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have eaten rice"
    },
    {
        "title": "Which sentence is past perfect continuous tense?",
        "options": [
            "I eat rice",
            "I was eating rice",
            "I have eaten rice",
            "I have been eating rice for 1 year"
        ],
        "answer": "I have been eating rice for 1 year"
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




const questionContainer = document.getElementById("mcqContainer");
QuizQuestion.forEach(question => {
    // console.log(question);
    let score = 0;
    const radioButtoValue = (option, answer) => {

        console.log(option);
        console.log(answer);
        if (option === answer) {
            score++;
        }
        console.log(score);

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
    heading.innerText = question.title;
    div.classList.add('mcqBox');

    div.appendChild(heading)
    div.appendChild(ul)
    // <label>  <input onClick={() => radioButtoValue(option)} type="radio" id="html" name={id} value={option} /> {option} </label>
    questionContainer.appendChild(div);
});



const answerEls = document.querySelectorAll('.answer');
console.log(answerEls)
let score = 0;

function getSelected() {
    let result;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            result = answerEl.name
        }
    })
    return result
}


document.getElementById("submit").addEventListener('click', () => {
    QuizQuestion.forEach(question => {
        const result = getSelected();
        if (result) {
            if (result === question.answer) {
                score++
            }
        }
    })

    console.log(score);
})