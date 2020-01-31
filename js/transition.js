function getStarted(button) {

    var sectionDiv = document.getElementsByTagName('section');
    var mainDiv = document.getElementsByTagName('main');

    console.log(button.className);

    if (button.className === 'button') {
      button.classList.add('hide');
    } else {
      button.classList.remove('hide');
    }
}
