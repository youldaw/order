$(function () {

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar-collapse').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    $(window).on("scroll", function () {
        let secTop = $(".program-sec").offset().top;
        let secBottom = secTop + $(".program-sec").outerHeight();
        let scroll = $(window).scrollTop();
        let winHeight = $(window).height();

        if (scroll + winHeight > secTop + 100 && scroll < secBottom) {
            $(".program-left").addClass("active");
        } else {
            $(".program-left").removeClass("active");
        }
    });

    $(window).on("scroll", function () {
        $(".program-right").each(function () {
            let elTop = $(this).offset().top;
            let elBottom = elTop + $(this).outerHeight();
            let scroll = $(window).scrollTop();
            let winHeight = $(window).height();

            // agar element ekranda ko‘rinsa
            if (scroll + winHeight > elTop + 100 && scroll < elBottom - 50) {
                $(this).addClass("visible");
            } else {
                $(this).removeClass("visible");
            }
        });
    });


    $('header .nav-link').on('click', function (e) {
        e.preventDefault(); // Запрещаем переход по ссылке
        var target = $(this).attr('href'), // Берем значение из ссылки как цель id="second-screen"
            destination = $(target).offset().top; // Ищем верхнюю координату у нашей цели

        $('body,html').animate({ scrollTop: destination }, 500); // Плавно проматываем до цели
    });




    document.querySelectorAll('.review-slide').forEach((slideEl) => {
        const swiperContainer = slideEl;
        const prevBtn = slideEl.closest('.review-box').querySelector('.swiper-button-prev');
        const nextBtn = slideEl.closest('.review-box').querySelector('.swiper-button-next');

        new Swiper(swiperContainer, {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1.4,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        });
    });
    

});

