"use strict";const btn=document.querySelector(".js-input"),optionSelect=document.querySelector(".js_select_option"),compScore=document.querySelector(".js-attempts-comp"),userScore=document.querySelector(".js-attempts-user"),resultMessage=document.querySelector(".js-result-message");let computerValue="",game="",attemptsCounter=document.querySelector(".js-attempts-counter");function getRandomNumber(){return Math.ceil(100*Math.random())}function computerChoice(){let e=getRandomNumber(100),t=optionSelect.value;e<=33?computerValue="piedra":e>=66?computerValue="papel":e<=100&&(computerValue="tijera"),computerValue===t?game="Empate &#128581":"piedra"===computerValue?"papel"===t?(game="Has ganado &#127881",userWins()):"tijera"===t&&(game="Has perdido &#128128",compWins()):"papel"===computerValue?"piedra"===t?(game="Has perdido &#128128",compWins()):"tijera"===t&&(game="Has ganado &#127881",userWins()):"tijera"===computerValue&&("piedra"===t?(game="Has ganado &#127881",userWins()):"papel"===t&&(game="Has perdido &#128128",compWins())),resultMessage.innerHTML=""+game,console.log(computerValue)}let compCounter=0;function compWins(){compCounter++,compScore.innerHTML=""+compCounter,console.log("computadora")}let userCounter=0;function userWins(){userCounter++,userScore.innerHTML=""+userCounter,console.log("jugadora")}let counterGame=0;function counter(){counterGame++,attemptsCounter.innerHTML=""+counterGame}function handlerBtn(e){e.preventDefault(),computerChoice(),counter()}btn.addEventListener("click",handlerBtn);