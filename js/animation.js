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

	document.getElementById('future').style.display = 'none';

	if (value < 20){
		element.style.backgroundImage = "url(./images/stage_1/bg_1-min.png)";
	} else if (value > 19 && value < 40){
		element.style.backgroundImage = "url(./images/stage_2/bg_2-min.png)";
	} else if (value > 39){
		element.style.backgroundImage = "url('./images/stage_3/bg_3-min.png')";
		document.getElementById('future').style.display = 'grid';
	} else {
		element.style.backgroundImage = "url(./images/stage_1/bg_1-min.png)";
	}
}


// EL INPUT
var elInput3 = document.querySelector('#input3');
if (elInput3) {
  var w = parseInt(window.getComputedStyle(elInput3, null).getPropertyValue('width'));

  // LA ETIQUETA
  var etq = document.querySelector('.etiqueta');
  if (etq) {
    // el valor de la etiqueta (el tooltip)
    etq.innerHTML = elInput3.value;

    // calcula la posición inicial de la etiqueta (el tooltip);
    var pxls = w / 100;

    etq.style.left = ((elInput3.value * pxls) - 15) + 'px';

    elInput3.addEventListener('input', function() {
      // cambia el valor de la etiqueta (el tooltip)
      etq.innerHTML = elInput3.value;
      // cambia la posición de la etiqueta (el tooltip)
      etq.style.left = ((elInput3.value * pxls) - 15) + 'px';

    }, false);
  }
}
