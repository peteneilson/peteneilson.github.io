var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?id=4156210&appid=5359900cf21408bfa638361ae6c91c70&units=imperial',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('hiTemp').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('loTemp').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;


    var iconcode = weatherInfo.weather["0"].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;







}// end of the function
