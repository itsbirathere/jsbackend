// const n =10;
// function guessNum(num){
//     console.log(num == n);
//     let c =0;
//     c = c+1;
//     console.log("Total Count =" c);

// }

// const target = 52;
// let attempt = 0;
// const maxAttempts = 20;

// function guessNum() {
//     if (attempt >= maxAttempts) {
//         console.log("You've reached the maximum number of attempts.");
//         console.log("The correct number was: " + target);
//         return;
//     }

//     let cNum = Math.floor(Math.random() * 100); // computer's guess
//     attempt++;

//     console.log(`Attempt ${attempt}: Computer guessed ${cNum}`);

//     if (cNum < target) {
//         console.log("OOPS! The number is too low. Trying again...\n");
//         guessNum();
//     } else if (cNum > target) {
//         console.log("OOPS! The number is too high. Trying again...\n");
//         guessNum();
//     } else {
//         console.log("🎉 Congratulations! You guessed the correct number.");
//         console.log("Total attempts: " + attempt);
//     }
// }

// guessNum();



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const target = Math.floor(Math.random() * 1000);  // Target number
let attempt = 0;
const maxAttempts = 10;

console.log("🎯 Guess the number between 0 and 999!");
console.log(`You have a maximum of ${maxAttempts} attempts.`);

function guessNum() {
    if (attempt >= maxAttempts) {
        console.log("❌ You've used all your attempts!");
        console.log(`The correct number was: ${target}`);
        rl.close();
        return;
    }

    rl.question(`Attempt ${attempt + 1} - Enter your guess: `, (input) => {
        const guess = parseInt(input);

        if (isNaN(guess) || guess < 0 || guess > 1000) {
            console.log("⚠️ Please enter a valid number between 0 and 999.");
            guessNum();
            return;
        }

        attempt++;

        if (guess < target) {
            console.log("📉 Too low! Try again.\n");
            guessNum();
        } else if (guess > target) {
            console.log("📈 Too high! Try again.\n");
            guessNum();
        } else {
            console.log(`🎉 Correct! You guessed the number in ${attempt} attempt(s).`);
            rl.close();
        }
    });
}

guessNum();

