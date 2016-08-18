"use strict";
(function(){
var randomNumber = "";
var randomSelection = "";
var randomSelectionString = "";
var userSelectionString = "";

$('#playButton').click(function(){

	// var dialog = $('#dialogText').dialog('open');
	// setTimeout(function() { dialog.dialog('close'); }, 3000);

	alert("Starting Game");

	setTimeout(function() {

//<!-- //////////////////////////////////////////////////Function For Random Number//////////////////////////////////////////////////////////// -->

		function randomNumberFunction(){
			randomNumber = Math.floor((Math.random() * 7) + 1);
			randomSelection = "hilt" + randomNumber + " ";
			randomSelectionString += randomSelection;
		}

//<!-- ////////////////////////////////////////////////////Adds Click Events For Lightsaber Hilts////////////////////////////////////////////// -->

		$('#hilt1').click(function(){
			// console.log('#hilt1');
			userSelectionString += "#hilt1" + " ";
			console.log(userSelectionString);
			$('#lightsaberRed').addClass('saberExtended');
			setTimeout(function(){
				$('#lightsaberRed').removeClass('saberExtended');
			}, 650);
		});

		$('#hilt2').click(function(){
			// console.log('#hilt2');
			userSelectionString += "#hilt2" + " ";
			console.log(userSelectionString);
			$('#lightsaberPurple').addClass('saberExtended');
			setTimeout(function(){
				$('#lightsaberPurple').removeClass('saberExtended');
			}, 650);
		});

		$('#hilt3').click(function(){
			// console.log('#hilt3');
			userSelectionString += "#hilt3" + " ";
			console.log(userSelectionString);
			$('#lightsaberBlue').addClass('saberExtended');
			setTimeout(function(){
				$('#lightsaberBlue').removeClass('saberExtended');
			}, 650);
		});

		$('#hilt4').click(function(){
			// console.log('#hilt4');
			userSelectionString += "#hilt4" + " ";
			console.log(userSelectionString);
			$('#lightsaberGreen').addClass('saberExtended');
			setTimeout(function(){
				$('#lightsaberGreen').removeClass('saberExtended');
			}, 650);
		});

		$('#hilt5').click(function(){
			// console.log('#hilt5');
			userSelectionString += "#hilt5" + " ";
			console.log(userSelectionString);
			$('#lightsaberWhite').addClass('saberExtended');
			setTimeout(function(){
				$('#lightsaberWhite').removeClass('saberExtended');
			}, 650);
		});

		$('#hilt6').click(function(){
			// console.log('#hilt6');
			userSelectionString += "#hilt6" + " ";
			console.log(userSelectionString);
			$('#lightsaberOrange').addClass('saberExtended');
			setTimeout(function(){
				$('#lightsaberOrange').removeClass('saberExtended');
			}, 650);
		});

		$('#hilt7').click(function(){
			// console.log('#hilt7');
			userSelectionString += "#hilt7" + " ";
			console.log(userSelectionString);
			$('#lightsaberYellow').addClass('saberExtended');
			setTimeout(function(){
				$('#lightsaberYellow').removeClass('saberExtended');
			}, 650);
		});

//<!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

		randomNumberFunction();
		console.log(randomSelectionString);

		switch (randomNumber) {
			case 1:
				$('#lightsaberRed').addClass('saberExtended');
				setTimeout(function(){
					$('#lightsaberRed').removeClass('saberExtended');
				}, 650);
				break;
			case 2:
				$('#lightsaberPurple').addClass('saberExtended');
				setTimeout(function(){
					$('#lightsaberPurple').removeClass('saberExtended');
				}, 650);
				break;
			case 3:
				$('#lightsaberBlue').addClass('saberExtended');
				setTimeout(function(){
					$('#lightsaberBlue').removeClass('saberExtended');
				}, 650);
				break;
			case 4:
				$('#lightsaberGreen').addClass('saberExtended');
				setTimeout(function(){
					$('#lightsaberGreen').removeClass('saberExtended');
				}, 650);
				break;
			case 5:
				$('#lightsaberWhite').addClass('saberExtended');
				setTimeout(function(){
					$('#lightsaberWhite').removeClass('saberExtended');
				}, 650);
				break;
			case 6:
				$('#lightsaberOrange').addClass('saberExtended');
				setTimeout(function(){
					$('#lightsaberOrange').removeClass('saberExtended');
				}, 650);
				break;
			case 7:
				$('#lightsaberYellow').addClass('saberExtended');
				setTimeout(function(){
					$('#lightsaberYellow').removeClass('saberExtended');
				}, 650);
				break;
		};

//<!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

	}, 650);

});






})();

<!-- //////////////////////////////////////////////////TODO List//////////////////////////////////////////////////////////// -->

//TODO: Create jqueryUi auto close dialog