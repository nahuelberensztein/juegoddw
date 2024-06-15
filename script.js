const choices = ["piedra", "papel", "tijera"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "Empate!";
    }
    else{
        switch(playerChoice){
            case "piedra":
                result = (computerChoice === "tijera") ? "Ganaste!" : "Perdiste!";
                break;
            case "papel":
                result = (computerChoice === "piedra") ? "Ganaste!" : "Perdiste!";
                break;
            case "tijera":
                result = (computerChoice === "papel") ? "Ganaste!" : "Perdiste!";
                break;
        }
    }

    playerDisplay.textContent = `Jugador: ${playerChoice}`;
    computerDisplay.textContent = `Máquina: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "Ganaste!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Perdiste!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

    if(playerScore === 3 || computerScore === 3){
        showAlert('El juego ha terminado', `${playerScore === 3 ? "¡Ganaste!" : "¡Perdiste!"}`, `Puntuación final: Jugador ${playerScore} - Máquina ${computerScore}`);


        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }
}

function showAlert(title, message, score) {
    const modal = document.getElementById("customAlert");
    const titleElement = document.getElementById("modalTitle");
    const textElement1 = document.getElementById("modalText1");
    const textElement2 = document.getElementById("modalText2");
    const textElement3 = document.getElementById("modalText3");
    const closeButton = document.querySelector(".close-button");
    const background = document.querySelector(".alerta-uno");
  
    titleElement.textContent = title;
    textElement1.textContent = message;
    textElement2.textContent = score;
    textElement3.textContent = 'Cierra la ventana para volver a jugar';
  
    switch(message){
        case "¡Ganaste!":
            textElement1.style.color = "green";
            break;
        case "¡Perdiste!":
            textElement1.style.color = "red";
            break;
    }

    modal.style.display = "block";
    background.style.display = "grid";

  
    closeButton.onclick = function() {
      modal.style.display = "none";
    }
}

// function alertRules() {
//     const modal1 = document.getElementById("customAlert2");
//     const closeButton1 = document.querySelector(".close-button");
//     const background1 = document.querySelector(".alerta-uno");

//     // Mostrar modal y fondo
//     modal1.style.display = "block";
//     background1.style.display = "grid";

//     closeButton1.onclick = function() {
//         modal1.style.display = "none";
//       }

// }

// document.addEventListener('DOMContentLoaded', function() {
//     alertRules();
// });
// function alertRules(){
//     const modal = document.getElementById("customAlert2");
//     const closeButton = document.querySelector(".close-button");
//     const background = document.querySelector(".alerta-uno");


//     modal.style.display = "block";
//     background.style.display = "grid";

  
//     closeButton.onclick = function() {
//       modal.style.display = "none";
//     }
// }

// alertRules();



// para que la animación multicolor solo funcione en dispositivos que no sean táctiles

function isTouchDevice() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
}

if (!isTouchDevice()) {
    document.body.classList.add('no-touch');
}

const buttons = document.querySelectorAll('.choices button');

function addHoverEffect(event) {
    event.target.classList.add('button-hover-effect');
}

function removeHoverEffect() {
    buttons.forEach(button => {
        button.classList.remove('button-hover-effect');
    });
}

buttons.forEach(button => {
    button.addEventListener('touchstart', addHoverEffect);
    button.addEventListener('touchcancel', removeHoverEffect);
});

document.addEventListener('touchend', removeHoverEffect);


// cambio de tema

document.addEventListener('DOMContentLoaded', (event) => {
    const temaGuardado = localStorage.getItem('tema'); // Obtiene el tema guardado
    if (temaGuardado) {
        changeTheme(temaGuardado); // Aplica el tema guardado
    }
});

function changeTheme(theme) {
    const butLight = document.getElementById("claro");
    const butDark = document.getElementById("oscuro");
    

    switch(theme){
        case "light":
            document.body.classList.replace("dark", "light");
            // butLight.style.color = 'var(--fondo)';
            localStorage.setItem('tema', 'light');
            break;
        case "dark":
            document.body.classList.replace("light", "dark");
            // butDark.style.color = 'var(--fondo)';
            localStorage.setItem('tema', 'dark');
            break;
    }
}