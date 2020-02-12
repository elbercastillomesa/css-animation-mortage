let modal = document.getElementById("myModal"),
  textInput = document.getElementById("textInput"),
  close = document.getElementById("close"),
  calcInput = document.getElementById("answer-final");

// When the user clicks on the button, open the modal
textInput.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
