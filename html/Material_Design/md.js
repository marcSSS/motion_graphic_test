$(".block").click(function(e) {
  var mpos = {
    x: event.pageX - $(".block").offset().left,
    y: event.pageY - $(".block").offset().top
  };
  // $(".debug").text(mpos.x+","+mpos.y);
  var appendcir = $("<div/>").css({
    left: (mpos.x - 500) + "px",
    top: (mpos.y - 500) + "px"
  }).addClass("excir");
  $(".block").append(appendcir);
  setTimeout(function() {
    appendcir.remove();
  }, 1400);
});
