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
	s.value = value + ' Years';
	if(value < 2){
		s.value = value + ' Year';
	}

	setColor(document.getElementById('stage-2'), value);
}

function setColor(element, value){

	if (value < 20){
		element.style.backgroundImage = "url(./images/stage_1/bg_1-min.png)";
	} else if (value > 19 && value < 40){
		element.style.backgroundImage = "url(./images/stage_2/bg_2-min.png)";
	} else if (value > 39){
		element.style.backgroundImage = "url('./images/stage_3/bg_3-min.png')";
	} else {
		element.style.backgroundImage = "url(./images/stage_1/bg_1-min.png)";
	}
}
