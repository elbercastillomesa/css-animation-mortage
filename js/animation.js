document.getElementById('more').addEventListener("click", function(event){
	document.getElementById('range').value++;
	sliderOutput("output", document.getElementById('range').value);
});

document.getElementById('less').addEventListener("click", function(event){
	document.getElementById('range').value--;
	sliderOutput("output", document.getElementById('range').value);
});

document.getElementById('range').addEventListener("change", function(event){
	sliderOutput("output", document.getElementById('range').value);
});


function sliderOutput(variable, value){
  var s = document.getElementById(variable);
	s.value = value;
	if(s.value > 1){
		console.log('year');
	}
	setColor(document.body, s.value);
}

function setColor(element, value){

	if (value < 20){element.style.background = "#FFFFFF";}

	if (value > 19 && value < 40){element.style.background = "#AA99ff";}

	if (value > 39 && value < 50){element.style.background = "#EE00AA";}

	if (value > 49){element.style.background = "#2299EE";}
}
