
let randomnum = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessfield");
const guesslot = document.querySelector(".guesses");
const lastresult = document.querySelector(".lastresult");
const lowOrHi = document.querySelector(".lowOrHi");
const startover = document.querySelector(".result");

const p = document.createElement('p');
let prevguess = [];
let numguess = 1;
let playgame = true;


if (playgame) {
    submit.addEventListener("click", function (event) {
        event.preventDefault();
        const guess = parseInt(userinput.value);

        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number greater than 1");
    }
    else if (guess > 100) {
        alert("Please enter a number less than 100");
    }
    else {
        prevguess.push(guess);
        if (numguess >=10) {
            displayguess(guess);
            displaymsg(`Game Over, Random num was ${randomnum}`)
            endgame();
        }
        else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === randomnum) {
        displaymsg("you guessed it Right ✅");
        endgame();
    } else if (guess < randomnum) {
        displaymsg("your num is too low⬇️")
    }
    else if (guess > randomnum) {
        displaymsg("your num is too high ⬆️")
    }
}
function displayguess(guess) {
    userinput.value = "";
    guesslot.innerHTML += `${guess + " "}`;
    numguess++;
    lastresult.innerHTML = `${11 - numguess}`
}
function displaymsg(msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}
function endgame() {
    userinput.value = "";
    userinput.setAttribute("disabled", "");
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgamee">Start Again!</h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame();

}
function newgame() {
    let newgamebtn = document.querySelector('#newgamee');
    newgamebtn.style.border = "2px solid white";
    newgamebtn.style.width = "130px"
    newgamebtn.style.padding = "0 20px"
    newgamebtn.style.marginLeft = " 47px"
    newgamebtn.style.marginTop = " 20px"
    newgamebtn.style.border = "2px"
    
    
    newgamebtn.style.borderRadius = "5px"

    newgamebtn.style.cursor = "pointer"
    newgamebtn.style.backgroundColor = "yellow"
    newgamebtn.style.color = "black"

    newgamebtn.addEventListener("click", function (e) {
        randomnum = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numguess = 1;
        guesslot.innerHTML = '';
        lastresult.innerHTML = `${11 - numguess}`;
        userinput.removeAttribute('disabled')
        startover.removeChild(p);
        playgame = true;
    })
}
