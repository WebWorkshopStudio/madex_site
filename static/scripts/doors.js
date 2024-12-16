"use strict";

$(window).on('load', function () {

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',
        slidesToShow: 4.6,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        // centerMode: false,
        focusOnSelect: true
    });

    $('.slider-for_elements').slick({
        slidesToShow: 1,
        // slidesToScroll: 1,
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',
        fade: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.kitchens').click(function () {
        $('.slider-nav').slick('refresh');
        $('.slider-for').slick('refresh');
    });

    $('.container__pop_up_kitchens').click(function () {
        $('.slider-for_elements').slick('refresh');
    });


    let btn_oll = document.getElementById('btn_oll');
    let btn_modern = document.getElementById('btn_modern');
    let btn_classic = document.getElementById('btn_classic');

    let doors = document.getElementById('doors');
    let container__pop_up_doors = document.getElementById('pop_up_doors');

    let close = document.getElementById('close');

    doors.onclick = function (event) {
        container__pop_up_doors.style.display = 'flex';
    };

    let slider_for_doors = document.getElementById('slider-for_doors');
    let elements_doors = document.getElementById('elements_doors');

    slider_for_doors.onclick = function () {
        elements_doors.style.display = 'flex';
    };

    let close_elements = document.getElementById('close_elements');

    close_elements.onclick = function () {
        elements_doors.style.display = 'none';
    };

    close.onclick = function (event) {
        container__pop_up_doors.style.display = 'none';
    };

    btn_oll.onclick = function () {
        btn_modern.classList.remove('active');
        btn_classic.classList.remove('active');
        btn_oll.classList.toggle('active');
    };

    btn_modern.onclick = function () {
        btn_oll.classList.remove('active');
        btn_classic.classList.remove('active');
        btn_modern.classList.toggle('active');
    };

    btn_classic.onclick = function () {
        btn_modern.classList.remove('active');
        btn_oll.classList.remove('active');
        btn_classic.classList.toggle('active');
    };

});