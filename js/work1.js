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
    var swiper1 = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    function carousel(){
        if($(window).width() < 576){
            var swiper2 = new Swiper(".mySwiper2", {
                slidesPerView: 1,
                spaceBetween: 30,
                slidesPerGroup: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
            $('#mySwiper2').css('width','80%');
        }else if($(window).width() < 768 && $(window).width() >= 576){
            $('#mySwiper2').css('width','100%');
            var swiper2 = new Swiper(".mySwiper2", {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerGroup: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }else if($(window).width() < 992 && $(window).width() >= 768){
            $('#mySwiper2').css('width','100%');
            var swiper2 = new Swiper(".mySwiper2", {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }else{
            $('#mySwiper2').css('width','100%');
            var swiper2 = new Swiper(".mySwiper2", {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 1,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }
    }
    function menuEffect(){
        if($('.burger').css('display') == 'none'){
            $('ul#menu').removeClass('fade-out-effect');
            $('ul#menu').css('display','block');
        }else{
            $('ul#menu').addClass('fade-out-effect');
            $('ul#menu').css('display','none');
        }
    }
    carousel();
    menuEffect();
    $( window ).resize(function() {
        carousel();
        menuEffect();
    });
})