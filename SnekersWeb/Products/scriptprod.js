$(document).ready(function(){
    $(".card").hover(function(){
        $(this).find("img").css('transition', 'transform 1s ease'); // Applique la transition uniquement à l'image
        $(this).find("img").toggleClass('rotate'); // Ajoute ou retire la classe pour la rotation de l'image
    });
});