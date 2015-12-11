function update() {
var selectedDate = new Date(document.getElementById("year").value, document.getElementById("month").value, document.getElementById("date").value).getTime();
if (new Date(2002, 10, 11).getTime() <= selectedDate) {
 alert('The Daily Bruin\'s archives end on October 10, 2002.')
} else if (new Date(2002, 10, 10).getTime() <= selectedDate) {
 var volume = '198'
 var page = '414'
} else if (new Date(1954, 10, 25).getTime() <= selectedDate) {
 var volume = '32'
 var page = '312'
} else if (new Date(1937, 04, 16).getTime() <= selectedDate) {
 var volume = '16'
 var page = '230'
} else if (new Date(1936, 03, 10).getTime() <= selectedDate) {
 var volume = '15'
 var page = '03'
} else if (new Date(1935, 04, 29).getTime() <= selectedDate) {
 var volume = '14'
 var page = '03'
} else if (new Date(1934, 05, 14).getTime() <= selectedDate) {
 var volume = '13'
 var page = '04'
} else if (new Date(1933, 08, 04).getTime() <= selectedDate) {
 var volume = '12'
 var page = '04'
} else if (new Date(1932, 10, 03).getTime() <= selectedDate) {
 var volume = '11'
 var page = '04'
} else if (new Date(1931, 09, 17).getTime() <= selectedDate) {
 var volume = '10'
 var page = '04'
} else if (new Date(1930, 10, 30).getTime() <= selectedDate) {
 var volume = '09'
 var page = '03'
} else if (new Date(1929, 11, 25).getTime() <= selectedDate) {
 var volume = '08'
 var page = '04'
} else if (new Date(1929, 02, 11).getTime() <= selectedDate) {
 var volume = '07'
 var page = '04'
} else if (new Date(1928, 01, 12).getTime() <= selectedDate) {
 var volume = '06'
 var page = '04'
} else if (new Date(1927, 02, 17).getTime() <= selectedDate) {
 var volume = '05'
 var page = '03'
} else if (new Date(1926, 02, 11).getTime() <= selectedDate) {
 var volume = '04'
 var page = '03'
} else if (new Date(1924, 03, 25).getTime() <= selectedDate) {
 var volume = '03'
 var page = '04'
} else if (new Date(1921, 02, 18).getTime() <= selectedDate) {
 var volume = '02'
 var page = '04'
} else if (new Date(1915, 09, 10).getTime() <= selectedDate) {
 var volume = '01'
 var page = '03'
} else if (selectedDate <= new Date(1915, 09, 09).getTime()) {
 alert('The Daily Bruin\'s archives begin on September 10, 1915.')
}
if (new Date(1915, 09, 10).getTime() <= selectedDate && selectedDate <= new Date(2002, 10, 10).getTime()) {
document.getElementById("viewer").innerHTML='<iframe src="https://archive.org/stream/ucladailybruin' + volume + 'losa?ui=zoom#page/n' + page + '/mode/1up" width="100%" height="100%" frameborder="0"></iframe>'
}
}
