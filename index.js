var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your name? ");
console.log("Welcome "+ userName+ " to HOW MUCH DO YOU KNOW ABOUT ONEPIECE!")
var score = 0;
console.log("------------");
var onePiece = [{
  question : "Who's the first crew membar of strawhat pirates? ",
  options: "a.Nami b.Sanji c.Usopp d.Zoro : ",
  answer : "d",
}, {
  question : "Who is the strongest haki user in onepiece so far till wano? ",
  options : "a.Katakuri b.God Eneru(Skypie) c.Whitebeird d.Rayleigh : ",
  answer : "a"
},{
  question : "In which arc going merry has been destroyed? ",
  options : "a.Long Ring Long Land Arc b.Skypie c.Water7 d.Enies Lobby : ",
  answer : "c"
},{
  question : "Who is the 4th member of strawhat pirates? ",
  options : "a.Usopp b.Sanji c.Chopper d.Nami : ",
  answer : "b"
}];

function play(question, options, answer){
  console.log(question);
  console.log("Options are: ");
  var userAnswer = readlineSync.question(options);
  console.log("You entered "+ userAnswer);
    if(userAnswer === answer){
      console.log("You are right!");
      score = score + 1;
      console.log("------------");
    }else{
      console.log("You are wrong! just go die you bitch");
      score = score - 1;
      console.log("------------");
    }
}
for(var i=0; i< onePiece.length; i++){
  play(onePiece[i].question, onePiece[i].options, onePiece[i].answer);
}
console.log("YAY! You scored: ", score);