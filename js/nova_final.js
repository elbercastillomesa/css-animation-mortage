$ = jQuery;

$('document').ready(() => {
	$(".infoText").removeAttr("style");
	$(".landing").removeAttr("style");
	$(".homeCost").removeAttr("style");
});

$('.landing-getStarted').click(() => {
	$('.landing-getStarted').fadeOut(500, ()=>{
		$('.landing').hide();
	});
	setTimeout(() => {
		$('.homeCost').css('display', 'block');
		$('.homeCost-container').css('top', '-20px');
	}, 501);
});

$('.homeCost-next').click(() => {
	$('.homeCost-container').css({
		'transition-delay': '0s',
		'top': '-160px'
	});
	$('.appreciation-container').css('top', '-20px');
});

$('.appreciation-next').click(() => {
	$('.appreciation-container').css({
		'transition-delay': '0s',
		'top': '-160px'
	});
	$('.homeCost').css('background-color', "#00AEEF");
	$('.homeCost').css('background-image', "url('/wp-content/uploads/2020/02/stage1.jpg')");
	$('#mortage-valueOutput').val(	$('#homeCost-input').val());
	$('#mortage-rateOutput').val(	$('#appreciation-input').val());
	setTimeout(() => {
		$('.mortage-container').show(1000);
	}, 1000);
});

// Not mine

let modal = document.getElementById("modal-calc"),
  textInput = document.getElementById("homeCost-input"),
  close = document.getElementById("close"),
  calcInput = document.getElementById("answer-final"),
  backScreen = document.getElementById("container-screen");

// When the user clicks on the button, open the modal
textInput.onclick = function() {
  modal.style.display = "block";
  backScreen.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
  backScreen.style.display = "grid";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    backScreen.style.display = "grid";
  }
}


// Modal-2 //

let modalTwo = document.getElementById("myModal-2"),
  textInputTwo = document.getElementById("textInput-2"),
  closeTwo = document.getElementById("close-2"),
  percentInput = document.getElementById("percent-final"),
  percentScreen = document.getElementById("percent-screen");

// When the user clicks on the button, open the modal
textInputTwo.onclick = function() {
  modalTwo.style.display = "block";
  percentScreen.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
closeTwo.onclick = function() {
  modalTwo.style.display = "none";
  percentScreen.style.display = "grid";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalTwo) {
    modalTwo.style.display = "none";
    percentScreen.style.display = "grid";
  }
}



function calcWrite(data){
  var answer = document.getElementById("answer");
  var prev = answer.getAttribute('value') || '';
  answer.setAttribute('value', (prev + data.value));
  calcOutput(answer.value);
}

function calcErase(){
  var answer = document.getElementById("answer");
  answer.setAttribute('value', answer.value.slice(0, -1));
  calcOutput(answer.value);
}

function calcClear(){
  var answer = document.getElementById("answer");
  answer.setAttribute('value', '');
  calcOutput(1);
}

function calcOutput(value){

  console.log(value);
  document.getElementById("answer-final")
    .setAttribute('value', toLocaleStringSupportsOptions(parseFloat(value)));
}

window.onload = function() {
  calcOutput(document.getElementById("answer").value);
};

//INPUT
var input3 = document.querySelector('#input3');
if (input3) {

  var percentDisplay = document.getElementById('percent');

  if (percentDisplay) {

    input3.addEventListener('input', function() {

      percentDisplay.value = input3.value + '%';
      document.getElementById('percent-final').value = input3.value + '%';

    }, false);
  }
}

function percentValue(sliderVal){

  return precise_round( ((sliderVal.value - sliderVal.min) / (sliderVal.max - sliderVal.min))*100 , 2);
}

function precise_round(num, decimals) {
   var t = Math.pow(10, decimals);
   return (Math.round((num * t) + (decimals>0?1:0)*(Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
}


let stageZero = document.getElementById('stage-0'),
    stageOne = document.getElementById('stage-1'),
    btnOne = document.getElementById('button-1');

let stageTwo = document.getElementById('stage-2'),
    btnTwo = document.getElementById('button-2');

let stageThree = document.getElementById('stage-3'),
    btnThree = document.getElementById('button-3');

btnOne.addEventListener('click', function () {

  event.preventDefault();

  if(!stageZero.classList.contains('hidden')){

    stageZero.classList.add('visuallyhidden');
    stageZero.addEventListener('transitionend', function(e) {
      stageZero.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });

    stageOne.classList.remove('hidden');
    setTimeout(function () {
      stageOne.classList.remove('visuallyhidden');
    }, 200);
  }
}, false);

btnTwo.addEventListener('click', function () {

  event.preventDefault();

  if (stageTwo.classList.contains('hidden')) {
    stageTwo.classList.remove('hidden');
    setTimeout(function () {
      stageTwo.classList.remove('visuallyhidden');

      stageOne.classList.add('visuallyhidden');
      stageOne.addEventListener('transitionend', function(e) {
        stageOne.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });

    }, 200);
  }
}, false);


btnThree.addEventListener('click', function () {

  event.preventDefault();
  setMortage();

  if (stageThree.classList.contains('hidden')) {
    stageThree.classList.remove('hidden');
    setTimeout(function () {
      stageThree.classList.remove('visuallyhidden');

      stageTwo.classList.add('visuallyhidden');
      stageTwo.addEventListener('transitionend', function(e) {
        stageTwo.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });

    }, 200);
  }
}, false);


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
		element.style.backgroundImage = "url(http://creanovadesign.com/wp-content/uploads/2020/02/bg_1-min.png)";
	} else if (value > 19 && value < 45){
		element.style.backgroundImage = "url(http://creanovadesign.com/wp-content/uploads/2020/02/bg_2-min.png)";
	} else if (value > 44){
		element.style.backgroundImage = "url(http://creanovadesign.com/wp-content/uploads/2020/02/bg_3-min.png)";
		document.getElementById('future').style.display = 'grid';
	} else {
		element.style.backgroundImage = "url(http://creanovadesign.com/wp-content/uploads/2020/02/bg_1-min.png)";
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
