window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(e) {
    if (e.keyCode == "49") {
	// Play Begin Recording with 1
		document.getElementById('playRecord').play();
		document.getElementById('playPause').pause();
		document.getElementById('playStop').pause();
		document.getElementById('playPlay').pause();
		document.getElementById('playRefresh').pause();
		document.getElementById('playSubmit').pause();
		document.getElementById('playInstructions').pause();
	}
	
	else if (e.keyCode == "50") {
	// Play Pause Recording with 2
		document.getElementById('playPause').play();
		document.getElementById('playRecord').pause();
		document.getElementById('playStop').pause();
		document.getElementById('playPlay').pause();
		document.getElementById('playRefresh').pause();
		document.getElementById('playSubmit').pause();
		document.getElementById('playInstructions').pause();
	}
	
	else if (e.keyCode == "51") {
	// Play Stop Recording with 3
		document.getElementById('playStop').play();
		document.getElementById('playRecord').pause();
		document.getElementById('playPause').pause();
		document.getElementById('playPlay').pause();
		document.getElementById('playRefresh').pause();
		document.getElementById('playSubmit').pause();
		document.getElementById('playInstructions').pause();
	}
	
	else if (e.keyCode == "52") {
        //Play Play with 4
        document.getElementById('playPlay').play();
		document.getElementById('playRecord').pause();
		document.getElementById('playPause').stop();
		document.getElementById('playStop').pause();
		document.getElementById('playRefresh').pause();
		document.getElementById('playSubmit').pause();
		document.getElementById('playInstructions').pause();
    }
	
	else if (e.keyCode == "53") {
        //Play Refresh with 5
        document.getElementById('playRefresh').play();
		document.getElementById('playRecord').pause();
		document.getElementById('playPause').pause();
		document.getElementById('playStop').pause();
		document.getElementById('playPlay').pause();
		document.getElementById('playSubmit').pause();
		document.getElementById('playInstructions').pause();
    }
	
	else if (e.keyCode == "54") {
        //Play Submit with 6
        document.getElementById('playSubmit').play();
		document.getElementById('playRecord').pause();
		document.getElementById('playPause').pause();
		document.getElementById('playStop').pause();
		document.getElementById('playRefresh').pause();
		document.getElementById('playPlay').pause();
		document.getElementById('playInstructions').pause();
    }
	
	else if (e.keyCode == "55") {
	// Play Instructions again with 7
		document.getElementById('playInstructions').play();
		document.getElementById('playSubmit').pause();
		document.getElementById('playRecord').pause();
		document.getElementById('playPause').pause();
		document.getElementById('playStop').pause();
		document.getElementById('playRefresh').pause();
		document.getElementById('playPlay').pause();
	}
}

// Submit Button Audio
function play() {
    var audio = document.getElementById('playSubmit');
   audio.play();
}

// Play Breaking1 audio on breakingVI.html

$(document).ready(function(){
var playBtn1 = document.getElementById('play1');
var stopBtn1 = document.getElementById('stop1');
var playBtn2 = document.getElementById('play2');
var stopBtn2 = document.getElementById('stop2');

var playSound1 = function() {
	audio1.play();
};

var playSound2 = function() {
	audio2.play();
};

// Breaking1 Playback 
playBtn1.addEventListener('click', playSound1, false); // Play Breaking1 on click
playBtn1.addEventListener('click', function(){audio2.pause()}, false); // Pause Breaking2 if you start playing Breaking1
stopBtn1.addEventListener('click', function(){audio1.pause()}, false); // Pause Breaking1 on click

//Breaking2 Playback
playBtn2.addEventListener('click', playSound2, false); // Play Breaking2 on click
playBtn2.addEventListener('click', function(){audio1.pause()}, false); // Pause Breaking1 if you start playing Breaking2
stopBtn2.addEventListener('click', function(){audio2.pause()}, false); // Pause Breaking2 on click
});

// Revert back to play button when the audio for Breaking1 has finished
function buttonChange1() {
    $("#play1").show();
    $("#stop1").hide();
}

// Revert back to play button when the audio for Breaking2 has finished
function buttonChange2() {
    $("#play2").show();
    $("#stop2").hide();
}