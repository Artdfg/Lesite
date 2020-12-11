/*function meteoLC(){
    var temp = document.querySelector('.temp');
    fetch("https://api.openweathermap.org/data/2.5/weather?q=La Clusaz,fr&appid=b163f77b29388e9db7ac194754552af3")
    .then(response => {
        response.json().then(function(data) {
            console.log("Recpetion méteo",data)
            var tempValue = data['main']['temp'];
            temp = (tempValue-273).toFixed(1);})
    })
    return temp
}
function meteoST(){
    var temp = document.querySelector('.temp');
    fetch("https://api.openweathermap.org/data/2.5/weather?q=La Clusaz,fr&appid=b163f77b29388e9db7ac194754552af3")
    .then(response => {
        response.json().then(function(data) {
            console.log("Recpetion méteo",data)
            var tempValue = data['main']['temp'];
            temp.innerHTML = (tempValue-273).toFixed(1);})
    })
    
}
function meteoRO(){
    var temp = document.querySelector('.temp');
    fetch("https://api.openweathermap.org/data/2.5/weather?q=La Clusaz,fr&appid=b163f77b29388e9db7ac194754552af3")
    .then(response => {
        response.json().then(function(data) {
            console.log("Recpetion méteo",data)
            var tempValue = data['main']['temp'];
            temp.innerHTML = (tempValue-273).toFixed(1);})
    })
}
*/
