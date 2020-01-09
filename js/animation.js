document.getElementById('more').addEventListener("click", function(event){
	document.getElementById('range').value += 1;
	sliderOutput("output", document.getElementById('range').value);
});

document.getElementById('less').addEventListener("click", function(event){
	document.getElementById('range').value -= 1;
	sliderOutput("output", document.getElementById('range').value);
});

function sliderOutput(variable, value){
    var s = document.getElementById(variable);
    s.value = value;
    
    if (s.value > 20) { 
    	console.log('green');
    	setColor(document.body,'green');
    }
}   

function setColor(element, color)
{
    element.style.background = color;
}
