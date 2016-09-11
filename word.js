// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
//a conjunctional function that determines the parameters that will be called in the main.js file
function Words(word) {
    this.word = word;
    this.guessed = [];
    this.letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.checkLetters = function (input){
    	
//Creates the parameter inside the check letters function when isVal is defaulted to false, then true, then false
        var isVal = false;
    	for (i in this.letters){
    		if(input == this.letters[i]){
    			isVal = true;
    		}
    	}
    	console.log(isVal)
    	if (isVal == false){
    		return null;
    	}
    	isVal = false;
	    for (i in this.guessed){
	    		if(input == this.guessed[i]){
	    			isVal = true;
	    		}
	    	}
	    if (isVal == true){
	    	return null;
	    }
	    isVal = false;
	    for (i in this.word){
	    		if(input == this.word[i]){
	    			isVal = true;
	    		}
	    	}
	    return isVal;

    }

    // METHOD WHICH PRINTS ALL OF THE STATS FOR A CHARACTER
    this.printStats = function() {
        console.log("Word: " + this.word);
        console.log("\n-------------\n");
    };
 }

//needed to make the file load
 module.exports = Words;