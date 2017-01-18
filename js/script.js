/*global $, alert, console*/
$(function () {
    'use strict';
    
    //Trigger NiceScroll
    $('html').niceScroll({
        cursorcolor: '#76c38f',
        cursorwidth: 10,
        cursorborderradius: 70,
        cursorborder: '1px soled #76c38f'
    });
    
    //Change Header Height
    $('header').height($(window).height());
    $('#sliderNext').css('marginTop', $('header').height() / 2 - 80);
    $('#sliderPrev').css('marginTop', $('header').height() / 2 - 80);
    $(window).resize(function () {
        $('header').height($(window).height());
        $('#sliderNext').css('marginTop', $('header').height() / 2 - 80);
        $('#sliderPrev').css('marginTop', $('header').height() / 2 - 80);
    });

    //Trigger Bx Slider
    $('.slider').bxSlider({
        nextSelector: '#sliderNext',
        prevSelector: '#sliderPrev',
        controls: true,
        nextText: '<img src="css/images/next.png" height="25" width="25"/>',
        prevText: '<img src="css/images/prev.png" height="25" width="25"/>',
        pager: false,
        slideWidth: 5000,
        minSlides: 2,
        maxSlides: 2
    });
        
    //Loading
    $("#loading").fadeOut();
    $("#loading-overlay").delay(100).fadeOut("slow");
        
});