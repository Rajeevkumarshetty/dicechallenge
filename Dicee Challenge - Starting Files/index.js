var randomno= Math.floor(Math.random()*6)+1;
var randomdiceimage= "images/dice" + randomno +".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimage);


