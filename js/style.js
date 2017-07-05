$(document).ready(function(){
  		$('.ma').mousemove(function(){
  		$('.weixin').slideDown(200);//可以设置切换时间 
  	});
  		$('.ma').mouseleave(function(){
  		$('.weixin').slideUp("fast");
  	});
  	
  	if(getCookie("userId")!=""){
 		$("#denglu").html(getCookie("userId"));
 		
 	}
});

$(".reping").on("mouseenter", function() {
                $('.dw-2').show();
            })
$(".reping").on("mouseleave", function() {
                $('.dw-2').hide();
            });
$(".dw-2").on("mouseenter", function() {
                $(this).show();
            })
$(".dw-2").on("mouseleave", function() {
                $(this).hide();
            });

$(".xingpin").on("mouseenter", function() {
                $('.dw-1').show();
            })
$(".xingpin").on("mouseleave", function() {
                $('.dw-1').hide();
            });
$(".dw-1").on("mouseenter", function() {
                $(this).show();
            })
$(".dw-1").on("mouseleave", function() {
                $(this).hide();
            });


$(".dao1").on("mouseenter", function() {
                $('#u-1').show();
            })
$(".dao1").on("mouseleave", function() {
                $('#u-1').hide();
            });
$("#u-1").on("mouseenter", function() {
                $(this).show();
            })
$("#u-1").on("mouseleave", function() {
                $(this).hide();
            });


$(".zuo4").on("mouseenter", function() {
                $('#xiala110').show();
            })
$(".zuo4").on("mouseleave", function() {
                $('#xiala110').hide();
            });
$("#xiala110").on("mouseenter", function() {
                $(this).show();
            })
$("#xiala110").on("mouseleave", function() {
                $(this).hide();
            });


$(".ding").on("mouseenter", function() {
                $('#xia1').show();
            })
$(".ding").on("mouseleave", function() {
                $('#xia1').hide();
            });
$("#xia1").on("mouseenter", function() {
                $(this).show();
            })
$("#xia1").on("mouseleave", function() {
                $(this).hide();
            });
$(".shang").on("mouseenter", function() {
                $('#xia2').show();
            })
$(".shang").on("mouseleave", function() {
                $('#xia2').hide();
            });
$("#xia2").on("mouseenter", function() {
                $(this).show();
            })
$("#xia2").on("mouseleave", function() {
                $(this).hide();
            });  
$(".ke").on("mouseenter", function() {
                $('#xia3').show();
            })
$(".ke").on("mouseleave", function() {
                $('#xia3').hide();
            });
$("#xia3").on("mouseenter", function() {
                $(this).show();
            })
$("#xia3").on("mouseleave", function() {
                $(this).hide();
            });
$(".guan").on("mouseenter", function() {
                $('#xia4').show();
            })
$(".guan").on("mouseleave", function() {
                $('#xia4').hide();
            });
$("#xia4").on("mouseenter", function() {
                $(this).show();
            })
$("#xia4").on("mouseleave", function() {
                $(this).hide();
            });     