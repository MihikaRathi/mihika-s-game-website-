let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('resultMessage').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
    document.querySelector('button[onclick="checkGuess()"]').disabled = false;
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('resultMessage').textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    if (guess === secretNumber) {
        document.getElementById('resultMessage').textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('guessInput').disabled = true;
        document.querySelector('button[onclick="checkGuess()"]').disabled = true;
    } else if (guess < secretNumber) {
        document.getElementById('resultMessage').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('resultMessage').textContent = 'Too high! Try again.';
    }
}

function restartGame() {
    startGame();
}

// Start the game when the page loads
window.onload = startGame;

