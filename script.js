// Modification du DOM --> Cacher une div

// $ --> JQuery() permet de transformer l'élément en objet JQuery

// La méthode hide() transforme le style ciblé par l'id en display none

$(document).ready(function(){ // Chargement du HTML PUIS exécution du script
    $('#text').hide();
});


// En JS vanilla, on aurait :
// document.getElementById("texte").style.display="none";