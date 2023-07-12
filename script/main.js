// main js
$(function(){
    // 마우스 호버시 메뉴바 나타내기
    $('nav .depth1 > li').hover(
        function(){
            $('.depth2').addClass('active');
            console.log("click");
        },
        function(){
            $('.depth2').removeClass('active');
        }
    )

    // 메인배너 슬라이더 이미지 fade 효과
    let num = 1;
    setInterval(function(){
        num = num + 1;
        // console.log(num)
        if(num > 2){
            num = 0;
        }
        $('.slider .sliders a').removeClass('active');
        $('.slider .sliders a').eq(num).addClass('active');
    },3000)

    // 스크롤시 brand info글자 fade 효과
    $(window).scroll(function(){
        $('.brand-info #info').each(function(){
            let bottom_of_element = $(this).offset().top + $(this).outerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();

            if(bottom_of_window > bottom_of_element){
                $(this).animate({'opacity' : '1'}, 900);
            }
        })
    })

    // 스크롤시 item fade슬라이드 효과
    $(window).scroll(function(){
        const sct = $(this).scrollTop();

        $('#item1').each(function(){
            const itemOst = $(this).offset().top - 500;
            const itemEffect = $(this).attr('data-effect');
            if(sct >= itemOst){
                $(this).addClass(itemEffect);
            }
        })

        $('#item2').each(function(){
            const itemOst = $(this).offset().top - 500;
            const itemEffect = $(this).attr('data-effect');
            if(sct >= itemOst){
                $(this).addClass(itemEffect);
            }
        })

        $('#item3').each(function(){
            const itemOst = $(this).offset().top - 500;
            const itemEffect = $(this).attr('data-effect');
            if(sct >= itemOst){
                $(this).addClass(itemEffect);
            }
        })

        $('#item4').each(function(){
            const itemOst = $(this).offset().top - 500;
            const itemEffect = $(this).attr('data-effect');
            if(sct >= itemOst){
                $(this).addClass(itemEffect);
            }
        })
    })

    // item menu hover시 opacity 1
    $('#item-menu > div').hover(
        function(){
            $(this).addClass('active');
        },
        function(){
            $(this).removeClass('active');
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

    // best item hover 효과
    $('#item1 a').hover(
        function(){
            $(this).children().addClass('active');
            $('#item1 .itemInfo').css('display', 'block');
        },
        function(){
            $(this).children().removeClass('active');
            $('#item1 .itemInfo').css('display', 'none');
        }
    )
    $('#item2 a').hover(
        function(){
            $(this).children().addClass('active');
            $('#item2 .itemInfo').css('display', 'block');
        },
        function(){
            $(this).children().removeClass('active');
            $('#item2 .itemInfo').css('display', 'none');
        }
    )
    $('#item3 a').hover(
        function(){
            $(this).children().addClass('active');
            $('#item3 .itemInfo').css('display', 'block');
        },
        function(){
            $(this).children().removeClass('active');
            $('#item3 .itemInfo').css('display', 'none');
        }
    )
    $('#item4 a').hover(
        function(){
            $(this).children().addClass('active');
            $('#item4 .itemInfo').css('display', 'block');
        },
        function(){
            $(this).children().removeClass('active');
            $('#item4 .itemInfo').css('display', 'none');
        }
    )
})

// 모바일 버전 메뉴 나타내기
$(function(){
    // $('nav .depth1').hide();
    $('#m_menu').click(function(){
        $('nav .depth1').slideToggle('fast');
    })
})