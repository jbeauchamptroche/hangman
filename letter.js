// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

//CONSTRUCTOR FUNCTION WHICH CAN TAKE IN A SERIES OF VALUES AND CREATE OBJECTS WITH THE PROPERTIES CONTAINED INSIDE//
function Letters(word) {
    this.word = word;
    this.answerLettersArray = this.word.split("");
    this.lettersGuessed = [];
    this.output = [];
    this.isMatch = false;

//CALLING THE GAME IN THE MAIN.JS FILE TO BEGIN THE GAME, IT OUTPUTS THE _'S BASED ON THE RANDOM WORD CHOOSEN

    this.begin = function(){
        for (i in this.word){
            this.output.push("_");
        }
    };

    //OUTPUT FUNCTION DISPLAY
    this.display = function(){
        return this.output;
    };

    //PUSHES THE LETTERS GUESSED FROM THE ARRAY INTO THE LETTERS PICK FROM THE WORD.JS FILE 
    this.update = function(letterPicked){
        this.lettersGuessed.push(letterPicked);
        this.isMatch = false;
            for (l = 0; l < this.answerLettersArray.length; l++){
                if(letterPicked == this.answerLettersArray[l]){
                    this.output[l] = this.answerLettersArray[l];
                    this.isMatch = true;
                }
            }
    };

   //MATCHES THE LETTERS ARRAY AND THE OUTPUT 

    this.win = function(){
        var alaString = this.answerLettersArray.toString();
        var opString = this.output.toString();
        if (alaString == opString){
            return true;
        }
    }

 }

 
//FILE LOAD 
 module.exports = Letters;