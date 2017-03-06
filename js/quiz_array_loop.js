var questions = [
    ["Who is the president of the US (answer only last name)?", "trump"],
    ["What year did China go liberate?", "1949"],
    ["Where was the city that host EXPO2010?", "shanghai"],
    ["What is the color of the sky?", "blue"]
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html = '';
var correctQ = [ ];
var wrongQ = [ ];

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function buildList(arr) {
    var listHTML = "<ol>";
    for (var i = 0; i < arr.length; i += 1) {
    listHTML += "<li>" + arr[i] +"</li>";
    }
    listHTML += "</ol>";
    return listHTML;
}


for (var i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = prompt(question).toLowerCase();
    if (response === answer) {
        correctAnswers += 1;
        correctQ.push(question);
    } else {
        wrongQ.push(question);
    }
}


if (correctAnswers === 0) {
    html += '<h2> Sorry! You failed the quiz!</h2>'
} else {
    html = "You got " + correctAnswers + " question(s) right.";
    html += '<h2> You got these question(s) correct: </h2>';
    html += buildList(correctQ);
}


if (correctAnswers === 4) {
    html += '<h2> Congrats! You got all the questions right!</h2>'
} else {
    html += '<h2> You got these question(s) wrong: </h2>';
    html += buildList(wrongQ);
}


print(html);

console.log("Correctly answered: " + correctQ);
console.log("Wrongly answered: " + wrongQ);
