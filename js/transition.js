let stageZero = document.getElementById('stage-0'),
    stageOne = document.getElementById('stage-1'),
    btnOne = document.getElementById('button-1');

let stageTwo = document.getElementById('stage-2'),
    btnTwo = document.getElementById('button-2');

btnOne.addEventListener('click', function () {

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

  console.log("boton 2");

  if (stageTwo.classList.contains('hidden')) {
    stageTwo.classList.remove('hidden');
    setTimeout(function () {
      stageTwo.classList.remove('visuallyhidden');
    }, 20);
  } else {
    stageOne.classList.add('visuallyhidden');
    stageOne.addEventListener('transitionend', function(e) {
      stageOne.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  }

}, false);
