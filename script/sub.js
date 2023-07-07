// sub.js
$(function(){
    // 마우스 호버시 메뉴바 나타내기
    $('nav .depth1 > li').hover(
        function(){
            $('.depth2').addClass('active');
        },
        function(){
            $('.depth2').removeClass('active');
        }
    )
    $('#products').bxSlider({
        slideWidth: 615,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        // slideMargin: 7
    });
});