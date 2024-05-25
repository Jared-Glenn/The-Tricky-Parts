function guessingGame() {
    const answer = Math.ceil(Math.random() * 99);
    let guesses = 0;
    let gameOver = false;
    return function game(guess) {
        if (!gameOver) {
            guesses++;
            if (guess == answer) {
                gameOver = true;
                return `You win! You found ${answer} in ${guesses} guesses.`;
            }
            else if (guess < answer) {
                return `${guess} is too low!`;
            }
            else {
                return `${guess} is too high!`;
            }
        }
        else {
            return "The game is over, you already won!";
        }
    }
}

module.exports = { guessingGame };
