function meteo(id){
    var temp = 'x'
    console.log('https://api.openweathermap.org/data/2.5/weather?q='+ id +'&appid=b163f77b29388e9db7ac194754552af3');
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ id +'&appid=b163f77b29388e9db7ac194754552af3')
    .then(response => {
        response.json().then(function(data) {
            console.log("Recpetion méteo",data)
            var tempValue = data['main']['temp'];
            temp = (tempValue-273).toFixed(1); 
        })
    })
    return temp + '°C'
}
function drawmeteo(d){
    var temp1 = meteoLC.temp;
    document.getElementById('temp').innerHTML = temp1 + '°C'

}
let destinations = [
    {id :"1", meteo:"La Clusaz,fr",nom: "La Clusaz", pays: "france", prix: "100€", image:"../images/IM1.jpg",lien: "RéservationLaCluz",description: "Station authentique et très actuelle, La Clusaz vous séduira par ses multiples facettes : sérénité et dynamisme, dépaysement et facilité d'accès, traditions séculaires et modernité.           À deux pas d'Annecy, la station de la Clusaz cultive l'excellence en entrant dans le très sélect 'Top of the French Alps', qui garantit des prestations de qualité aux clientèles internationales les plus exigeantes. A la Clusaz, vous découvrez la chaleur de l'accueil haut-savoyard grâce à des professionnels passionnés, amoureux de leur région et attentifs à leurs hôtes.      La tête au soleil, le corps immergé dans une eau à 29°C avec vue sur les pistes : que ce grand bain fait du bien ! Et demain, pourquoi ne pas profiter de l'air montagnard lors d'une balade en chiens de traîneau ou une randonnée en raquettes ? Ou se laisser cocooner avec un massage aux pierres chaudes après un baptême de parapente ? Tous les choix sont à la Clusaz, avec un seul mot d'ordre : le plaisir. Station internationale et dynamique, été comme hiver, La Clusaz se love dans ses paysages alpins et vous propose un voyage exceptionnel dans son cadre préservé. Des amoureux de la nature aux mordus de la montagne, des sportifs aux adeptes du bien vivre, tous y trouveront leur bonheur à seulement 30 min d’Annecy et 50 min de l’aéroport international de Genève…"},
    {id :"2", meteo: "Sainte-Maxime,fr",nom: "Saint Tropez", pays: "france", prix: "120€", image:"../images/IM2.jpg",lien: "RéservationStTrop" ,description: "Le village mythique de Saint-Tropez, rendu célèbre par l'actrice Brigitte Bardot, attire les célébrités et les visiteurs du monde entier. Tranquille et authentique de l'automne au printemps, cet ancien village de pêcheurs se transforme, en été, en une station balnéaire branchée et réputée, avec son port animé où viennent s'amarrer voiliers et yachts luxueux, ses terrasses de cafés, ses boutiques de créateurs ou encore ses boîtes de nuits. Ambiance festive et estivale garantie ! Le port pittoresque, bordé de maisons aux façades colorées, le quartier typique de la Ponche ou encore la place des Lices, tant prisée des boulistes, participent au charme du village." },
    {id :"1", meteo: "Rome,it", nom: "Rome", pays: "italie", prix: "70€", image:"../images/R1.jpg",lien:"RéservationRome",description: "Capitale de l'Italie, Rome est une grande ville cosmopolite dont l'art, l'architecture et la culture de presque 3 000 ans rayonnent dans le monde entier. Ses ruines telles que celles du Forum Romain et du Colisée évoquent la puissance de l'ancien Empire romain. Siège de l'Église catholique romaine, la Cité du Vatican compte la basilique Saint-Pierre et les musées du Vatican où se trouvent des chefs-d'œuvre tels que la fresque de la chapelle Sixtine, peinte par Michel-Ange. "}
];

function Onload(){
    let template = document.querySelector("#Destinations");
    let Tab = document.querySelector("#Tab");

    for (const d of destinations){
        let clone = document.importNode(template.content, true); 
        console.log(clone);

        newContent = clone.firstElementChild.innerHTML
            .replace(/{{meteo}}/g, d.meteo)
            .replace(/{{id}}/g, d.id)
            .replace(/{{nom}}/g, d.nom)
            .replace(/{{pays}}/g, d.pays)
            .replace(/{{image}}/g, d.image)
            .replace(/{{description}}/g, d.description)
            .replace(/{{prix}}/g, d.prix)
            .replace(/{{lien}}/g, d.lien)
            .replace(/{{temp}}/g, meteo(d.meteo));
        clone.firstElementChild.innerHTML = newContent
        console.log(newContent);
        Tab.appendChild(clone);
    }
}