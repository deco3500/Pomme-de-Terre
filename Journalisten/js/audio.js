//Play Breaking1 audio on breakingVI.html

$(document).ready(function(){
var playBtn = document.getElementById('play');
var stopBtn = document.getElementById('stop');

var playSound = function() {
	audio.play();
};

playBtn.addEventListener('click', playSound, false);
stopBtn.addEventListener('click', function(){audio.pause()}, false);
});

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