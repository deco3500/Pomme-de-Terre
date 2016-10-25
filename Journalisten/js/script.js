// Hide and Show the Recordings
$(document).ready(function(){
	$(".record1").hide();
	$(".record2").hide();
	$(".record3").hide();
	$(".hide1").hide();
	$(".hide2").hide();
	$(".hide3").hide();
	
    $(".bodyButton1").click(function(){
        $(".record1").show();
		$(".hide1").show();
		$(".bodyButton1").hide();
		$(".insButton1").show();
		$(".instructions1").hide();
    });
	
	$(".bodyButton2").click(function(){
		$(".record2").show();
		$(".hide2").show();
		$(".bodyButton2").hide();
		$(".insButton2").show();
		$(".instructions2").hide();
    });	
	
	$(".bodyButton3").click(function(){
		$(".record3").show();
		$(".hide3").show();
		$(".bodyButton3").hide();
		$(".insButton3").show();
		$(".instructions3").hide();
    });	
	
    $(".hide1").click(function(){
        $(".record1").hide();
		$(".hide1").hide();
		$(".insButton1").hide();
		$(".hideIns1").hide();
		$(".instructions1").hide();
		$(".bodyButton1").show();
    });    
	
	$(".hide2").click(function(){
        $(".record2").hide();
		$(".hide2").hide();
		$(".insButton2").hide();
		$(".hideIns2").hide();
		$(".instructions2").hide();
		$(".bodyButton2").show();
    });	
	
	$(".hide3").click(function(){
        $(".record3").hide();
		$(".hide3").hide();
		$(".insButton3").hide();
		$(".hideIns3").hide();
		$(".instructions23").hide();
		$(".bodyButton3").show();
    });	
	
	$(".insButton1").click(function(){
        $(".insButton1").hide();
        $(".instructions1").show();
		$(".hideIns1").show();
    });
	
	$(".hideIns1").click(function(){
        $(".hideIns1").show();
        $(".instructions1").hide();
		$(".insButton1").show();
    });
	
	$(".insButton2").click(function(){
        $(".insButton2").hide();
        $(".instructions2").show();
		$(".hideIns2").show();
    });
	
	$(".hideIns2").click(function(){
        $(".hideIns2").show();
        $(".instructions2").hide();
		$(".insButton2").show();
    });
	
	$(".insButton3").click(function(){
        $(".insButton3").hide();
        $(".instructions3").show();
		$(".hideIns3").show();
    });
	
	$(".hideIns3").click(function(){
        $(".hideIns3").show();
        $(".instructions3").hide();
		$(".insButton3").show();
    });
	
	$(".submit").click(function(){
        location.reload();
    });	


// Return to Top:
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});