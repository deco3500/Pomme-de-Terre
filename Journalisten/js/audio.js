document.onkeydown= function(key){ reactKey(key); } 
function reactKey(evt) {
   if(evt.keyCode== 40) {
      alert('worked');
   }
}

function play() {
    var audio = document.getElementById('playSubmit');
   audio.play();
}