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
