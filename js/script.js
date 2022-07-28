function Question(questionText, answerOptions, correctAnswer ) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkTheAnswer = function (answer) {
    return answer === this.correctAnswer;
}


let questions = [
    new Question("1-aaaaascsx", {a:"asd", b:"gvhbjn", c:"asxd"}, "a"),
    new Question("2-aaaaascsx", {a:"asd", b:"gvhbjn", c:"asxd"}, "b"),
    new Question("3-aaaaascsx", {a:"asd", b:"gvhbjn", c:"asxd"}, "c"),
    new Question("4-aaaaascsx", {a:"asd", b:"gvhbjn", c:"asxd"}, "d"),
];

function Quiz(questions){
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.bringQuestion = function(){
    return this.questions[this.questionIndex];
}

const quiz = new Quiz(questions);

document.querySelector('.btn-start').addEventListener('click',function(){
        document.querySelector(".quiz_box").classList.add("active");
        showQuestion(quiz.bringQuestion());
        showNumberOfQuestions(quiz.questionIndex + 1, quiz.questions.length);
        document.querySelector(".next_btn").classList.remove("show");
})

document.querySelector(".next_btn").addEventListener('click',function(){
    if(quiz.questions.length != quiz.questionIndex +1){
        quiz.questionIndex += 1;
        showQuestion(quiz.bringQuestion());
        showNumberOfQuestions(quiz.questionIndex +1, quiz.questions.length);
        document.querySelector(".next_btn").classList.remove("show");
    } else{
        console.log("quiz bitti");
    }
});

const option_list = document.querySelector(".option_list");
const correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`;
const incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`;

function showQuestion(question){
    let newQuestion = `<span>${question.questionText}</span>`;
    let options = '';

    for(let answer in question.answerOptions) {
        options += 
            `
            <div class="option">
                <span><b>${answer}</b>: ${question.answerOptions[answer]}</span>
            </div>
            
            `;
    }

    document.querySelector(".question_text").innerHTML = newQuestion;
    option_list.innerHTML = options;


    console.log(option_list);
    const option = option_list.querySelectorAll(".option");

    for(let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

function optionSelected(option){
    let answer = option.querySelector("span b").textContent;
    let question = quiz.bringQuestion();

    if(question.checkTheAnswer(answer)) {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", incorrectIcon);
    }

    for(let i=0; i<option_list.children.length; i++) {
        option_list.children[i].classList.add("disabled");
    }
    document.querySelector(".next_btn").classList.add("show");
}

function showNumberOfQuestions(questionOrder, totalQuestions) {
    let tag = `<span class="badge bg-warning">${questionOrder} / ${totalQuestions}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}