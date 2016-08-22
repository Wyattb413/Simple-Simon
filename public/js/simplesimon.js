"use strict";
// (function(){

var randomNumber;
var sequence = [];


function randomNumberFunction(){
	randomNumber = Math.floor((Math.random() * 4) + 1);
	sequence.push(randomNumber);
	console.log(sequence);
	console.log("sequence^");
};

function game(){
	setTimeout(function() {
		randomNumberFunction();
			switch (randomNumber) {
				case 1:
					caseFunctions('#lightsaberRed');
					break;
				case 2:
					caseFunctions('#lightsaberPurple');
					break;
				case 3:
					caseFunctions('#lightsaberBlue');
					break;
				case 4:
					caseFunctions('#lightsaberGreen');
					break;
			};
	}, 650);
}


$('#playButton').click(function(){
	game();			
});






















// })();