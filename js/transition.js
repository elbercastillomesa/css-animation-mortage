let box = document.getElementById('stage-0'),
    stage1 = document.getElementById('stage-1'),
    btn = document.getElementById('button');

btn.addEventListener('click', function () {


    if(!box.classList.contains('hidden')){

      box.classList.add('visuallyhidden');
      box.addEventListener('transitionend', function(e) {
        box.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });

      stage1.classList.remove('hidden');
      setTimeout(function () {
        stage1.classList.remove('visuallyhidden');
      }, 200);

    }
/*
  if (box.classList.contains('hidden')) {

      console.log("hidden");

    box.classList.remove('hidden');
    setTimeout(function () {
      box.classList.remove('visuallyhidden');
    }, 200);
  } else {

console.log("show");

    box.classList.add('visuallyhidden');
    box.addEventListener('transitionend', function(e) {
      box.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  }
*/
}, false);
