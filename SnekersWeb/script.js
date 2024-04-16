
var accShoes = document.getElementById("accShoes");


var scaleFactor = 1.2; 
var animationDuration = 1000; 


function animateAccShoes() {
  
    accShoes.style.transform = "scale(" + scaleFactor + ")";

   
    setTimeout(function() {
        accShoes.style.transform = "scale(1)";
    }, animationDuration);
}


animateAccShoes();


setInterval(animateAccShoes, animationDuration * 2); 
