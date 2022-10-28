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


const radioButtoValue = (option) => {
    console.log(option)
}
const questionContainer = document.getElementById("mcqContainer");
QuizQuestion.forEach(question => {


    const div = document.createElement('div');
    div.classList.add('mcqBox');

    div.innerHTML = `
        <h3 id="">${question.title}</h3>
        <li>
            <input onclick={radioButtoValue("${question.options[0]}")} type="radio" name="${question.title}" class="answer" value=${question.options[0]}>
            <label for="">${question.options[0]}</label>
        </li>
        <li>
            <input onclick={radioButtoValue("${question.options[1]}")} type="radio" name="${question.title}" class="answer">
            <label for="">${question.options[1]}</label>
        </li>
        <li>
            <input onclick={radioButtoValue("${question.options[2]}")} type="radio" name="${question.title}" class="answer">
            <label for="">${question.options[2]}</label>
        </li>
        <li>
            <input onclick={radioButtoValue("${question.options[3]}")} type="radio" name="${question.title}" class="answer">
            <label for="">${question.options[3]}</label>
        </li>
        <li>
        <label>  <input onclick={radioButtoValue("${question.options[3]}")} type="radio" id="html" name="${question.title}" value="${question.options[3]}" /> ${question.options[3]} </label> </div>
        </li>
        
        `;
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