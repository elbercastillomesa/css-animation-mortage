
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
  document.getElementById("answer-final")
    .setAttribute('value', toLocaleStringSupportsOptions(parseFloat(value)));
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
