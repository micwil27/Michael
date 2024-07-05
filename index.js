var numberOfDrums = document.querySelectorAll(".drum").length;

let tom1 = new Audio("./sounds/tom-1.mp3");
let tom2 = new Audio("./sounds/tom-2.mp3");
let tom3 = new Audio("./sounds/tom-3.mp3");
let tom4 = new Audio("./sounds/tom-4.mp3");
let snare = new Audio("./sounds/snare.mp3");
let crash = new Audio("./sounds/crash.mp3");
let kickBass = new Audio("./sounds/kick-bass.mp3");

function makeSound(key) {
    switch(key) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            snare.play();
            break;
        case "k":
            crash.play();
            break;
        case "l":
            kickBass.play();
            break;
    }
}

for(let i=0; i<numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        console.log(buttonInnerHtml);
        makeSound(buttonInnerHtml);
    });
}

addEventListener("keydown", function(event) {
    makeSound(event.key);
})