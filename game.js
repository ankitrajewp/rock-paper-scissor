const computerChoice = document.getElementById('computer-choice');
const userChoice = document.getElementById('user-choice');
const result = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.button');

let user;
let computer;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    user = e.target.id;
    userChoice.innerHTML = user;
    generateComputerChoice();
    determineResult();
}));

function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    computer = choices[randomNumber];
    computerChoice.innerHTML = computer;
}

function determineResult() {
    if (user === computer) {
        result.innerHTML = "It's a tie!";
    } else if (
        (user === 'rock' && computer === 'scissor') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissor' && computer === 'paper')
    ) {
        result.innerHTML = 'You win!';
    } else {
        result.innerHTML = 'Computer wins!';
    }
}
