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

// Submit Button Audio
function play() {
    var audio = document.getElementById('playSubmit');
   audio.play();
}

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.keyCode == "49") {
	// Play Begin Recording with 1
		document.getElementById('playRecord').play()
	}
	
	else if (e.keyCode == "50") {
	// Play Pause Recording with 2
		document.getElementById('playPause').play()
	}
	
	else if (e.keyCode == "51") {
	// Play Stop Recording with 3
		document.getElementById('playStop').play()
	}
	
	else if (e.keyCode == "52") {
        //Play Play with 4
        document.getElementById('playPlay').play()
    }
	
	else if (e.keyCode == "53") {
        //Play Refresh with 5
        document.getElementById('playRefresh').play()
    }
	
	else if (e.keyCode == "54") {
        //Play Submit with 6
        document.getElementById('playSubmit').play()
    }
	
	else if (e.keyCode == "55") {
	// Play Instructions again with 7
		document.getElementById('playInstructions').play()
	}
}