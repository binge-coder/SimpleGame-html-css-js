myCharacter = document.getElementById("character");
myBlock = document.getElementById("block");

function jumpOnClick() {
    myCharacter.classList.add("jumpAnimate");
    setTimeout(()=>{
        myCharacter.classList.remove("jumpAnimate");
    },500)
    
}

setInterval(() => {
    characterTop = parseInt(window.getComputedStyle(myCharacter).getPropertyValue("top"));
    blockLeft = parseInt(window.getComputedStyle(myBlock).getPropertyValue("left"));
    if(blockLeft <= 0 && characterTop >= 380){
        // then game over
        myBlock.style.animation = "none";
        alert("game over. You lose");
    }
}, 10);

// setInterval(() => {
//     // [0,1,2,3,4,5,6] list of random numbers
//     // will write logic for choosing random numbers later
//     let rando = 3 // chosen random number
//     myBlock.style.animationDelay = rando + 's';
// }, 1000)