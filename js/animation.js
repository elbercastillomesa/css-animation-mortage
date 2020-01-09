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
    console.log(value);
}   
