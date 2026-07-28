const randomNumbers = () => Math.ceil(Math.random() * 100);

function guessTheNumber() {
    const computerRandomNumber = randomNumbers();
    let lives = 7;
    let attempts = 0;

    let Robot = +prompt("I have thought about the number till 100...\nGuess the number!")

    while (lives > 0) {
        if (isNaN(Robot) || Robot < 1 || Robot > 100) {
            alert("It should be a number from 1 to 100!");

            Robot = +prompt(`Guess again!\nLives left: ${lives}`)
            continue;
        }

        attempts++;

        if (Robot === computerRandomNumber) {
            alert(`Congratulations!\nYou guessed the number!\n\nAttempts: ${attempts}`)
            break;
        }

        lives--;

        if (lives === 0) {
            alert(`You lost!\nThe number was ${computerRandomNumber}\n\nAttempts: ${attempts}`);
            break;
        }

        if (Robot < computerRandomNumber) {
            Robot = +prompt(`⬆️ My number is higher!\nLives left: ${lives}`);
        } else {
            Robot = +prompt(`⬇️ My number is lower!\nLives left: ${lives}`);
        }
    }

    let oneMore = confirm("Do you want to play again?");
    if (oneMore) {
        guessTheNumber();
    } else {
        alert("Thanks for playing!");
    }
}
guessTheNumber();
