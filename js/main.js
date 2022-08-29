/* Change Nav Bar Background Color */
let aboutOffset = $("#about").offset().top;
$(window).scroll(function(){
    let currentOffset = $(window).scrollTop();
    if(currentOffset > aboutOffset){
        $(".navbar").css({ 'backgroundColor': '#708090', 'transition': "0.5s all" });
    }else{
        $('.navbar').css({ 'backgroundColor': 'transparent', 'transition': "0.5s all" });
    }
});

/* Display the Client Review */
$(".client-img").dblclick(function(){
    $(this).siblings().css("display","block")
});

/* Calling the plugin function */
$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
});

/* Smoothing motion to sections */
$(".nav-link").click(function(){
    let currentLink = $(this).attr("href");
    console.log(currentLink);
    let currentOffset = $(currentLink).offset().top;
    $("body,html").animate({screenTop:currentOffset},2000);
});
