function update() {
var selectedDate = new Date(document.getElementById("year").value, document.getElementById("month").value, document.getElementById("date").value).getTime();
if (new Date(1915, 09, 10).getTime() <= selectedDate && selectedDate <= new Date(1937, 04, 16).getTime()) {
 document.getElementById("viewer").innerHTML='<iframe src="https://archive.org/stream/ucladailybruin01losa?ui=zoom#page/n03/mode/1up" width="100%" height="100%" frameborder="0"></iframe>'
} else {
 alert('There doesn\'t appear to be an issue of the Daily Bruin for the date you\'ve selected.')
}
}
