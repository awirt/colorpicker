var newColor = $('.color-here');
var changeColorBtn = $('.change-color');
var deleteBtn = $('.delete-color');

changeColorBtn.on("click", changeColor);

function changeColor() {
  var color = $('.color').val();
  newColor.css('backgroundColor', color);
  localStorage.setItem("newColor", color);
}

$(".color-here").css('backgroundColor', localStorage.getItem("newColor"))

