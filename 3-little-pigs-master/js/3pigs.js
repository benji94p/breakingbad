let piggy1 = document.querySelector("#pig1");
let piggy2 = document.querySelector("#pig2");
let piggy3 = document.querySelector("#pig3");
let wolf = document.querySelector("#wolf");
let scary = document.querySelector("audio#scary");


function ready(){
    console.log("Event: ready");
    console.log("Step: start sound once....");
    let audioOnce = document.querySelector("audio#once");
    audioOnce.play();
    console.log("Step: animation wiggle pigs");
    piggy1.classList.add("wiggle");
    piggy2.classList.add("wiggle");
    piggy3.classList.add("wiggle");

    audioOnce.addEventListener('ended', onceSoundDone)
    //onceSoundDone();
}

function onceSoundDone(){
    console.log("Event: onceSoundDone");
    console.log("Step: stop wiggle");
    piggy1.classList.remove("wiggle");
    piggy2.classList.remove("wiggle");
    piggy3.classList.remove("wiggle");

    console.log("Step: wolf enters");
    wolf.classList.add("wolfEnters");
    console.log("Step: Scream");

    console.log("Step: scary music");
    //scary.play();
    scary.volume=0.1;
    wolf.addEventListener('animationend', wolfHasEntered)
}

function wolfHasEntered(){
    console.log("Event: wolfHasEntered");
    console.log("Step: pigs run");
}


ready();
