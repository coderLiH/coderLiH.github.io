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

	$("#pop_container").click(function(){
		$("#pop_container").css('display','none');
	});

	$("#back").click(function(){
	    $(document).scrollTop(0);
	});

	$("#c14_1").click(function(){
		$("#pop_container").css('display','inherit');
		$("#pop").attr('src','../images/14_5.png');
	});
	$("#c14_2").click(function(){
		$("#pop_container").css('display','inherit');
		$("#pop").attr('src','../images/14_7.png');
	});
	$("#c14_3").click(function(){
		$("#pop_container").css('display','inherit');
		$("#pop").attr('src','../images/14_8.png');
	});

	$(document).bind('scroll', function(){
        var len=$(this).scrollTop()
        if(len>=100){
            //显示回到顶部按钮
            $('#back').show();
        }else{
            //影藏回到顶部按钮
            $('#back').hide();
        }
    });

    $('.my-slider').unslider({
		autoplay: true,
		arrows: false,
		infinite: true 
	});
});