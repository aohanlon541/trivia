

$(".start").click(function() {
	$("#startBox").css("visibility", "hidden");
	$("#questionOne").css("visibility", "visible");
});

$(".nextQ1").click(function() {
	$("#questionOne").remove();
	$("#questionTwo").css("visibility", "visible");
});

$(".nextQ2").click(function() {
	$("#questionTwo").remove();
	$("#questionThree").css("visibility", "visible");
});

$(".nextQ3").click(function() {
	$("#questionThree").remove();
	$("#questionFour").css("visibility", "visible");
});

$(".submit").click(function() {
	$("#questionFour").remove();
	$("#resultBox").css("visibility", "visible");
});