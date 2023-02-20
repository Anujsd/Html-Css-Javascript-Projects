const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

let currentQuestion = 0;
let correct = 0;

const question = document.querySelector('.question');
const a_text = document.querySelector('.a_text');
const b_text = document.querySelector('.b_text');
const c_text = document.querySelector('.c_text');
const d_text = document.querySelector('.d_text');
const submitBtn = document.querySelector('.btn');
const answerEls = document.querySelectorAll('.answer');
const quizContainer = document.querySelector('.quiz-container');

const getSelectedOption = () => {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};

const loadQuestion = () => {
  //Deselect all
  answerEls.forEach((answerEls) => (answerEls.checked = false));

  const currentQuetionData = quizData[currentQuestion];
  question.innerText = currentQuetionData.question;
  a_text.innerText = currentQuetionData.a;
  b_text.innerText = currentQuetionData.b;
  c_text.innerText = currentQuetionData.c;
  d_text.innerText = currentQuetionData.d;
};

submitBtn.addEventListener('click', () => {
  const answer = getSelectedOption();
  if (answer == quizData[currentQuestion].correct) {
    correct++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quizContainer.innerHTML = `
        <div class="quiz-content">
            <h2>You answered ${correct}/${quizData.length} questions correctly</h2>
        </div>
        <button onclick="location.reload()" class="btn">Reload</button>
    `;
  }
});

loadQuestion();
