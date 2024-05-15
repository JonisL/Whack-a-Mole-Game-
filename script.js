const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');

let score = 0;
let active = false;
let currentHole;
let timer;

function randomHole() {
    const index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

function showMole() {
    if (active) {
        currentHole = randomHole();
        const mole = document.createElement('img');
        mole.src = 'mole.png';
        mole.classList.add('mole');
        mole.style.width = '80px';
        mole.style.height = '80px';
        mole.style.position = 'absolute';
        mole.style.top = '10px';
        mole.style.left = '10px';
        mole.style.cursor = 'pointer';
        currentHole.appendChild(mole);

        mole.addEventListener('click', () => {
            score++;
            scoreDisplay.textContent = score;
            mole.remove();
        });

        setTimeout(() => {
            mole.remove();
            showMole();
        }, 1000);
    }
}

startButton.addEventListener('click', () => {
    if (!active) {
        active = true;
        score = 0;
        scoreDisplay.textContent = score;
        showMole();

        setTimeout(() => {
            active = false;
            alert(`Game over! Your score is ${score}`);
        }, 30000);
    }
});
