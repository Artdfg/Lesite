var Nom = Text;
var Prénom= Text;
var Mail = Text;
var Tel = Int8Array;
var date_départ = Int8Array;
var date_retour = Int8Array;
var nombre_adultes = Int8Array;
var nombre_enfants = Int8Array;
var Dj = Boolean;




function getinfo(){
    Nom = document.getElementById("Nom").value;
    Prénom = document.getElementById("Prénom").value;
    Mail = document.getElementById("Mail").value;
    Tel = document.getElementById("Tel").value;
    date_départ = document.getElementById("date_départ").value;
    date_retour = document.getElementById("date_retour").value;
    nombre_adultes = document.getElementById("nombre_adultes").value;
    nombre_enfants = document.getElementById("nombre_enfants").value;
    Dj = document.forms["form"]["Dj"].value;
    console.log (Dj);
    T=[Nom,Prénom,Mail,Tel,date_départ,date_retour,nombre_adultes,nombre_enfants,Dj];
    return T; 
}





