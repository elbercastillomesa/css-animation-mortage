let modal = document.getElementById("myModal"),
  textInput = document.getElementById("textInput"),
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
