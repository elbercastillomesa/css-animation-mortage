$('#draggable-point').draggable({
  axis: 'x',
  containment: "#audio-progress"
});

$('#draggable-point').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = (100 * parseFloat($(this).css("left"))) / (parseFloat($(this).parent().css("width"))) + "%";
   
    $('#audio-progress-bar').css({
      'width': xPos
    });
  }
});

/*

function backgroundChange() { 

	var btn1 = document.getElementById("button1");

    var e = document.getElementById("demo");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(0, 0, 0)") {
    document.getElementById("demo").style.background = "#ff77ee";
} else{
    document.getElementById("demo").style.background = "#000";
}
}


*/