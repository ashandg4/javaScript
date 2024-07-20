let maximum = parseInt(prompt("Enter the maximum number: "));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const target = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (guess != target) {
    if (guess == "q") break;
    attempts++;
    if (guess > target) {
        guess = prompt("Too high! Enter a new guess");
    } else {
        guess = prompt("Too low! Enter a new guess");
    }
}
if (guess == "q") {
    console.log("OK, You Quit!!!");
} else {
    console.log(`You got it!!! It took you ${attempts} guesses`);
}
