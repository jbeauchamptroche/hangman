//Contains the logic/code of the Hangman app - This will run to the terminal and start the game 
//Consists of player guesses and player runs out of guesses


//NODE INSTALLER TO RUN THE GAME
var inquirer = require('inquirer');
var game = require('./game.js');
var letter = require('./letter.js');
var word = require('./word.js');

//CREATES THE NEW GAMES THAT PULLS FROM THE GAME.JS FILE

var newGame = new game();

//VARIABLE CREATED GAMEANSWER THAT TAKE THE VAR ABOVE AND THE RANDOM WORD CHOSE FROM GAME.JS

var gameAnswer = newGame.chosenWord;

// console.log(gameAnswer);


//NUMBER OF GUESSES YOU START WITH 
var guessesLeft = 12;



var checkWord = new word(newGame.chosenWord);


var newLetter = new letter(checkWord.word);


var isFirstGuess = true;

hangman();

//HANGMAN FUNCTION RUNNING THE CODE AND GRABBING FROM THE OTHER FILES 
function hangman (){
	
//SETS THE GUESSES LEFT EVERYTIME A LETTER IS CHOOSEN

	if (guessesLeft > 0) {

		console.log("Remaining Guesses :" + guessesLeft)

		if (isFirstGuess) {
			newLetter.begin();
			console.log(newLetter.output);
		}
		else {
			console.log(newLetter.display());
		}

		console.log("Letters Guessed: " + newLetter.lettersGuessed);

		//WE ARE USING THE NPM INQUIRER TO CREATE A PROMPT ASKING PLAYER TO PICK A LETTER 

		inquirer.prompt({
		name: "guess",
		message: "Pick a letter: "
		}).then(function(answer) {
			isFirstGuess = false;
			newLetter.update(answer.guess);

			//IF THE LETTER CHOOSEN MATCHES THEN THE PLAYER WINS

			if (newLetter.isMatch) {
				if(newLetter.win()) {
					console.log("You are a Winner!");
					console.log("Ah you lost! The answer was: " + gameAnswer);
					return;
				}
				hangman();

			}

			//TALLY OF GUESSES LEFT DOWN TO ONE COUNT LEFT
			else {
				guessesLeft--;
				hangman();
			}

		})
	}	

	//IF LINE 42 IS FALSE AND COUNT IS LESS THEN 0, RUN THE ELSE STATEMENT 
	else {
		console.log("No more guesses remaining, you are a loser!");
		console.log("Great Job! Winner Winner Chicken Dinner! The answer was: " + gameAnswer);
	}

}