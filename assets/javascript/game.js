// our precious variables.
var psychicString = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var guessCount = 10;
var guessList = new Array();

// Randomly chooses a choice from the alphabet. This is the Computer's guess.

function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

psychicString = getRandomLetter();

// Log the computer's guess to the console so you can cheat

console.log(psychicString);

// This function is run whenever the user presses a key.

document.onkeyup = function(event) {

    // Determines which key was pressed.

    var userGuess = event.key;

    // As long as the human has made less than ten guesses, run the game

    if (guessCount > 1) {

        // If the human guesses correctly, throw up an alert, prompt to restart, and rest the game.

        if (userGuess === psychicString) {
            wins++;
            alert("WHOA you guessed it! You must be PSYCHIC!");
            alert("Let's try this once more, big shot — I have a new letter, you guess again!");
            psychicString = getRandomLetter();
            console.log(psychicString);
            guessList = [];
            guessCount = 10;

        // wrong guesses increment the guess counter downwards, 
        // and push the latest guess into an array for output to the page. 
        // continue play.

        } else {
            guessCount--;
            guessList.push(" " + userGuess);
        }

        // when human runs out of guesses, mock their ineptitude and
        // prompt to restart game. Reset the game.

    } else {
        alert("Ugh, you mucked that one up. Why not try again?");
        psychicString = getRandomLetter();
        console.log(psychicString);
        losses++;
        guessList = [];
        guessCount = 10;

    }

    // output stats to the dom

    var html =
        "<p>Psychic Wins: " + wins + "</p>" +
        "<p>Pathetic Series of Blunders: " + losses + "</p>" +
        "<p>Number of Guesses left: " + guessCount + "</p>" +
        "Your Guesses so far: " + guessList + "</p>";

    document.querySelector("#game").innerHTML = html;

};
