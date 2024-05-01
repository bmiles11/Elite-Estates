'use strict'

let checkbox = document.getElementById("dark")
    checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
});


// Guessing game
// Get a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Function to check the guess
function checkGuess() {
    let userGuess = parseInt(document.getElementById("userGuess").value);

    // Check if the number is between 1 and 10
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        document.getElementById("result").textContent = "Please enter a valid number between 1 and 10.";
    } else if (userGuess === randomNumber) {
        document.getElementById("result").textContent = `Congratulations! The correct number is ${randomNumber}. You win!`;
    } else {
        document.getElementById("result").textContent = `Sorry, ${userGuess} is incorrect. Keep trying.`;
    }
}