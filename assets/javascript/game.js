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

var startGame = function () {
	// Reset game
	currentScore = 0;

	//set new  taregt  Score
	targetScore = getRandom (19, 120);

 
	//set different values 1-12 for a crystal. this will be rando m association
	crystals.red.value = getRandom(1, 12);
	crystals.blue.value = getRandom(1, 12);
	crystals.green.value = getRandom(1, 12);
	crystals.yellow.value = getRandom(1, 12);


	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

	console.log("-----------")

	console.log("Target Score: " + targetScore)
	
	console.log("Red: " + crystals.red.value + " | Blue: " + crystals.blue.value + " | Green: " + crystals.green.value + " | Yellow: " + crystals.yellow.value)

	console.log("-----------")
}

var addValues = function(crystals) {

	currentScore = currentScore + crystals.value;

	$("#yourScore").html(currentScore);

	checkWin();

	console.log("Your Score: " + currentScore);
}

var checkWin = function() {

	if(currentScore > targetScore) {
		alert("You lost");
		console.log("You lost");

		lossCount++;

		$("#lossCount").html(lossCount);

		startGame();
	} 

	else if (currentScore == targetScore) {
		alert("Congrats, you WON");
		console.log("You Won");

		winCount++;
		$("#winCount").html(winCount);

		startGame();
	}
}

//Main Process
//--------------------------------------------------------
startGame();

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
