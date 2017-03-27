let jessie = document.querySelector("#jessie");
let walter = document.querySelector("#walter");
let rv = document.querySelector("#rv");
let dollars = document.querySelector(".dollars");
let punch = document.querySelector("audio#punch");
let startButton = document.querySelector ("#start-btn");

dollars.style.display = "none";

    console.log("Event: Press Start");
    startButton.addEventListener("click", moveJess)

function moveJess () {
    console.log("Event: Start pressed");
    jessie.classList.add("jessEnters");
}

function jessTalks () {
    console.log("Event:Jess starts speaking");

}

function walterTalks () {
    console.log("Event:Walter starts speaking");

}

function jessPunch () {
    console.log("Event:Jess punch Walter");

}
