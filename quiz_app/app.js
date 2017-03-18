//function to populate the question
function populate() {
    if(quiz.isEnded()) {
        showScore();
    } else {
        // show question
        var questionElement = document.getElementById('question');
        questionElement.innerHTML = quiz.getQuestionIndex().questionText;
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var choiceElement = document.getElementById('choice' + i);
            choiceElement.innerHTML = choices[i];
            guess('guess' + i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showScore() {
    var gameOverHtml = '<h1>Result</h1>';
    gameOverHtml += '<h2 id="score"> Your scores: ' + quiz.score + '</h2>';
    var scoreElement = document.getElementById('quiz');
    scoreElement.innerHTML = gameOverHtml;
}


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var showProgressElement = document.getElementById('progress');
    showProgressElement.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length + ".";
}


var questions = [
    new Question("Who was the president of the United States?", ["George Washington", "Thomas Jefferson"], "George Washington"),
    new Question("What city is the capital of California?", ["San Francisco", "Sacramento"], "Sacramento"),
    new Question("In which year was I born?", ["1989", "1990"], "1990")
];

var quiz = new Quiz(questions);

populate();



