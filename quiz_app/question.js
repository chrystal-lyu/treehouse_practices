
function Question (questionText, choices, answer) {
    this.questionText = questionText;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
};

