function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`,
    this.incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`
}

UI.prototype.showQuestion = function(question) {
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
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");

    for(let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

UI.prototype.showNumberOfQuestions = function(questionOrder, totalQuestions) {
    let tag = `<span class="badge bg-warning">${questionOrder} / ${totalQuestions}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

UI.prototype.showScore = function(totalQuestions, correctAnswer) {
    let tag = `Toplam ${totalQuestions} sorudan ${correctAnswer} doğru cevap verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}