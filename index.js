var newColor = $('.color-here');
var changeColorBtn = $('.change-color');

changeColorBtn.on("click", changeColor);

function changeColor() {
  var color = $('.color').val();
  newColor.css('backgroundColor', color);
}
