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

	setColor(document.getElementById('stage-3'), value);
	setMortage();
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


// Mortage Calc //

function setMortage(){

	interest = parseFloat(document.getElementById('percent-final').value.slice(0, -1));
	houseValue = parseFloat(Number(document.getElementById('answer-final').value.replace(/[^0-9\.-]+/g,"")));
	years = parseFloat(document.getElementById('range-thumb').value);

	mortageValue = (houseValue *  Math.pow(1 + (interest/100), years) );

	document.getElementById('calc-result').value = toLocaleStringSupportsOptions(mortageValue);
}

function toLocaleStringSupportsOptions(value) {

	if( !!(typeof Intl == 'object' && Intl && typeof Intl.NumberFormat == 'function') ){

		return 	value.toLocaleString('en-US', {
				 minimumFractionDigits: 1,
				 maximumFractionDigits: 1,
				 style: 'currency',
				 currency: 'USD' ,
			 }).slice(0,-2);

	} else {
		return '$' + value.toLocaleString().slice(0, -2);
	}
}

function rangeThumb(){

	var rangeThumb = document.querySelector('#range-thumb');
  var w = parseInt(window.getComputedStyle(rangeThumb, null).getPropertyValue('width'));
  var divTag = document.querySelector('.div-tag');

	  if (divTag) {
	    divTag.innerHTML = rangeThumb.value;
	    var pxls = w / 54;
	    divTag.style.left = ((rangeThumb.value * pxls) + 230) + 'px';

	    rangeThumb.addEventListener('input', function() {
	      divTag.innerHTML = rangeThumb.value;
	      divTag.style.left = ((rangeThumb.value * pxls) + 230) + 'px';
	    }, false);
	  }
}

rangeThumb();
setMortage();
