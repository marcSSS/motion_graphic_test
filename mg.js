
$(document).ready(function () {
	$('.skillset').hide();
	$(".skillset").fadeIn(1000);
  $('.projects').hide();
   $(".projects-button").on("click", function () {
		$(this).next().slideToggle(400);
    $(this).toggleClass("active");
    $(this).text('已查看');
  });
});

$(".b1").html("更新公告");
$(".b2").css("background-color"," red");
$(".b2").css("border-radius", "100%");
