var readlineSync=require("readline-sync"); 
var score=0;
var userName=readlineSync.question("what is your name?\n");
console.log("welcome "+ userName+ " do you know kamal?");

function play(question,answer){
   var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log("right!");
    score+=1;
  }
  else
  {
    console.log("wrong!");
  }
  console.log("your score: "+ score);
  console.log('-----------------');

}
var highScore=[{
  name: "kamal",
  score:" 4"
},
{name: "tushar",
score: " 3"}
];


var quiz=[{
  question: "Which city i live in? \n",
  answer: "haldwani"
},
 {
  question: "which one is my favourite pop group?\n",
  answer: "now united"
},
 {
  question:"what matters to me more [food/people]?\n",
  answer: "food"
}
,
{
  question:"which is my favourite colour?\n",
  answer: "black"
},
{
   question:"what's my email id?\n",
  answer: "k.latwal15@gmail.com"
}
];
for(var i=0;i<quiz.length;i++){
  var currentquestion=quiz[i];
  play(currentquestion.question,currentquestion.answer); 
}
console.log("Your FINAL score: "+ score);
console.log("checkout the highscores: ");

for(var j=0;j<highScore.length;j++)
{
  console.log(highScore[j]);
}

