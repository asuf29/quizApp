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