$(document).ready(function(){
	$("#c1_1").click(function(){
		$("#pop_container").css('display','inherit');
		$("#pop").attr('src','../images/1_5.jpg');
	});
	$("#c1_2").click(function(){
		$("#pop_container").css('display','inherit');
		$("#pop").attr('src','../images/1_6.jpg');
	});
	$("#c1_3").click(function(){
		$("#pop_container").css('display','inherit');
		$("#pop").attr('src','../images/1_7.jpg');
	});

	$("#1_more").click(function(){
		window.location.href="./1_1.html";
	});

	$("#pop_container").click(function(){
		$("#pop_container").css('display','none');
	});


	$('.my-slider').unslider({
		autoplay: true,
		arrows: false
	});
});