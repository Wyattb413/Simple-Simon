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
	randomNumber = Math.floor((Math.random() * 4) + 1);									//genrates random nuber between 1-4
	sequence.push(randomNumber);														//pushes random number to sequence array
	console.log(sequence);
	console.log("sequence^");
};

function caseFunctions(str) {
	$(str).addClass('saberExtended');													//takes string from game() switch case based on random number generated and adds 'saberExtended' class to make saber appear
	setTimeout(function(){																//timeout to improve 'animation' apperance (keeps from sudden appear and disapear)
		$(str).removeClass('saberExtended');											//removes class to make saber disapear
	}, 650);
}

function game(){
	setTimeout(function() {																//delay for start button, to keep from instantanious game start
		randomNumberFunction();															//callback function to generate random number
			switch (randomNumber) {														//switch statment that corresponds with random number generated (part 1 of 2)
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
			};																			//passes corresponding string to caseFunctions to create 'animation' (part 2 of 2)
	}, 650);
}

function checksInput(){
		if(JSON.stringify(userSequence) === JSON.stringify(sequence)) {					//checks if contents of arrays are equal by converting them to strings
			console.log("you are correct")
			// showSequence();
			game();																		//runs next round of game if player is correct
			userSequence = [];															//resets userSequence
		} else {
			console.log("you tried, young padwan");										//lets player know they lost (part 1 of 2)
			hiltClicked = "";												
			sequence = [];
			userSequence = [];
			console.log("game reset");
		}																				//resets all varibles for fresh start (part 2 of 2)
	}

$('.lightsaberHilt').click(function(){													//adds click listener to 'saberHilts'
		$(this).next('.lightsaberBlade').addClass('saberExtended');						//adds 'saberExtended' class to hilt user clicked on
		setTimeout(function(){															//prevents instant adding and removing of class
			$('.lightsaberHilt').next('.lightsaberBlade').removeClass('saberExtended');	//removes 'saberExtended' class from hilt user clicked on
		}, 650);
		hiltClicked += $(this).attr('id');												//grabs id of hilt clicked from html and stores it in hiltClicked varible
		console.log(hiltClicked);
		userSequence.push(sequenceKey[hiltClicked]);									//pushes paired sequenceKey from 'hiltClicked' to userSequence Array
		console.log(userSequence);
		hiltClicked = "";																//clears 'hiltClicked' to avoid undefined be produced from userSequence Array
		if(userSequence.length == sequence.length){										//if userSequence array and sequence array have the same length, runs checksInput function
			checksInput();
		}
	})


$('#playButton').click(function(){
	game();																				//play button, runs game function
});

// })();