"use strict";


$(document).ready(function () {

    $('.single-item').slick({
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        prevArrow: null,
        nextArrow: null,
    });

    $('.single-item_info_text').slick({
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        prevArrow: '<button class="slick-prev hvr-bounce-out"></button>',
        nextArrow: '<button class="slick-next hvr-bounce-out"></button>',
    });

    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',
    });

    $('.responsive').slick({
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',
        infinite: false,
        speed: 800,
        slidesToShow: 5.2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

});


window.onload = function () {

    let popUp = document.getElementById('container__pop_up_partners');
    let partners = document.getElementById('partners');
    let partners_close = document.getElementById('partners_close');
    let container__pop_up_thanks = document.getElementById('container__pop_up_thanks');
    let button__pop_up_thanks = document.getElementById('button__pop_up_thanks');
    let thanks_close = document.getElementById('thanks_close');
    let name_button_form = document.getElementById('name_button_form');
    let clients_request_button = document.getElementById('clients_request_button');
    let clients_request = document.getElementById('clients_request');
    let clients_request_close = document.getElementById('clients_request_close');


    // Открытие поп апа по ссылке партнеры блок связи
    partners.onclick = function () {
        popUp.style.display = 'flex';

    };

    // Закрытие по крестику в форме связи клиента
    partners_close.onclick = function () {
        popUp.style.display = 'none';

    };

    // Одновременное закрытие по крестику в форме поп апа,
    // формы спасибо и формы связи клиента
    thanks_close.onclick = function () {
        container__pop_up_thanks.style.display = 'none';
        popUp.style.display = 'none';
        clients_request.style.display = 'none';
    };

    clients_request_close.onclick = function () {
        clients_request.style.display = 'none';

    };

    clients_request_button.onclick = function () {
        clients_request.style.display = 'flex'

    };


    NodeList = window.NodeList;

    NodeList.prototype.each = function (callback) {
        this.forEach(function (elm, index) {
            callback.call(elm, elm, index);
        });
        return this;
    };

    ["focusin", "focusout", "load", "beforeunload", "unload", "change", "click", "dblclick", "focus", "blur", "reset", "submit", "resize", "scroll", "mouseover", "mouseout", "mouseup", "mousedown", "mouseenter", "mousemove", "mouseleave", "contextmenu", "wheel", "keydown", "keypress", "keyup", "select"].forEach(function (name, index) {

        NodeList.prototype[name] = function (callback) {
            this.each(function (elm, index) {
                this.addEventListener(name, callback);
            });
            return this;
        };

    });

    document.querySelectorAll('.name_button').click(function (event) {
        event.preventDefault();

        let choice = container__pop_up_thanks.style.display = 'flex';
        // let choice1 = clients_request.style.display = 'flex';
        if (choice) {
            return true;
        }


    });


}

new WOW().init({
    animateClass: 'animate__animated',

});
