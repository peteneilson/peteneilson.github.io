let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET','//api.openweathermap.org/data/2.5/weather?id=4156210&appid=5359900cf21408bfa638361ae6c91c70&units=imperial',true);

weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);


    document.getElementById('current-temp').innerHTML = weatherData.main.temp;








}// end of the function
