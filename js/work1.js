$(document).ready(function(){
    //標籤定點
    for(let i=1; i <= $('.tab').length; i++){
        $(`.tab${i}`).click(function() {
            $('html,body').animate({ scrollTop: $(`#tab${i}`).offset().top }, 500)
        });
    }
    $(`.tab4`).click(function() {
        $('html,body').animate({ scrollTop: $(`#tab4`).offset().top -120 }, 500)
    });
    $('.logo').click(function(){
        $('html,body').animate({ scrollTop: $(`section#top`).offset().top }, 500)
    })
    $('#contact-btn').click(function(){
        $('html,body').animate({ scrollTop: $(`section#tab4`).offset().top -120}, 500)
    })

    $('#burger').click(function(){
        $('#menu').fadeIn(function(){
            $('#menu').css('display','flex');
        });
        $('html,body').css('overflow','hidden');
    })
    $('.fade-out-effect').click(function(){
        $('.fade-out-effect').fadeOut();
        $('html,body').css('overflow','auto');
    })
    // 輪播套件
    var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: ".mySwiper1 .swiper-button-next",
            prevEl: ".mySwiper1 .swiper-button-prev",
        },
    });
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        navigation: {
            nextEl: ".mySwiper2 .swiper-button-next",
            prevEl: ".mySwiper2 .swiper-button-prev",
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
        },
    });
    function menuEffect(){
        if($('.burger').css('display') == 'none'){
            $('ul#menu').removeClass('fade-out-effect');
            $('ul#menu').css('display','block');
        }else{
            $('ul#menu').addClass('fade-out-effect');
            $('ul#menu').css('display','none');
        }
    }
    menuEffect();
    $( window ).resize(function() {
        menuEffect();
    });
})