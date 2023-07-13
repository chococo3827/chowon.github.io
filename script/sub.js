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

    // 제품 bxslider
    $('#products').bxSlider({
        slideWidth: 615,
        minSlides: 2,
        maxSlides: 3,
        moveSlides: 1,
        // slideMargin: 7
    });

    // shopnow이미지 hover시 크게
    $('.shop').hover(
        function(){
            $('.shop img').addClass('active');
        },
        function(){
            $('.shop img').removeClass('active');
        }
    )
});

// 모바일 버전 메뉴 나타내기
$(function(){
    // $('nav .depth1').hide();
    $('#m_menu').click(function(){
        $('nav .depth1').slideToggle('fast');
    })
})