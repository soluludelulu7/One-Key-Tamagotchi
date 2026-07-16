var hunger = 100;
var pet = document.getElementById('pet');
var petHunger = document.getElementById('hunger');
const sadSound = document.getElementById('sad');
const happySound = document.getElementById('happy');

function emoji() {
    if (hunger == 100) {
        return "🥳";
    }
    else if (hunger == 90) {
        return "🤩";
    }
    else if (hunger == 80) {
        return "😍";
    }
    else if (hunger == 70) {
        return "😀";
    }
    else if (hunger == 60) {
        return "😊";
    }
    else if (hunger == 50) {
        return "🙂";
    }
    else if (hunger == 40) {
        return "😐";
    }
    else if (hunger == 30) {
        return "😕";
    }
    else if (hunger == 20) {
        return "😢";
    }
    else if (hunger == 10) {
        return "😭";
    }
    else {
        return "💀";
    }
}
setInterval(function () {
    if (hunger > 0) {
        hunger = hunger - 10;
        petHunger.textContent = hunger;
        pet.textContent = emoji();
        sadSound.play();
    }
}, 6000)

window.onkeydown = function (event) {
    if (hunger > 0) {
        if (hunger < 100) {
            hunger = hunger + 10;
            petHunger.textContent = hunger;
            pet.textContent = emoji();
            happySound.play();
        }
    }
}
