var Nom = Text;
var Prenom= Text;
var Mail = Text;
var Tel = Int8Array;
var date_depart = Int8Array;
var date_retour = Int8Array;
var nombre_adultes = Int8Array;
var nombre_enfants = Int8Array;
var Dj = Boolean;




function getinfo(){
    Nom = document.getElementById("Nom").value;
    Prenom = document.getElementById("Prenom").value;
    Mail = document.getElementById("Mail").value;
    Tel = document.getElementById("Tel").value;
    date_depart = document.getElementById("date_depart").value;
    date_retour = document.getElementById("date_retour").value;
    nombre_adultes = document.getElementById("nombre_adultes").value;
    nombre_enfants = document.getElementById("nombre_enfants").value;
    Dj = document.forms["form"]["Dj"].value;
    console.log (date_retour);
    T=[Nom,Prenom,Mail,Tel,date_depart,date_retour,nombre_adultes,nombre_enfants,Dj];
    return T; 
}





