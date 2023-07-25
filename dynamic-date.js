document.write("")
var mydate=new Date()
var year=mydate.getYear()
if (year<2000)
year += (year < 1900) ? 1900 : 0
var day=mydate.getDay()
var month=mydate.getMonth()
var daym=mydate.getDate()
if (daym<10)
daym="0"+daym
var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
document.write("&nbsp;"+dayarray[day]+", "+montharray[month]+" "+daym+", "+year+"&nbsp;")
document.write("")
