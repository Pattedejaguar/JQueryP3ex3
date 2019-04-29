$(document).ready(function (){
  var number = 0;
  // variable du random
  var random = Math.floor(Math.random() * 101);
  // pour afficher la variable random dans la console
    console.log(random);
    $('#test').click(function() {
      // on incrémente à chaque click sur le bouton pour avoir le nombre d'essai
      number++;
      // les conditions, plus petit,plus grand:
    if ($('#value').val()< random)
    {
       alert ('c\'est plus!');
    }
       else if ($('#value').val()> random)
    {
      alert ('c\'est moins!');
    }
    else {
      // le + number + dans l'alerte finale pour afficher le nombre d'essai
      alert ('bravo Gui! en ' + number + ' essais');

    }
  });
});
