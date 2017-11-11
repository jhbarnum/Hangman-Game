
var newArr = [];
var underscore = [];
var word;
var guessArr = [];
var encodedWord = [];
var wrongGuess = "Bad Choices";
var wins = 0;
var checkWord;
var yourGuessesArr = [];
		// Array of random words for game
    var hangmanWordsArr = ['cheeseburger', 'computer', 'bicycle', 'riverfront', 'stereo', 'guitar', 'mountain', 'firestarter', 'ewok', 'minivan', 'argentina', 'snowboard', 'javascript', 'lightning', 'eggnog' ];

		// Press any key to get started

		// Begin game with initialized random word choice from array
		function beginGame() {
      confirm("Do you want to play a game?");
		 	//reset page for game start
		 	var numberOfGuesses = 15;
      //resest encodedWord to correct array length at the start of each play
      encodedWord = [];
      //reset html elements at the start of each play
      document.getElementById("guesses").innerHTML = "";
      document.getElementById("wrongGuess").innerHTML = "";
      document.getElementById("remainingGuesses").innerHTML = numberOfGuesses;
      //sets word to guess at random from array
      word = hangmanWordsArr[Math.floor(Math.random() * hangmanWordsArr.length)];
      //console.log(word);
		 	 //call functionn to convert word to undscores
       convertWord (word);
       // capture keystroke guesses
       document.onkeyup = function(event) {
       var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();

 // Check guess array against hangmanWordarr array 	
          for (i = 0; i < word.length; i++) {
      			//console.log(word[i]);
            if (letterGuess === word[i]) {
              guessArr = letterGuess;
              var removed = encodedWord.splice(i, 1, word[i]);
              document.getElementById('answer').innerHTML = encodedWord;
              document.getElementById("guesses").innerHTML = letterGuess;
              
              encodedWordStr();                                                               
              }
              else 	{ 
                 document.getElementById("guesses").innerHTML = letterGuess;
                 //document.getElementById("wrongGuess").innerHTML = "Try Again";
                   }		
               }
            // displays guesses in new array
            yourGuessesArr.push(letterGuess);
            document.getElementById("wrongGuess").innerHTML = yourGuessesArr;


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
            
            document.getElementById('gameWin').innerHTML = wins;
            confirm("YOU WIN!");
            beginGame();
            //add 1 to win count if game is won.
            wins++;   
            }   
          }
          function convertWord (word) {
              for (var i = 0; i < word.length; i++) {
               // word[i]
               var newStr = word.charAt(i);
               //console.log(newStr);
               encodedWord.push("_");
               document.getElementById('answer').innerHTML = encodedWord;
                  }
                }
                //turns array into str for comparison
          function encodedWordStr() {
              checkWord = encodedWord.join('');
              console.log(checkWord);
              }
         
        }
           
	        	

		

		

		
	

		
		
		
		



		
