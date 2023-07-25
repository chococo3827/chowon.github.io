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
        minSlides: 1,
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

    // 스크롤 내리면 올리기 버튼 나타나기
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $('#top').addClass('active');
        }else{
            $('#top').removeClass('active');
        }
    })
    // 스크롤 부드럽게 올리기
    $('#top .upto').click(function(){
        $('html, body').animate({scrollTop : 0}, 700);
        return false;
    })
});

// 모바일 버전 메뉴 나타내기
$(function(){
    // $('nav .depth1').hide();
    $('#m_menu').click(function(){
        $('nav .depth1').slideToggle('fast');
    })

    $('.depth1 li').click(function(){
        $(this).children('.depth2').slideToggle('fast');

        if($(this).children('.plus').hasClass('active')){
            $(this).children('.plus').removeClass('active');
            $(this).children('.minus').addClass('active');
        }
        else{
            $(this).children('.minus').removeClass('active');
            $(this).children('.plus').addClass('active');
        }
    })
})