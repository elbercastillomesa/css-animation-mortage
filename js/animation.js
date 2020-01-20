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
    
    if (s.value > 20) { 
    	setColor(document.body	,'green');
    }
}   

function setColor(element, color)
{
    element.style.background = "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80')";
}
