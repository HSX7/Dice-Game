// first dice

var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomImage =  "images/dice" +randomNumber1+ ".png";
var selectImg = document.querySelectorAll("img")[1];
selectImg.setAttribute("src", randomImage);

// second dice

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomImages2 = "images/dice" +randomNumber2+ ".png";
var selectRandomImage = document.querySelectorAll("img")[2];
selectRandomImage.setAttribute("src", randomImages2);

// if conditions

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 won";
}else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 won";
}else {
  document.querySelector("h1").innerHTML = "Draw";
}
