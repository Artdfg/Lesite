sessionStorage.clear('sPrix');
var pr = document.getElementById("pr");
var gPrix = Int8Array;
var gnombre_adultes = Int8Array;
var gdate_depart = Int8Array;
var gdate_retour = Int8Array;

function prix(){
    var Destination = document.getElementById("Destination").value;
    var Nom = document.getElementById("Nom").value;
    var Prenom = document.getElementById("Prenom").value;
    var Mail = document.getElementById("Mail").value;
    var Tel = document.getElementById("Tel").value;
    var date_depart = document.getElementById("date_depart");
    var date_retour = document.getElementById("date_retour");
    var nombre_adultes = document.getElementById("Nombre_adultes").value;
    var nombre_enfants = document.getElementById("Nombre_enfants").value;
    var Dj = document.getElementById("Dj");
    var Prix = Int8Array;

    if (Dj.checked == true) {vDj = 1}
    else {vDj = 0}
    if (Destination == "La Clusaz"){
        if (!isNaN(date_retour.valueAsNumber) && !isNaN(date_depart.valueAsNumber)) {
            Prix = (100*nombre_adultes+40*nombre_enfants+12*(nombre_adultes)*vDj+12*(nombre_enfants)*vDj)*(date_retour.valueAsNumber-date_depart.valueAsNumber)/86400000
        }
        else {Prix = 0}
    }
    
    if (Destination == "St Tropez"){
        if (!isNaN(date_retour.valueAsNumber) && !isNaN(date_depart.valueAsNumber)) {
            Prix = (120*nombre_adultes+48*nombre_enfants+12*(nombre_adultes)*vDj+12*(nombre_enfants)*vDj)*(date_retour.valueAsNumber-date_depart.valueAsNumber)/86400000
        }
        else {Prix = 0}
    }
    gPrix = Prix;
    gnombre_adultes = nombre_adultes;
    gdate_depart = date_depart.valueAsNumber;
    gdate_retour = date_retour.valueAsNumber;
    sessionStorage.setItem('sPrix', Prix);
    pr.innerHTML = Prix + " €";
}
function validateForm(){
    if (gdate_retour > gdate_depart){
        if(gnombre_adultes>=1){
            sessionStorage.setItem('sPrix', gPrix);
            document.forms["form"].submit();
        }
        else {alert("Impossible d'avoir 0 adultes")}
    }
    else {alert("Date incohérente.")}

}






