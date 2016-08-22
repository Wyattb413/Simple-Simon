"use strict";
// (function(){

var randomNumber;
var hiltClicked = "";
var sequence = [];
var userSequence = [];
var sequenceKey = {
	hilt1 : 1,
	hilt2 : 2,
	hilt3 : 3,
	hilt4 : 4
};


function randomNumberFunction(){
	randomNumber = Math.floor((Math.random() * 4) + 1);
	sequence.push(randomNumber);
	console.log(sequence);
	console.log("sequence^");
};

function caseFunctions(str) {
	$(str).addClass('saberExtended');
	setTimeout(function(){
		$(str).removeClass('saberExtended');
	}, 650);
	}

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

function checksInput(){
		if(JSON.stringify(userSequence) === JSON.stringify(sequence)) {
			console.log("you are correct")
			// showSequence();
			game();
			userSequence = [];
		} else {
			console.log("you tried, young padwan");
			hiltClicked = "";
			sequence = [];
			userSequence = [];
			console.log("game reset");
		}
	}

('.lightsaberHilt').click(function(){
		$(this).next('.lightsaberBlade').addClass('saberExtended');
		setTimeout(function(){
			$('.lightsaberHilt').next('.lightsaberBlade').removeClass('saberExtended');
		}, 650);
		hiltClicked += $(this).attr('id');
		console.log(hiltClicked);
		userSequence.push(sequenceKey[hiltClicked]);
		console.log(userSequence);
		hiltClicked = "";
		if(userSequence.length == sequence.length){
			checksInput();
		}
	})


$('#playButton').click(function(){
	game();			
});






















// })();