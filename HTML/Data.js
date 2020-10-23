var T;
function info(){
    let Nom = new URLSearchParams(window.location.search).get("Nom");
    let Prenom = new URLSearchParams(window.location.search).get("Prenom");
    let Mail = new URLSearchParams(window.location.search).get("Mail");
    let Tel = new URLSearchParams(window.location.search).get("Tel");
    let date_depart = new URLSearchParams(window.location.search).get("Date_de_depart");
    let date_retour = new URLSearchParams(window.location.search).get("Date_de_retour");
    let nombre_adultes = new URLSearchParams(window.location.search).get("Nombre_adultes");
    let nombre_enfants = new URLSearchParams(window.location.search).get("Nombre_enfants");
    let Dj = new URLSearchParams(window.location.search).get("Dj");
    console.log(Nom);
    console.log(Prenom);
    console.log(Mail);
    console.log(Tel);
    console.log(date_depart);
    console.log(date_retour);
    console.log(nombre_adultes);
    console.log(nombre_enfants);
    console.log(Dj);
    }