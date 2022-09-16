//creating a random number..
var randomNumber1=Math.random();
randomNumber1=6*randomNumber1;
randomNumber1=Math.ceil(randomNumber1);

//creating a random number..
var randomNumber2=Math.random();
randomNumber2=6*randomNumber2;
randomNumber2=Math.ceil(randomNumber2);

//assigning that number to image using JS
var image1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",image1);

var image2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",image2);


//declaring the winner
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="&#128681 Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins &#128681";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
