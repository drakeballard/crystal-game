//Global VAR
//--------------------------------------------------------

//Crystals
var crystals = {
	blue:
	{
		name: "Blue",
		value: 0 
	},	
	red:
	{
		name: "Red",
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
var startGame = function () {
	// Reset game
	var currentScore = 0;
}


//Main Process
//--------------------------------------------------------
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