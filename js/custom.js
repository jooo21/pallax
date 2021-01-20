$(document).ready(function(){
    var pos2 = $("#intro").offset().top;   

    $(window).on("scroll",function(){
        var scroll = $(this).scrollTop();
        var current_pos = scroll - pos2;     

        var customs = [
            {
                item : ".box1",
                css : {transform: 'translateY('+current_pos+'px)'},
                init : {transform: 'translateY(0px)'}
            },
            {
                item : ".box2",
                css : {transform: 'translateY('+(current_pos*2)+'px)'},
                init : {transform: 'translateY(0px)'}
            },
            {
                item : ".box3",
                css : {transform: 'rotate('+(current_pos/2)+'deg)'},
                init : {transform: 'rotate(0deg)'}
            },
            {
                item : ".box4",
                css : {transform: 'translateX('+(-current_pos/2)+'px)'},
                init : {transform: 'translateX(0px)'}
            }            
        ];

        custom_motion(scroll, customs);              
    });

    function custom_motion(scroll, customs){
        if(scroll >= pos2){
            $(customs).each(function(){
                $(this.item).css(this.css);
            })
        }else{
            $(customs).each(function(){
                $(this.item).css(this.init);
            })
        } 
    }
})