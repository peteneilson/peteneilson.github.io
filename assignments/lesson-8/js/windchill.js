
    var highTemp = (parseFloat(document.getElementById('high').innerHTML));
    var lowTemp = (parseFloat(document.getElementById('low').innerHTML));
    var speed = (parseFloat(document.getElementById('wind').innerHTML));
    var tempF = (highTemp + lowTemp) / 2; //calculate average

    //Calculate the wind chill factor as a temperature in Fahrenheit
    var retval = 0;
    retval = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));

    //Output the value returned by windChill to the div for the user to see
    document.getElementById("windchill").innerHTML = retval;

