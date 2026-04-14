# Projects related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

---

# Solution Code

## Project 1 — Color Changer

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // ✅ Use the button's ID directly as the color value
        body.style.backgroundColor = e.target.id;
    });
});
```

---

## Project 2 — BMI Calculator

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (!height || height < 0 || Number.isNaN(height)) {
        results.textContent = `Please enter a valid height: ${height}`;
    } else if (!weight || weight < 0 || Number.isNaN(weight)) {
        results.textContent = `Please enter a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // ✅ Use textContent for plain text, innerHTML only when you need HTML tags
        results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
    }
});
```

---

## Project 3 — Digital Clock

```javascript
const clock = document.getElementById('clock');

setInterval(() => {
    clock.textContent = new Date().toLocaleTimeString();
}, 1000);
```

---

## Project 4 — Number Guessing Game

```javascript
let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

const validateGuess = (guess) => {
    if (Number.isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
};

const checkGuess = (guess) => {
    if (guess === randomNumber) {
        displayMessage('You guessed it right! 🎉');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Number is TOO low ⬇️');
    } else {
        displayMessage('Number is TOO high ⬆️');
    }
};

const displayGuess = (guess) => {
    userInput.value = '';
    guessSlot.textContent += `${guess}, `;
    numGuess++;
    remaining.textContent = `${11 - numGuess} `;
};

const displayMessage = (message) => {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
};

const endGame = () => {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
};

const newGame = () => {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        prevGuess = [];
        numGuess = 1;
        guessSlot.textContent = '';
        remaining.textContent = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
};
```

---

## Project 5 — Keyboard Event Display

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class='color'>
        <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'Space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
        </div>
    `;
});
```

> **Note:** `e.keyCode` is deprecated. Modern alternative:
> ```javascript
> // ✅ Use e.key and e.code instead of e.keyCode
> window.addEventListener('keydown', (e) => {
>     console.log(`Key: ${e.key}, Code: ${e.code}`);
> });
> ```

---

## Project 6 — Auto Background Color Changer

```javascript
const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId = null;

const startChangingColor = () => {
    // ✅ Prevent multiple intervals from stacking
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
};

const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null; // ✅ Reset so it can be started again
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
```