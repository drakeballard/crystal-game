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
	var currentScore = 0;

	//set new  taregt  Score
	targetScore = getRandom (19, 120);


	//set different values 1-12 for a crystal. this will be rando m association
	crystals.red.value = getRandom(1, 12);
	crystals.blue.value = getRandom(1, 12);
	crystals.green.value = getRandom(1, 12);
	crystals.yellow.value = getRandom(1, 12);

	console.log("-----------")

	console.log("target score" + targetScore)
	
	console.log("Blue " + crystals.red.value + " | Red: " + crystals.blue.value + " | Blue: " + crystals.green.value + " | Green: " + crystals.yellow.value + " | Yellow: ")

	console.log("-----------")
}


//Main Process
//--------------------------------------------------------
startGame();

$("#blue").click(function() {
	alert("blue")
});
$("#red").click(function() {
	alert("red")
});
$("#green").click(function() {
	alert("green")
});
$("#yellow").click(function() {
	alert("yellow")
});
