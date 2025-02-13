var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var text = document.getElementsByTagName("h3")[0];
var body = document.getElementById("gradient");


function colorpicker() {
	body.style.background = "linear-gradient(to right ,"
	+color1.value 
	+","
	+color2.value
	+")";

	text.textContent =body.style.background +";"
}


color1.addEventListener("input" ,colorpicker);
color2.addEventListener("input" ,colorpicker);