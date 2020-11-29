function convert(Dj){
    if (new URLSearchParams(window.location.search).get("Dj") == 1) {
        return "Oui"
    } else {
        return "Non"
    }
}
function retour(){
    if (new URLSearchParams(window.location.search).get("Destination") == "La Clusaz") {
        return "../HTML/RéservationLaCluz.html"
    }
    if (new URLSearchParams(window.location.search).get("Destination") == "St Tropez") {
        return "../HTML/RéservationStTrop.html"
    }
}
function info(){
    let recap = [{
    Destination : new URLSearchParams(window.location.search).get("Destination"),
    Nom: new URLSearchParams(window.location.search).get("Nom"),
    Prenom: new URLSearchParams(window.location.search).get("Prenom"),
    Mail: new URLSearchParams(window.location.search).get("Mail"),
    Tel: new URLSearchParams(window.location.search).get("Tel"),
    date_depart: new URLSearchParams(window.location.search).get("Date_de_depart"),
    date_retour: new URLSearchParams(window.location.search).get("Date_de_retour"),
    nombre_adultes: new URLSearchParams(window.location.search).get("Nombre_adultes"),
    nombre_enfants: new URLSearchParams(window.location.search).get("Nombre_enfants"),
    Dj: convert()}];
    
    

    let template = document.querySelector("#Recap");
    let Tab = document.querySelector("#Tab");

    for (const d of recap){
        let clone = document.importNode(template.content, true); 

        newContent = clone.firstElementChild.innerHTML
            .replace(/{{Destination}}/g, d.Destination)
            .replace(/{{Nom}}/g, d.Nom)
            .replace(/{{Prenom}}/g, d.Prenom)
            .replace(/{{Mail}}/g, d.Mail)
            .replace(/{{Tel}}/g, d.Tel)
            .replace(/{{date_depart}}/g, d.date_depart)
            .replace(/{{date_retour}}/g, d.date_retour)
            .replace(/{{nombre_adultes}}/g, d.nombre_adultes)
            .replace(/{{nombre_enfants}}/g, d.nombre_enfants)
            .replace(/{{Dj}}/g, d.Dj);
        clone.firstElementChild.innerHTML = newContent
        Tab.appendChild(clone);
    }
}
