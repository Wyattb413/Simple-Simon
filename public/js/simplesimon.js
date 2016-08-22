"use strict";
(function(){

//==============================================================={Varible Declarations}==============================================================\
var randomNumber;
var hiltClicked = "";
var sequence = [];
var index = 0;
var userSequence = [];
var sequenceKey = {
	hilt1 : 1,
	hilt2 : 2,
	hilt3 : 3,
	hilt4 : 4
};
//===================================================================================================================================================\

//==============================================================={Function Declarations}=============================================================\

/*Random Number Generator*/
function randomNumberFunction(){
	//genrates random nuber between 1-4
	randomNumber = Math.floor((Math.random() * 4) + 1);
	//pushes random number to sequence array								
	sequence.push(randomNumber);														
};

/*"Button Flash" AKA Saber Show/Hide*/
function caseFunctions(str) {
	/*takes string from game() switch case based on random number generated 
	and adds 'saberExtended' class to make saber appear*/
	$(str).addClass('saberExtended');
	//timeout to improve 'animation' apperance (keeps from sudden appear and disapear)												
	setTimeout(function(){
	//removes class to make saber disapear												
		$(str).removeClass('saberExtended');											
	}, 650);
}

/*General Game Functionality*/
function game(){
	//timeout to avoid instant start of game upon click of play button
	setTimeout(function() {
		//generates a random number
		randomNumberFunction();
		//loops through sequence array
		for(let i = 0; i < sequence.length; i++){
			setTimeout(function(){
				/*takes randomNumber, applies it to switch case, and based on
				case it passes the corresponding string to caseFunctions()*/
				switch (sequence[i]) {														
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
			}, i * 1000);
		}
	}, 850);
}

/*Game Seqeunce Checker*/
function checksInput(){
		//checks if contents of arrays are equal by converting them to strings
		if(JSON.stringify(userSequence) === JSON.stringify(sequence)) {					
			console.log("you are correct")
			//runs next round of game if player is correct
			game();
			//resets userSequence to avoid carryover into next round																	
			userSequence = [];
			index = 0;															
		} else {
			//lets player know they lost
			console.log("you tried, young padwan");
			//resets all varibles for fresh start									
			hiltClicked = "";												
			sequence = [];
			userSequence = [];
			console.log("game reset");
		}																				
	}

//==================================================================================================================================================\

//adds click listener to 'saberHilts'
$('.lightsaberHilt').click(function(){		
		//adds 'saberExtended' class to hilt user clicked on											
		$(this).next('.lightsaberBlade').addClass('saberExtended');						
		//prevents instant adding and removing of class
		setTimeout(function(){		
			//removes 'saberExtended' class from hilt user clicked on													
			$('.lightsaberHilt').next('.lightsaberBlade').removeClass('saberExtended');	
		}, 650);
		//grabs id of hilt clicked from html and stores it in hiltClicked varible
		hiltClicked += $(this).attr('id');												
		console.log(hiltClicked);
		/*pairs id from 'hiltClicked' with 'sequenceKey' object list and pushes 
		it to userSequence array*/
		userSequence.push(sequenceKey[hiltClicked]);									
		console.log(userSequence);
		/**/
		if(sequenceKey[hiltClicked] == sequence[index]){
			index += 1
			console.log('bubs');
		} else {
			console.log("you tried, young padwan");										
			hiltClicked = "";												
			sequence = [];
			userSequence = [];
			console.log("game reset");
			return;
		}																			
		hiltClicked = "";																//clears 'hiltClicked' to avoid undefined be produced from userSequence Array
		if(userSequence.length == sequence.length){										//if userSequence array and sequence array have the same length, runs checksInput function
			checksInput();
		}
	})


$('#playButton').click(function(){
	game();																				//play button, runs game function
});

})();