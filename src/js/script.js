$(document).ready(function () {
    var i = 4;
    var first = $('.slider-image:eq(0)');
    var second = $('.slider-image:eq(1)');
    var third = $('.slider-image:eq(2)');
    var fourth = $('.slider-image:eq(3)');
    var sliderHeight = $('.slider-image');
    var elements = [first, second, third, fourth];
    console.log(sliderHeight);
    setInterval(sliderchange, 8000);
    function sliderchange() {

        var indeks = i % 4;
        elements[indeks].removeClass('nie');
        if (indeks != 3) {
            elements[indeks + 1].animate({ 'left': '0' }, 'slow');
            elements[indeks].animate({ 'left': '-7000px' }, 'slow');
            
        } else {
            elements[indeks - 3].animate({ 'left': '0' }, 'slow');
            elements[indeks].animate({ 'left': '-7000px' }, 'slow');
        }
        elements[indeks].addClass('nie');
        elements[indeks].animate({ 'left': '7000px' },10);
        i = i + 1;

    }
    function sleepFor( sleepDuration ){
        var now = new Date().getTime();
        while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
    }

    checkHeight();

    function checkHeight(){
        var height = sliderHeight.height();
        var windowsize = $(window).width();
        console.log(height);
        $('.slider').height(height);
        if(windowsize < 750){
            $('#last-image').removeClass('order-first');
        }else{
            $('#last-image').addClass('order-first');
        }
    }
    $(window).resize(checkHeight);


});