function getStarted(button) {

    var sectionDiv = document.getElementsByTagName('section');
    var mainDiv = document.getElementsByTagName('main');

    var stackOne = document.getElementById('stack-one');

    var stackTwo = document.getElementById('stack-two');

    console.log(stackOne.className);

    if(stackOne.className === 'stack-one'){
      stackOne.classList.add('hidden');
      stackTwo.classList.add('show');

    } else {

    }
}
