console.log("hi there");
// variables
// collecting win scores
let score = 0;
let playerBet = 0;
let houseBet = 0;
const game = ["ko", "papir", "ollo"];

//betting function

//player bet
function playBet(evt, bet) {
playerBet = document.getElementById(bet).value;

  console.log(playerBet);
  console.log(bet);

}

//showing player bet

//random generator function
function rndNum() {

  myRndNum = Math.floor(Math.random()*10);
  
  if  (myRndNum <= 2 ) {
    console.log(`${game[myRndNum]}`);  
  }
  else {
    rndNum();
  }
}
rndNum();

//showing generated bet
//comparing the two numbers

if (myRndNum + 1 == playerBet) {
  console.log("the winner is you");
}

//showing result you loose/you win ,
// play again /?exit option?
// adding score to score
//quiting game
