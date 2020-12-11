const NC = ["Test"]
const MDP = ["Test"]
function Connect(){
    var a = document.getElementById("id").value; 
    var b = document.getElementById("mdp").value;

    if (NC.find(element => a)){
        p = NC.indexOf(a);
        if (b == MDP[p]){
            alert("Vous êtes connecté !");
            self.location.href='../HTML/Accueil.html';
        }
        else{alert("Nom de compte ou mot de passe incorects")}
    }
}
function newConnect(){
    var a = document.getElementById("id2").value; 
    var b = document.getElementById("mdp2").value;
    NC.push(a);
    MDP.push(b);
    console.log(NC);
    console.log(MDP);
}