$(document).ready(function(){
	// starts parallax for background
      $('.parallax').parallax();

      // starts carousel effect on portfolio
      $('.carousel').carousel();


      $("#textarea1").keyup(function(event){
    		if(event.keyCode == 13){
        		$("#textarea1").click();
    		}
		});








      //close of doc ready
    });