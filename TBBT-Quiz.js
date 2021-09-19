var readlineSync = require("readline-sync");
console.log("So you think you're the biggest nerd when it comes to The Big Bang Theory? We demand trial by questions! ");
var name = readlineSync.question("What is your name? ");
console.log("Welcome to IT ALL STARTED WITH A BIG BANG Quiz, " + name + "!" );
var score = 0;
function play(question, answer){
  var currentQuestion = readlineSync.question(question +"Please Choose an option ")
  if (currentQuestion === answer) {
    console.log("You're correct! "), score = score +1 ;
  }else {
    console.log("You're incorrect "); score = score-1;
  }
}

var questionBank =[{question:"Which university did Leonard go to? a) Princeton b) Harvard c)Stanford  d)UCLA. ", answer: "a"},{question:"What catchphrase does Sheldon often use when he is trying to fool around? a)Bazinga b) Crazy. ", answer: "a"},{question:"What is Sheldon's IQ? a) 190 b) 187. ", answer: "b"}, {question:"What is Raj's sister's name? a) Priya b)Shanti. ", answer: "a"},{question:"Who officiated Sheldon and Amy's wedding?? a) Stephen Hawking b) Mark Hamil. ", answer: "b"},  ]
for (i=0; i<questionBank.length; i++){
  var questionNow = questionBank[i];
  play(questionNow.question, questionNow.answer);
}
console.log("Your final score is " + score);
