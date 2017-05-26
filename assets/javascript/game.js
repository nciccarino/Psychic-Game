var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var answer = null;


//random
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var updateGuessesSoFar = function() {
  document.querySelector("#soFar").innerHTML = "Your Guesses so far: " + guessedLetters.join(", ");
      //find a way to not allow the same letter to be clicked twice

};

var updateGuessesLeft = function() {
  document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
};

var updateAnswer = function() {
  this.answer = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateAnswer();
  updateGuessesLeft();
  updateGuessesSoFar();
}

document.onkeyup = function(event) {
  guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == answer){
                wins++;
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
                alert("You Win!");
                reset();
            }
        }
        else if(guessesLeft == 0){
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            alert("You Loose!");
            reset();
        }
        //ATTEMPTS TO NOT REPEAT SAME ANSWER AND KEEP "GUESSES LEFT" THE SAME

        // if (guessedLetters.indexOf(userGuess) == -1){
        //    guessesLeft-- ;
        //    guessedLetters.push(userGuess); 
        //    //updateGuessesLeft-- ;
        // }

        // if (guessedLetters.indexOf(userGuess) ===-1 && answer === true){
        //    guessedLetters.push(userGuess); 
        //    document.getElementById("soFar").innerHTML = guessedLetters;
        //    guessesLeft--;
        //    document.getElementById("left").innerHTML = guessesLeft;
           
        // }
};