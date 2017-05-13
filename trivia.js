var questionId = [$("#questionOne"), $("#questionTwo"), $("#questionThree"), $("#questionFour") ];
var points = 0;

//changing the box when the "next button is clicked"

//making user's answer 
var clickOne = 0;
var clickTwo = 0;
var clickThree = 0;
var clickFour = 0;

    $(".answerOne").on("click", function() {
	clickOne++;
		
	if (clickOne === 1) {
	$(this).attr("class", "UserAnswerOne");
	$(this).css({"background-color": "black", "color": "white"});
	}
	});

	$(".answerTwo").on("click", function() {
	clickTwo++;
		
	if (clickTwo === 1) {
	$(this).attr("class", "UserAnswerTwo");
	$(this).css({"background-color": "black", "color": "white"});
	}	
	});
	
	$(".answerThree").on("click", function() {
	clickThree++;
		
	if (clickThree === 1) {
	$(this).attr("class", "UserAnswerThree");
	$(this).css({"background-color": "black", "color": "white"});
	}
	});

	$(".answerFour").on("click", function() {
	clickFour++;
		
	if (clickFour === 1) {
	$(this).attr("class", "UserAnswerFour");
	$(this).css({"background-color": "black", "color": "white"});
	}
	});

//use boolen to stop things
	$(".start").click(function() {
		$("#startBox").css("visibility", "hidden");
		$("#questionOne").css("visibility", "visible");
		$("#time-left").css("visibility", "visible");
		countdown.start();
	});


	$(".nextQ1").click(function() {
		$("#questionOne").toggle();
		$("#questionTwo").css("visibility", "visible");
		countdown.reset();
	});


	$(".nextQ2").click(function () {
		$("#questionTwo").toggle();
		$("#questionThree").css("visibility", "visible");
		countdown.reset();
	});

	$(".nextQ3").click(function() {
		$("#questionThree").toggle();
		$("#questionFour").css("visibility", "visible");
		countdown.reset();
	});

	$(".submit").click(function() {
		$("#questionFour").toggle();

		for (i = 0; i < questionId.length; i++) {
		questionId[i].toggle();
		};

		$(".UserAnswerOne").css({"background-color": "white", "color": "black"});
		$(".UserAnswerTwo").css({"background-color": "white", "color": "black"});
		$(".UserAnswerThree").css({"background-color": "white", "color": "black"});
		$(".UserAnswerFour").css({"background-color": "white", "color": "black"});

		$("button").remove();
		$("p").css({"border": "none", "padding": "0"});

		$("#time-left").css("visibility", "hidden");
		countdown.reset();
		countdown.stop();

	var correctAnswerOne = document.getElementById('correctAnswerOne').className.split(/\s+/);
	var correctAnswerTwo = document.getElementById('correctAnswerTwo').className.split(/\s+/);
	var correctAnswerThree = document.getElementById('correctAnswerThree').className.split(/\s+/);	
	var correctAnswerFour = document.getElementById('correctAnswerFour').className.split(/\s+/);

	if (correctAnswerOne.indexOf('UserAnswerOne') > -1) {
		$("#correctAnswerOne").css({"color": "green", "font-weight": "bold"});
		points++;
	}
	else {
		$("#correctAnswerOne").css({"color": "green", "font-weight": "bold"});
		$(".UserAnswerOne").css({"color": "red", "font-weight": "bold"});
	}	

	if (correctAnswerTwo.indexOf('UserAnswerTwo') > -1) {
		$("#correctAnswerTwo").css({"color": "green", "font-weight": "bold"});
		points++;
	}
	else {
		$("#correctAnswerTwo").css({"color": "green", "font-weight": "bold"});
		$(".UserAnswerTwo").css({"color": "red", "font-weight": "bold"});
	}

	if (correctAnswerThree.indexOf('UserAnswerThree') > -1) {
		$("#correctAnswerThree").css({"color": "green", "font-weight": "bold"});
		points++;
	}
	else {
		$("#correctAnswerThree").css({"color": "green", "font-weight": "bold"});
		$(".UserAnswerThree").css({"color": "red", "font-weight": "bold"});
	}

	if (correctAnswerFour.indexOf('UserAnswerFour') > -1) {
		$("#correctAnswerFour").css({"color": "green", "font-weight": "bold"});
		points++;
	}
	else {
		$("#correctAnswerFour").css({"color": "green", "font-weight": "bold"});
		$(".UserAnswerFour").css({"color": "red", "font-weight": "bold"});
	}

	$("#resultBox").append("<h3>You got " + points + " out of 4 correct.</h3>");
		if (points === 4) {
			$("#resultBox").append("<h3><em><You are Beyonce.</em></h3>");
		}

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

