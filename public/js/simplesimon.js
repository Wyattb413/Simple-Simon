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
	var toggleExplode = false;
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
		//adds 'saberExtended' class to hilt user clicked on										
		$(str).addClass('saberExtended');
		//plays saberExtend audio file
		$('#saberExtend')[0].play()
		/*waits one second, then removes saberExtended class 
		(avoids instant apply/remove)*/
		setTimeout(function(){
			$(str).removeClass('saberExtended');
		}, 1000);
		/*waits one second for saberExtend animation to play, then plays 
		saberHolstered animation*/
		setTimeout(function(){
			$(str).addClass('saberHolstered');
			//plays saberWithdrawl audio file
			$('#saberWithdrawl')[0].play()
			setTimeout(function(){		
				/*waits one second, then removes saberHolstered file 
				(avoids instant apply/remove)*/													
				$(str).removeClass('saberHolstered');
			}, 1000);
		}, 1000);
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
				}, i * 2000);
			}
		}, 750);
	}

	/*Game Seqeunce Checker*/
	function checksInput(){
			//checks if contents of arrays are equal by converting them to strings
			if(JSON.stringify(userSequence) === JSON.stringify(sequence)) {					
				console.log("you are correct")
				setTimeout(function(){
					//runs next round of game if player is correct
					game();
					//resets userSequence to avoid carryover into next round																	
					userSequence = [];
					index = 0;															
				}, 2000);
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

	//==============================================================={Responding To Player Clicks}=======================================================\

	//adds click listener to 'saberHilts'
	$('.lightsaberHilt').click(function(){	
			var that = this;
			//adds 'saberExtended' class to hilt user clicked on										
			$(that).next('.lightsaberBlade').addClass('saberExtended');
			//plays saberExtend audio file
			$('#saberExtend')[0].play()
			/*waits one second, then removes saberExtended class 
			(avoids instant apply/remove)*/
			setTimeout(function(){
				$(that).next('.lightsaberBlade').removeClass('saberExtended');
			}, 1000);
			/*waits one second for saberExtend animation to play, then plays 
			saberHolstered animation*/
			setTimeout(function(){
				$(that).next('.lightsaberBlade').addClass('saberHolstered');
				//plays saberWithdrawl audio file
				$('#saberWithdrawl')[0].play()
				setTimeout(function(){		
					/*waits one second, then removes saberHolstered file 
					(avoids instant apply/remove)*/														
					$(that).next('.lightsaberBlade').removeClass('saberHolstered');
				}, 1000);
			}, 1000);
			//grabs id of hilt clicked from html and stores it in hiltClicked varible
			hiltClicked += $(this).attr('id');												
			console.log(hiltClicked);
			/*pairs id from 'hiltClicked' with 'sequenceKey' object list and pushes 
			it to userSequence array*/
			userSequence.push(sequenceKey[hiltClicked]);									
			console.log(userSequence);
			//checks id of hiltClicked against sequence array as user clicks hilts
			if(sequenceKey[hiltClicked] == sequence[index]){
				index += 1
				console.log('bubs');
			//if user click does not match up against sequence array, game is reset
			} else {
				$('#laser').removeClass('noDisplay');
				setTimeout(function() {
					$('#earth').toggle("explode", {pieces: 16}, 1000)
					$('#laser').addClass('noDisplay');
				}, 650);
				toggleExplode = true;
				console.log("you tried, young padwan");										
				hiltClicked = "";												
				sequence = [];
				userSequence = [];
				console.log("game reset");
				return;
			}
			//clears 'hiltClicked' to avoid undefined be produced from userSequence Array																			
			hiltClicked = "";	
			//if userSequence array and sequence array have the same length, runs checksInput function															
			if(userSequence.length == sequence.length){										
				checksInput();
			}
		})

	//==================================================================================================================================================\

	//==============================================================={Play Button}==============================================================\

	//play button, runs game function
	$('#playButton').click(function(){
		game();
		// $('#laser').addClass('noDisplay');
		if(toggleExplode){
			$('#earth').toggle("explode", { pieces: 16})
		}
	//==================================================================================================================================================\																			
	});

})();