
        
function show_value(x) {
				document.getElementById("sld").innerHTML=x + "%";
				}
				
var dt= new Date();
var da=dt.getFullYear();

function compute() {

  r = document.getElementById("years").value; 

 p = document.getElementById("principal").value;
  n = document.getElementById("rate").value;
result = document.getElementById("result").innerHTML="You will recieve an amount of " + "<span class='high'>" + (p*n*r/100) + "</span>";
  var c =document.getElementById("gs").innerHTML= "If you deposit" + "<span class='high'>" + p + "</span>";
  var g = document.getElementById("prat").innerHTML= " At an interest rate of" + "<span class='high'>" + n + "</span>";
  var h= document.getElementById("ty").innerHTML = "in the year " +  "<span class='high'>" + da + "+" + years.value + "</span>";
   
 }
