	
//changing the box when the "next button is clicked"
	$(".start").click(function() {
		$("#startBox").css("visibility", "hidden");
		$("#questionOne").css("visibility", "visible");
		$("#time-left").css("visibility", "visible");
		countdown.start();
	});


	$(".nextQ1").click(function() {
		$("#questionOne").remove();
		$("#questionTwo").css("visibility", "visible");
		countdown.reset();
	});


	$(".nextQ2").click(function () {
		$("#questionTwo").remove();
		$("#questionThree").css("visibility", "visible");
		countdown.reset();
	});

	$(".nextQ3").click(function() {
		$("#questionThree").remove();
		$("#questionFour").css("visibility", "visible");
		countdown.reset();
	});

	$(".submit").click(function() {
		$("#questionFour").remove();
		$("#resultBox").css("visibility", "visible");
		$("#time-left").css("visibility", "hidden");
		countdown.stop();
	});

//making user's answer 
	$(".answerOne").click(function() {
	$(this).attr("class", "UserAnswerOne");
	});

	$(".answerTwo").click(function() {
	$(this).attr("class", "UserAnswerTwo");
	});

	$(".answerThree").click(function() {
	$(this).attr("class", "UserAnswerThree");
	});

	$(".answerFour").click(function() {
	$(this).attr("class", "UserAnswerFour");
	});


//timer stuff
var intervalId;

var countdown = {
	 
	time: 10,

	reset: function() {

    countdown.time = 9;

    $("#time-left").html("00:09");

    },

	start: function() {

		intervalId = setInterval(countdown.count, 1000);

		},

	stop: function() {

	    clearInterval(intervalId);
	  },

	count: function() {

		countdown.time--;

		if (countdown.time === 0) {
			countdown.stop();
			$(".question").html("<h3>You have ran out of time. Refresh the page to start over.");
		}

		var converted = countdown.timeConverter(countdown.time);
	    console.log(converted);

	    $("#time-left").html(converted);
	    },

	timeConverter: function(t) {

	    var minutes = Math.floor(t / 60);
	    var seconds = t - (minutes * 60);

	    if (seconds < 10) {
	      seconds = "0" + seconds;
	    }

	    if (minutes === 0) {
	      minutes = "00";
	    }
	    else if (minutes < 10) {
	      minutes = "0" + minutes;
	    }

	    return minutes + ":" + seconds;
	  }
};