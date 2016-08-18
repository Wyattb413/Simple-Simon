"use strict";
(function(){
var randomNumber = "";
var randomSelection = "";
var randomSelectionString = "";
var userSelectionString = "";

function randomNumberFunction(){
	randomNumber = Math.floor((Math.random() * 7) + 1);
	randomSelection = "hilt" + randomNumber + " ";
	randomSelectionString += randomSelection;
}


$('#hilt1').click(function(){
	console.log('#hilt1');
	$('#lightsaberRed').addClass('saberExtended');
	setTimeout(function(){
		$('#lightsaberRed').removeClass('saberExtended');
	}, 650);
});

$('#hilt2').click(function(){
	console.log('#hilt2');
	$('#lightsaberPurple').addClass('saberExtended');
	setTimeout(function(){
		$('#lightsaberPurple').removeClass('saberExtended');
	}, 650);
});

$('#hilt3').click(function(){
	console.log('#hilt3');
	$('#lightsaberBlue').addClass('saberExtended');
	setTimeout(function(){
		$('#lightsaberBlue').removeClass('saberExtended');
	}, 650);
});

$('#hilt4').click(function(){
	console.log('#hilt4');
	$('#lightsaberGreen').addClass('saberExtended');
	setTimeout(function(){
		$('#lightsaberGreen').removeClass('saberExtended');
	}, 650);
});

$('#hilt5').click(function(){
	console.log('#hilt5');
	$('#lightsaberWhite').addClass('saberExtended');
	setTimeout(function(){
		$('#lightsaberWhite').removeClass('saberExtended');
	}, 650);
});

$('#hilt6').click(function(){
	console.log('#hilt6');
	$('#lightsaberOrange').addClass('saberExtended');
	setTimeout(function(){
		$('#lightsaberOrange').removeClass('saberExtended');
	}, 650);
});

$('#hilt7').click(function(){
	console.log('#hilt7');
	$('#lightsaberYellow').addClass('saberExtended');
	setTimeout(function(){
		$('#lightsaberYellow').removeClass('saberExtended');
	}, 650);
});


randomNumberFunction();
console.log(randomSelectionString);
randomNumberFunction();
console.log(randomSelectionString);
randomNumberFunction();
console.log(randomSelectionString);
randomNumberFunction();
console.log(randomSelectionString);
randomNumberFunction();
console.log(randomSelectionString);
randomNumberFunction();
console.log(randomSelectionString);
randomNumberFunction();
console.log(randomSelectionString);








})();