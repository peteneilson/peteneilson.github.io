var dayOfWeek = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfMonth = new Date();
var month = new Date();
var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var year = new Date();

document.getElementById("jsdate").innerHTML = days[dayOfWeek.getDay()] + "," + " " + dayOfMonth.getDate() + " " + m[month.getMonth()] + " " + year.getFullYear();
