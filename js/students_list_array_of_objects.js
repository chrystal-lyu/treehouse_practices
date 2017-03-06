var students = [
    {
        name: "Crystal",
        track: 26,
        achievements: ["pharmacy", "stats"],
        points: 647
    },
    {
        name: "Eddie",
        track: 300,
        achievements: ["computer", "software", "ML", "python"],
        points: 2398
    },
    {
        name: "Karen",
        track: 200,
        achievements: ["jap", "eng", "mand", "cant"],
        points: 900
    },
    {
        name: "Jacob",
        track: 800,
        achievements: ["accounting", "math", "finance"],
        points: 9000
    },
    {
        name: "Michelle",
        track: 56,
        achievements: ["business", "marketing", "sales"],
        points: 876
    }
];

var message = '';
var student = { };

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    message += '<h2>Student: ' + students[i].name  + '</h2>';
    message += '<p>Track: ' + student.track + '</p>';
    message += '<p>Achievements: ' + student.achievements.join(", ") + '</p>';
    message += '<p>Points: ' + student.points + '</p>'
}

print(message);

console.log(students.name);
