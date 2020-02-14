
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
