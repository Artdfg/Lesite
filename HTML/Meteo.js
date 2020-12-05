var temp = document.querySelector('.temp');
fetch("https://api.openweathermap.org/data/2.5/weather?q=La Clusaz,fr&appid=b163f77b29388e9db7ac194754552af3")
.then(data => {
    var tempValue = data['main']['temp'];
    temp.innerHTML = tempValue;
})