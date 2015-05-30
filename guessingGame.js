//Main Questions
//one div for computer response and another with a different class 
//how do i style text that isnt yet on the page?
//how do i make the display go away after the guess has been submitted?
//look into guess == NaN
//i need to do something about the guess limit!!!
$(document).ready(function(){
	//how do i make the display go away after the guess has been submitted?

function newGame() {
	number = Math.floor((Math.random() *100) + 1);
	guesses = [];
	counter = 0;
	$(".prevguesses").text("");
	$(".computerresponse").text("");
	$(".hotorcold").text("");
	$(".body").css({"background-color": "navy", "color": "white"})
	return number;
	return guesses;
	return counter;
	//how do i make number and guess global in scope while maintaining the newGame function?
	//i tried to accomplish this by eliminating var
};

function validateGuess(guess){
debugger;
if(guess !== NaN && (guess >= 1 && guess <= 100)){
		for (var i=0; i < guesses.length; i++) {
			//this is where you need a function to compare the current guess to the other guesses
			if (guess === guesses[i]) {
				alert("This is a repeat guess. Please guess again.");
				return;
			}
			//do i need the below return to break out of the for loop?
			
		}


		//where do i put the return guess so as to only return it if it does not satisfy the if statement above
		//in the for loop?
	}
	else if(guess === NaN){
		alert("This is not a valid guess. Please enter your guess as a number between 1 and 100.");
		return;
	};
	guesses.push(guess);
	return guess;
}

function hotter_colder(currentGuess) {
	debugger;
	if (Math.abs(guesses[guesses.length-1]-number) < Math.abs(guesses[guesses.length-2]-number)) {
		$(".hotorcold").text("You are getting hotter!");
	}
	else if (Math.abs(guesses[guesses.length-1]-number) > Math.abs(guesses[guesses.length-2]-number)){
		$(".hotorcold").text("You are getting colder!");
	}
	else {
		$(".hotorcold").text("You are equally far away!");
	}

}

newGame();

$('#guessBtn').on('click', function(){
	debugger;
	var currentGuess = parseInt($(".guesses").val());
	currentGuess = validateGuess(currentGuess);
	counter ++;
	//what would happen if I don't return anything for if currentGuess===NAaN?
	if (currentGuess != NaN && counter < 6) {
	//WHY DOESNT THIS SEEM TO BE WORKING on the second round??! current GUess goes from defined to undefined. why?
	$(".prevguesses").text(guesses.join());
	$(".numguesses").text("You have used " + counter + " of your 5 guesses");
	//how do i set up the you have x number of guesses remaining?
		if (currentGuess === number) {
			$(".prevguesses").text(" ");
			$(".hotorcold").text(" ");
			$(".numguesses").text(" ");
			$(".computerresponse").text("Congratulations, you guessed correctly! You won!");
			$("body").css({"background-color": "green", "color": "yellow"});
		}
		else if (Math.abs(currentGuess-number) < 10) {
			$(".computerresponse").text("You are hot!");
				if (guesses.length >= 2) {
				hotter_colder();
			}
				else {
				return;
			}
		}
		else if (Math.abs(currentGuess-number) > 10) {
			$(".computerresponse").text("You are cold!");
 				if (guesses.length >= 2) {
				hotter_colder();
				}
				else {
				return;
				}
 		}
	}
	else {
		$(".prevguesses").text(" ");
		$(".hotorcold").text(" ");
		$(".numguesses").text("Sorry, you have used up all of your guesses. Game over.");
		$(".computerresponse").text("The answer is " + number + ". Click Play Again to start a new game.");
	}
});

$("#newGm").on("click", function() {
	location.reload();
});

$(".hint").on("click", function() {
 	var answer = "The answer is " + number;
 	$(".computerresponse").text(answer);
});
	

	
})

// var game = function() {
// var number = Math.floor((Math.random() *100) + 1);
// var guess = [];
// $("header").append("<h3>Please enter your guess as a number between 1 and 100.</h3>");
// /*$(".guesses").on("keyup change", function(){
// 	guess[i] = $(this).val();
// })
// */

// // $('.guesses')
// for (i=0; i<=5; i++) {
//  guess[i] = $(this).val();
// 	$("#guessingGame").on("submit", function(event) {
// 		if (typeof guess[i] === "number" && guess[i] >= 1 && guess[i] <= 100) {
// 		//slightly problematic because I need an integer not number!
// 		//now another if statement
// 	//or document.queryselector()??
// 	$(".prevguesses").append("<li>" + guess[i] + "</li>");
// 	$(".computerresponse").append("<p> You have " + (5-i) + " guesses remaining.</p>");
// 		event.preventDefault();
// 		if (guess[i] === number) {
// 			$(".computerresponse").append("<p>Congratulations, you guessed correctly! You won!</p>");
// 		}
// 			//if they would like to play again, call function game
// 		else if (Math.abs(guess[i]-number) < 10) {
// 			console.log("You are hot!");
// 			if (i>=1) {
// 				hotter_colder;
// 			}
// 		}
// 		else if (Math.abs(guess[i]-number) > 10) {
// 			console.log("You are cold!");
// 			if (i>=1) {
// 				hotter_colder;
// 			}
// 		}
// 	}
// 		else {
// 		game;
// 	}
// }
// $(".hint").on("click", function() {
// 	var answer = "The answer is " + number;
// 	$(".computerresponse").append("<p>" + answer + "</p>");
// });
// });
// }

// var hotter_colder = function() {
// 	if (Math.abs(guess[i] - number) < Math.abs(guess[i-1] - number)) {
// 				$(".computerresponse").append("You are getting hotter!");
// 			}
// 	else {
// 				$(".computerresponse").append("You are gettting colder!");
// 		}
// }

// $(document).ready(game());





/*var game = function() {
	var number = Math.floor((Math.random() *100) + 1);
	var guess = [];
	for (i=0; i<=5; i++) {
		//help!!
		$(".computerresponse").append("<p> You have " + (5-i) + " guesses remaining.</p>");
	var guess[i] = prompt("Please enter your guess as a number between 1 and 100.");
	if (typeof guess[i] === "number" && guess[i] >= 1 && guess[i] <= 100) {
		//slightly problematic because I need an integer not number!
		//now another if statement
		if (guess[i] === number) {
			$("<p>Correct Guess! You won!</p>")
}
else if (guess > number) {
	$("")
}
			console.log("Congratulations, you guessed the number! You won!");
			//if they would like to play again, call function game
		}
		else if (Math.abs(guess[i]-number) < 10) {
			console.log("You are hot!");
			if (i>=1) {
				hotter_colder;
			}
		}
		else if (Math.abs(guess[i]-number) > 10) {
			console.log("You are cold!");
			if (i>=1) {
				hotter_colder;
			}
		}

	}
	else {
		game? 
	}
	}	
}
*/
