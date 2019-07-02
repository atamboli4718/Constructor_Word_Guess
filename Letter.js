// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display 
//an underlying character or a blank placeholder (such as an underscore), depending on whether or not 
//the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder 
//(like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character,
// updating the stored boolean value to true if it was guessed correctly.
//   *should not* `require` any other files.

/* My logic:
define options for the user to guess
options (keys)
random selection 
guesses left
incorrect guesses
*/

const characterOptions = ['Arial','Aladdin','Elsa','Cinderella','Belle','Esmeralda','Pluto','Simba','Merida', 'Anna','Tigger','Hercules'];
const keysToPress = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","1","2","3","4","5","6","7","8","9","0"];
let computerSelection;
let wrongGuesses;
let wrongGuessCount=0;
let userGuess = process.argv[2];

// Letter Constructor
let Letter = function(userGuess){
    //to chose a random character
    computerSelection = characterOptions[Math.floor(Math.random()*characterOptions.length)];
    console.log(computerSelection);

    // * A string value to store the underlying character for the letter
    let dashCount=[];
    for (var i=0; i<computerSelection.length; i++){
        dashCount.push('- ');
    }
    console.log(dashCount);

    // * A boolean value that stores whether that letter has been guessed yet
    
    

}

Letter();
