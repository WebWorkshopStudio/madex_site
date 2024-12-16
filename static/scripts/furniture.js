"use strict";

$(document).ready(function () {

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
        slidesToShow: 4.1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
    });

    $('.slider-for_elements').slick({
        slidesToShow: 1,
        // prevArrow: '<button class="slick-prev"></button>',
        // nextArrow: '<button class="slick-next"></button>',
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

    let points = $('.arrow_points')



    let furniture_card = document.getElementById('furniture_card');
    let container__pop_up_furniture = document.getElementById('pop_up_furniture');
    let elements_furniture = document.getElementById('elements_furniture');
    let slider_for = document.getElementById('slider-for');
    let close = document.getElementById('close');

    furniture_card.onclick = function () {
        container__pop_up_furniture.style.display = 'flex';
    };

    slider_for.onclick = function () {
        elements_furniture.style.display = 'flex';
    };

    let close_elements = document.getElementById('close_elements');

    close_elements.onclick = function () {
        elements_furniture.style.display = 'none';
    };

    close.onclick = function (event) {
        container__pop_up_furniture.style.display = 'none';
    };

    let start = document.getElementById('start');
    let one = document.getElementById('one');
    let two = document.getElementById('two');
    let three = document.getElementById('three');
    let finish = document.getElementById('finish');

    start.onclick = function () {
        start.classList.toggle('point_active');
        one.classList.remove('point_active');
        two.classList.remove('point_active');
        three.classList.remove('point_active');
        finish.classList.remove('point_active');
        document.getElementById('left').style.opacity = '0.5';
        document.getElementById('right').style.opacity = '1';

    };

    one.onclick = function () {
        start.classList.remove('point_active');
        one.classList.toggle('point_active');
        two.classList.remove('point_active');
        three.classList.remove('point_active');
        finish.classList.remove('point_active');
        document.getElementById('left').style.opacity = '1';
        document.getElementById('right').style.opacity = '1';
    };

    two.onclick = function () {
        start.classList.remove('point_active');
        one.classList.remove('point_active');
        two.classList.toggle('point_active');
        three.classList.remove('point_active');
        finish.classList.remove('point_active');
        document.getElementById('left').style.opacity = '1';
        document.getElementById('right').style.opacity = '1';
    };

    three.onclick = function () {
        start.classList.remove('point_active');
        one.classList.remove('point_active');
        two.classList.remove('point_active');
        three.classList.toggle('point_active');
        finish.classList.remove('point_active');
        document.getElementById('left').style.opacity = '1';
        document.getElementById('right').style.opacity = '1';

    };

    finish.onclick = function () {
        start.classList.remove('point_active');
        one.classList.remove('point_active');
        two.classList.remove('point_active');
        three.classList.remove('point_active');
        finish.classList.toggle('point_active');
        document.getElementById('right').style.opacity = '0.5';
        document.getElementById('left').style.opacity = '1';

    };


});