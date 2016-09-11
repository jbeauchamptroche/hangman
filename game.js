//Need a function that will store the answers and pick one randomly
//game.js file will randomly select a word for the player

var Game = function(){
	this.answer = ["steak", "chicken", "beef", "hot dog", "filet migon"]; //ARRAY THAT WILL STORE ANSWERS TO THE GAME
	this.chosenWord = this.answer[Math.floor(Math.random() * this.answer.length)]; //THIS CODE PICKS ONE WORD RANDOMLY
}

module.exports = Game; //NEEDED TO MAKE THE FILE LOAD