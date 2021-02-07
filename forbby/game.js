const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump(){
    if (dino.classList != "jump"){  //add if so it only jump when no jump function
        dino.classList.add("jump"); //create jump function

        setTimeout(function(){
            dino.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function(){
    //get current dino Y position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    //get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft<100 && cactusLeft>0 && dinoTop>=362){
        alert("Game over!");
    }

},10)


document.addEventListener("keyup", function(event){
    jump()
}) // add keydown event for jump function