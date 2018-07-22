var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
var today = new Date
var currentdate = (days[today.getDay()] + ", " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear())
document.getElementById('currentdate').innerHTML = currentdate;
