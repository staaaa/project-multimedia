$(document).ready(function(){
    $(".btn1").click(function() {
        $(".c1").css("display","block");
        $(".c1").css("visibility","visible");
        $(".c1").animate({
            height:"100%",
        },0);
        $('html,body').animate({
            scrollTop: $(".c1").offset().top},
            'slow'); 
    });
    $(".btn2").click(function() {
        $(".c2").css("display","block");
        $(".c2").css("visibility","visible");
        $(".c2").animate({
            height:"100%",
        },0);
        $('html,body').animate({
            scrollTop: $(".c2").offset().top - 12.5},
            'slow');
    });
    $(".btn3").click(function() {
        $(".c3").css("display","block");
        $(".c3").css("visibility","visible");
        $(".c3").animate({
            height:"100%",
        },0);
        $('html,body').animate({
            scrollTop: $(".c3").offset().top - 12.5},
            'slow');
    });
    $(".btn4").click(function() {
        $(".c4").css("display","block");
        $(".c4").css("visibility","visible");
        $(".c4").animate({
            height:"100%",
        },0);
        $('html,body').animate({
            scrollTop: $(".c4").offset().top - 12.5},
            'slow');
    });
    $(".btn5").click(function() {
        $(".c5").css("display","block");
        $(".c5").css("visibility","visible");
        $(".c5").animate({
            height:"100%",
        },0);
        $('html,body').animate({
            scrollTop: $(".c5").offset().top - 12.5},
            'slow');
    });
    $(".btn6").click(function() {
        $(".c6").css("display","block");
        $(".c6").css("visibility","visible");
        $(".c6").animate({
            height:"100%",
        },0);
        $('html,body').animate({
            scrollTop: $(".c6").offset().top - 12.5},
            'slow');
    });
    $(".go_up").click(function() {
        $('html,body').animate({
            scrollTop: $("body").offset().top},
            'slow');
    });
});