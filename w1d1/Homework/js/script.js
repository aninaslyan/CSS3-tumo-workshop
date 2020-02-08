$(function() {
  var id = setInterval(frame, 64);
  var loading = 0;

  function frame(){
  	if (loading == 100) {
  		clearInterval(id);
  		window.open("welcome.html", "_self");
  	}
  	else{
  		loading++;
  		if (loading == 90){
  			$("#wrapper").style.animation = "fade-out 1s ease";
  		}
  	}
  }
});