// PLAYER 1.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageSrc1 = "images/dice" +randomNumber1 + ".png";
var img1 = document.querySelectorAll('img')[0];
img1.setAttribute("src", imageSrc1);

// PLAYER 2.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSrc2 = "images/dice" +randomNumber2 + ".png";
var img2 = document.querySelectorAll('img')[1];
img2.setAttribute("src", imageSrc2);

// WHO WINS?
if (randomNumber1 > randomNumber2) {            //PLAYER 1 WINS
document.querySelector("h1").textContent = "PLAYER 1 WINS"
} else if (randomNumber2 > randomNumber1) {     //PLAYER 2 WINS
document.querySelector("h1").textContent = "PLAYER 2 WINS"
} else {                                        //DRAW
  document.querySelector("h1").textContent = "DRAW"
}
