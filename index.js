$(function () {

  var isColor = true

  $("#colorBtn").on("click", function () {
    $("#colorBtn").css("color", "#FFFFFF")
    $("#colorBtn").css("background-color", "#4072FE")
    $("#backgroundColorBtn").css("color", "#454545")
    $("#backgroundColorBtn").css("background-color", "#F6F6F6")
    isColor = true
  });
  $("#backgroundColorBtn").on("click", function () {
    $("#backgroundColorBtn").css("color", "#FFFFFF")
    $("#backgroundColorBtn").css("background-color", "#4072FE")
    $("#colorBtn").css("color", "#454545")
    $("#colorBtn").css("background-color", "#F6F6F6")
    isColor = false
  });

  $("button").button();

  function refreshSwatch() {
    var red = $("#red").slider("value")
    var green = $("#green").slider("value")
    var blue = $("#blue").slider("value")
    var hex = `rgb(${red}, ${green}, ${blue})`
    if (isColor) {
      $("#swatch").css("color", hex)
    } else {
      $("#swatch").css("background-color", hex)
    }
  }

  $("#red, #green, #blue").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $("#red").slider("value", 0);
  $("#green").slider("value", 0);
  $("#blue").slider("value", 0);
});