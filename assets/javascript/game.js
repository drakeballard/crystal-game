//Global VAR
//--------------------------------------------------------

//Crystals
var crystals = {
	red:
	{
		name: "Red",
		value: 0 
	},	
	blue:
	{
		name: "Blue",
		value: 0 
	},
	green:
	{
		name: "Green",
		value: 0 
	},
	yellow:
	{
		name: "Yellow",
		value: 0 
	}
};
//Scores of the current and target

var currentScore = 0;
var targetScore = 0;

//wins and losses

var  winCount = 0;
var lossCount = 0;

//Funcions
//--------------------------------------------------------
//Generalize the random number operator
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//startimg the game at 0
var startGame = function () {
	// Reset game
	currentScore = 0;

	//set new  taregt  Score
	targetScore = getRandom (19, 120);

 
	//set different values 1-12 for a crystal. this will be random association for each color
	//association.
	crystals.red.value = getRandom(1, 12);
	crystals.blue.value = getRandom(1, 12);
	crystals.green.value = getRandom(1, 12);
	crystals.yellow.value = getRandom(1, 12);

	//this section is dynamic with the actula HTML page. HTML page will update.
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

	//Testing the console to make sure that the value are being represented properly.
	// console.log("-----------")
	// console.log("Target Score: " + targetScore)
	// console.log("Red: " + crystals.red.value + " | Blue: " + crystals.blue.value + " | Green: " + crystals.green.value + " | Yellow: " + crystals.yellow.value)
	// console.log("-----------")
}

//This section will add up your current count to your current score.
var addValues = function(crystals) {
	
	//You win if the current score matches with the target score. 
	currentScore = currentScore + crystals.value;

	//we have to dynamically reference the js file with the html.
	$("#yourScore").html(currentScore);

	checkWin();
	//checking to determine if the score is being recorded properly.
	console.log("Your Score: " + currentScore);
}

var checkWin = function() {

	// if you guess higher than the target score  you lose
	if(currentScore > targetScore) {
		alert("You lost");
		console.log("You lost");

		//adding up your losses
		lossCount++;

		//dynmainc representation to yoru html
		$("#lossCount").html(lossCount);

		//game will be reset to new variables
		startGame();
	} 
	// the user will win if their current score will equal to target score
	else if (currentScore == targetScore) {
		alert("Congrats, you WON");
		console.log("You Won");

		//adding up your wins
		winCount++;
		$("#winCount").html(winCount);
		
		//game will be reset to new variables	
		startGame();
	}
}

//Main Process
//--------------------------------------------------------
startGame();

//clicking on the following crystal icons will provide the proper presentation of a new variable. 

$("#red").click(function() {
	addValues(crystals.red);
	//alert("red")
});
$("#blue").click(function() {
	addValues(crystals.blue);
	//alert("blue")
});
$("#green").click(function() {
	addValues(crystals.green);
	//alert("green")
});
$("#yellow").click(function() {
	addValues(crystals.yellow);
	//alert("yellow")
});
