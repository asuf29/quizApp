function Question(questionText, answerOptions, correctAnswer ) {
    this.questionText = questionText;
    this.answerOptions = answerOptions;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkTheAnswer = function (answer) {
    return answer === this.correctAnswer;
}

let questions = [
    new Question("1-Ana belleğin sadece okunabilen, silinemeyen ve değiştirilemeyen kısmına ne ad verilir?", {a:"RAM Bellek", b:"ROM Bellek", c:"Hard Disk", d:"CPU"}, "b"),
    new Question("2-Aşağıdakilerden hangisi bir programlama dili değildir?", {a:"Paskal", b:"Cobol", c:"Windows XP", d:"Delphi"}, "c"),
    new Question("3-Aşağıdakilerden hangisi bir yazılım çeşidi değildir?", {a:"İşletim sistemleri", b:"Uygulama yazılımları", c:"Bilgi otobanı", d:"Programlama dilleri"}, "c"),
    new Question("4-Tarayıcının işlevi nedir?", {a:"Bilgisayardaki bilgileri kâğıda aktarmak", b:"Kâğıttaki bilgileri bilgisayara aktarmak", c:"İnternette aradığımız bir konuyu taramak", d:"Bilgisayardaki dosyaları taramak"}, "b"),
];