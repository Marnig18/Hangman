const words = ["home", "bee", "dress", "sugar"]
let chosenWord = ""
///Will hold array of letters in the word
let lettersInWord = []
//will hold length of blanks shown for each chosen word
let numOfBlanks = 0
//Array that will hold the updated blanks with correct guesses
let blanksAndSuccesses = []
//will hold array of wrong guess
let wrongGuesses=[]



//GAME Counters
let wins = 0
let losses = 0
let numOfGuesses = 10

// DOM ELEMENTS
const wordDiv = document.getElementById("word")
const guessedLetter = document.getElementById("lettersGuessed")
const tally = document.getElementById('guessesLeft')



//FUNCTIONS

//function to start the game
function startGame(){

  //Choose random word
  chosenWord = words[Math.floor(Math.random()* words.length)]
  console.log(chosenWord)
  //break words into letters
  lettersInWord = chosenWord.split("")
  //retrieve legth of array to show correct number of blanks
  numOfBlanks = lettersInWord.length

///Fill blanks in blanksAndSuccesses array
  for(var i=0; i<numOfBlanks; i++){
    blanksAndSuccesses.push("_")
  }

  console.log(blanksAndSuccesses)

  //display word on the screen

  wordDiv.innerHTML = blanksAndSuccesses.join(" ")
  tally.innerHTML = numOfGuesses
}

function checkLetter(key){

  console.log(wrongGuesses.indexOf(key))
  //If the chosenWord includes the letter guessed
  if(chosenWord.includes(key)){
    //loop through all the letters in the word
    for (var i=0; i<lettersInWord.length; i++){
      //and find its index within the array
      if (key  === lettersInWord[i]){
        //and set the blanksAndSuccesses array at that index to the key
        blanksAndSuccesses[i] = key
      }
      console.log(blanksAndSuccesses)
      //print the new blanksAndSuccesses to the DOM
      wordDiv.innerHTML = blanksAndSuccesses.join(" ")
    }
    ///else if the letter in not in the chosen word and it was not already guessed
  } else if(!chosenWord.includes(key) && wrongGuesses.indexOf(key) === -1){
    // push the letter into the wrongGuesses array
    wrongGuesses.push(key);
    // print the array to the screen
    guessedLetter.innerHTML = wrongGuesses.join (" ")
    //decrease num of guesses left by 1
    numOfGuesses--;
    //print num of guesses to window
    tally.innerHTML = numOfGuesses;
    //if the letter was already guessed
  } else{
    //decrease num of guesses by 1
    numOfGuesses--;
    //print to the screen
    tally.innerHTML = numOfGuesses;
  }
}

///record the key pressed
  document.onkeyup = function(event){
    let key = event.key
    let current = blanksAndSuccesses.join("")
    //run key through the checkLetter function
    if(chosenWord !== current){
      checkLetter(key)
    } else{
      alert("You win!")
      wins ++
    }



  }


startGame()
