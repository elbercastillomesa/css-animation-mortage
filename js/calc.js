
function calcWrite(data){
  var answer = document.getElementById("answer");
  var answerFinal = document.getElementById("answer-final");
  var prev = answer.getAttribute('value') || '';

  answer.setAttribute('value', prev + data.value);
  answerFinal.setAttribute('value', prev + data.value);
}

function calcErase(){
  var answer = document.getElementById("answer");
  var answerFinal = document.getElementById("answer-final");

  answer.setAttribute('value', answer.value.slice(0, -1));
  answerFinal.setAttribute('value', answer.value.slice(0, -1));
}

function calcClear(){
  var answer = document.getElementById("answer");
  var answerFinal = document.getElementById("answer-final");

  answer.setAttribute('value', '');
  answerFinal.setAttribute('value', '');
}

// Percent Slider //

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
