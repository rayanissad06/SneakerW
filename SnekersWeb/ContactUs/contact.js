
function showMessage(event) {
    event.preventDefault(); 
    
    // Créer la popup
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = 'Votre message a été envoyé avec succès!';

   
    var overlay = document.createElement('div');
    overlay.className = 'overlay';

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    overlay.addEventListener('click', function() {
        popup.remove();
        overlay.remove();
    });
    popup.addEventListener('click', function(event) {
        event.stopPropagation(); 
    });
}