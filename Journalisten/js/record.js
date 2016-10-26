// Hide and Show the Recordings on record.html
$(document).ready(function(){
	$(".insButton1").show();
	$(".instructions1").hide();
	$(".hideIns1").hide();
	
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
});