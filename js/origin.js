$(document).ready(function(){

    var pos2 = $("#intro").offset().top;

    $(window).on("scroll",function(){
        var scroll = $(this).scrollTop();
        var current_pos = scroll - pos2;

        if(scroll >= pos2){
            $(".box1").css({
                transform: 'translateY('+current_pos+'px)'
            });
            $(".box2").css({
                transform: 'translateY('+(current_pos*2)+'px)'
            });
            $(".box3").css({
                transform: 'rotate('+(current_pos/2)+'deg)'
            });
            $(".box4").css({
                transform: 'translateX('+(-current_pos/2)+'px)'
            })
        }else{
            $(".box1").css({
                transform: 'translateY('+0+'px)'
            });
            $(".box2").css({
                transform: 'translateY('+0+'px)'
            });
            $(".box3").css({
                transform: 'rotate('+0+'deg)'
            });
            $(".box4").css({
                transform: 'translateX('+0+'px)'
            })
        }        
    });
});
/*
    pos2에 스크롤이 도달하면 그때부터

    미션1 - box2는 box1보다 2배 빠르게 내려가게
    미션2 - box3는 자기 원래위치에서 계속회전
    미션3  - box4는 왼쪽으로 이동
*/