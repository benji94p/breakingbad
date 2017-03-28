let jessie = document.querySelector("#jessie");
let walter = document.querySelector("#walter");
let rv = document.querySelector("#rv");
let dollars = document.querySelector(".dollars");
let punch = document.querySelector("audio#punch");
let startButton = document.querySelector ("#start-btn");

dollars.style.display = "none";
document.getElementById("cloud1").style.display = "none";
document.getElementById("cloud2").style.display = "none";
document.getElementById("cloud3").style.display = "none";


    console.log("Event: Press Start");
    startButton.addEventListener("click", moveJess)

function moveJess () {
    console.log("Event: Start pressed");
    setTimeout(jessTalks, 3000);
    setTimeout(walterTalks, 6000);
    setTimeout(jessPunch, 7000);
    jessie.classList.add("jessEnters");
}

function jessTalks () {
    console.log("Event:Jess starts speaking");
    let cloud1 = document.querySelector ("#cloud1");
    cloud1.classList.add("bubbleanimation");
    document.getElementById("cloud1").style.display = "";



}

function walterTalks () {
    console.log("Event:Walter starts speaking");
    let cloud2 = document.querySelector ("#cloud2");
    cloud2.classList.add ("bubbleanimation");
    document.getElementById("cloud2").style.display = "";

}

function jessPunch () {
    console.log("Event:Jess punch Walter");
}
