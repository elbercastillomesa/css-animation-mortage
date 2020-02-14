document.getElementById('more').addEventListener("click", function(event){
	document.getElementById('range-thumb').value++;
	sliderOutput("div-tag", document.getElementById('range-thumb').value);
	rangeThumb();
});

document.getElementById('less').addEventListener("click", function(event){
	document.getElementById('range-thumb').value--;
	sliderOutput("div-tag", document.getElementById('range-thumb').value);
	rangeThumb();
});

document.getElementById('range-thumb').addEventListener("change", function(event){
	sliderOutput("div-tag", document.getElementById('range-thumb').value);
	rangeThumb();
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

console.log(value);

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

function rangeThumb(){

	var rangeThumb = document.querySelector('#range-thumb');
	  var w = parseInt(window.getComputedStyle(rangeThumb, null).getPropertyValue('width'));
	  var divTag = document.querySelector('.div-tag');
	  if (divTag) {
	    divTag.innerHTML = rangeThumb.value;
	    var pxls = w / 150;
	    divTag.style.left = ((rangeThumb.value * pxls) + 315) + 'px';

	    rangeThumb.addEventListener('input', function() {
	      divTag.innerHTML = rangeThumb.value;
	      divTag.style.left = ((rangeThumb.value * pxls) + 315) + 'px';
	    }, false);
	  }
}

rangeThumb();
