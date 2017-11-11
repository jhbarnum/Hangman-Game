

var underscore = [];
var word;
var guessArr = [];
var encodedWord = [];
var wrongGuess = "Bad Choices";
var wins = 0;
var checkWord;
		// Array of random words for game
    var hangmanWordsArr = ['cheeseburger', 'computer', 'bicycle', 'riverfront', 'stereo', 'guitar', 'mountain', 'firestarter', 'ewok', 'minivan', 'argentina', 'snowboard', 'javascript', 'lightning', 'eggnog' ];

		// Press any key to get started

		// Begin game with initialized random word choice from array
		function beginGame() {
      confirm("Do you want to play a game?");
		 	//reset page for game start
		 	var numberOfGuesses = 15;
      encodedWord = [];
      document.getElementById("guesses").innerHTML = "";
      document.getElementById("wrongGuess").innerHTML = "";
      document.getElementById("remainingGuesses").innerHTML = numberOfGuesses;
      word = hangmanWordsArr[Math.floor(Math.random() * hangmanWordsArr.length)];
      console.log(word);
		 	 //convert word to undscores
       convertWord (word);
       // capture keystroke guesses
       document.onkeyup = function(event) {
        var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
        //console.log('Event Char Code ' + event.keyCode);
        //console.log('Letter from Char code ' + letterGuess);
        



  		// Array for placement of guesses
      underscore = [word];
  		//console.log("My Word" + underscore);
 // turn underscore[] to [ _,_,_,_,_,_,_,_,_]
 


 // Check guess array against hangmanWordarr array 	
          for (i = 0; i < word.length; i++) {
      			//console.log(word[i]);
            if (letterGuess === word[i]) {
              guessArr = letterGuess;
              var removed = encodedWord.splice(i, 1, word[i]);
              document.getElementById('answer').innerHTML = encodedWord;

 // reveal correct guesses
 				      //console.log(word.indexOf(i));// ALWAYS RETURNNING -1 ?
              document.getElementById("guesses").innerHTML = letterGuess;
      
              document.getElementById("wrongGuess").innerHTML = "Good";
              encodedWordStr();
                                                                              //break;
              }
              else 	{ 
                 document.getElementById("guesses").innerHTML = letterGuess;
                 document.getElementById("wrongGuess").innerHTML = "Try Again";
                   }		
               }
        		//# of guesses remaining
           numberOfGuesses = numberOfGuesses - 1;
           document.getElementById("remainingGuesses").innerHTML = numberOfGuesses;

           if (numberOfGuesses <= 0){
             document.getElementById("wrongGuess").innerHTML = "Game Over";
    				//start over
           alert("game Over");

            }
          if (checkWord == word) {
            console.log("piaz");
            wins++;
            document.getElementById('gameWin').innerHTML = wins;
            confirm("YOU WIN!");
            beginGame();
            }
              //console.log(encodedWord);
                //console.log(word);
          }
          function convertWord (word) {

              for (var i = 0; i < word.length; i++) {
               // word[i]
               var newStr = word.charAt(i);
               //console.log(newStr);
               encodedWord.push("_");
               document.getElementById('answer').innerHTML = encodedWord;
               //console.log(encodedWord);{}
                  }
                }
          function encodedWordStr() {
              checkWord = encodedWord.join('');
              console.log(checkWord);
              }
        }
           
	        	

		

		

		
	

		
		
		
		



		
