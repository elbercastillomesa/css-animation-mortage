
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
