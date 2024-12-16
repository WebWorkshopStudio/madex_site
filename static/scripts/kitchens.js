"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // Инициализация слайдеров с использованием jQuery Slick
    $(window).on("load", function () {
        $(".slider-for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: ".slider-nav"
        });

        $(".slider-nav").slick({
            prevArrow: '<button class="slick-prev"></button>',
            nextArrow: '<button class="slick-next"></button>',
            slidesToShow: 4.2,
            slidesToScroll: 1,
            asNavFor: ".slider-for",
            dots: false,
            focusOnSelect: true
        });

        $(".slider-for_elements").slick({
            slidesToShow: 1,
            prevArrow: '<button class="slick-prev"></button>',
            nextArrow: '<button class="slick-next"></button>',
            fade: false,
            autoplay: true,
            autoplaySpeed: 3000
        });
    });

    // Переменные для попапов
    const popUpKitchens = document.getElementById("pop_up_kitchens");
    const closePopUpKitchens = document.getElementById("close");
    const elementsPopUp = document.getElementById("elements");
    const closeElements = document.getElementById("close_elements");

    let currentGallery = [];  // Хранение данных о галерее для второго попапа

    // Обработчик клика на карточки товаров
    document.querySelectorAll(".kitchens").forEach((card) => {
        card.addEventListener("click", function () {
            const productId = card.getAttribute("data-product-id"); // Предположим, что у каждой карточки есть атрибут с id товара
            fetch(`/kitchen/${productId}/`)  // Запрос на сервер для получения данных о товаре
                .then(response => response.json())
                .then(data => {
                    // Обновляем содержимое попапа
                    document.getElementById('productName').textContent = data.title;
                    document.getElementById('productStyle').textContent = data.style;
                    document.getElementById('productFacade_material').textContent = data.facade_material;
                    document.getElementById('productBody_material').textContent = data.body_material;
                    document.getElementById('productTable_top').textContent = data.table_top;
                    document.getElementById('productAccessories').textContent = data.accessories;
                    document.getElementById('productDescription').textContent = data.description;
                    document.getElementById('productPrice').textContent = data.price;

                    currentGallery = data.gallery
                    
                    const sliderFor = document.getElementById('slider-for');
                const sliderNav = document.querySelector('.slider-nav');
                
                // Уничтожаем слайдеры
                if ($(sliderFor).hasClass('slick-initialized')) {
                    $(sliderFor).slick('unslick');
                }

                if ($(sliderNav).hasClass('slick-initialized')) {
                    $(sliderNav).slick('unslick');
                }

                // Очищаем контейнеры
                if (sliderFor) {
                    sliderFor.innerHTML = '';
                } else {
                    console.error('sliderFor не найден');
                }

                if (sliderNav) {
                    sliderNav.innerHTML = '';
                } else {
                    console.error('sliderNav не найден');
                }

                // Динамически заполняем слайдеры изображениями
                if (Array.isArray(data.gallery) && data.gallery.length > 0) {
                    data.gallery.forEach((imageUrl) => {
                        const imgFor = document.createElement('img');
                        imgFor.classList.add('slider-for_img');
                        imgFor.src = imageUrl;
                        sliderFor.appendChild(imgFor);

                        const imgNav = document.createElement('img');
                        imgNav.classList.add('slider-nav_img');
                        imgNav.src = imageUrl;
                        sliderNav.appendChild(imgNav);
                    });

                    // Реинициализация слайдеров
                    $(sliderFor).slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: false,
                        asNavFor: ".slider-nav"
                    });

                    $(sliderNav).slick({
                        slidesToShow: 4.2,
                        slidesToScroll: 1,
                        asNavFor: ".slider-for",
                        dots: false,
                        focusOnSelect: true,
                        prevArrow: '<button class="slick-prev"></button>',
                        nextArrow: '<button class="slick-next"></button>',
                    });
                } else {
                    console.warn('Галерея пуста или отсутствует.');
                }

                // Показываем попап
                popUpKitchens.style.display = "flex";
            })
            .catch(error => console.error('Ошибка при получении данных:', error));
    });
});

    // Закрытие попапа кухонь
    closePopUpKitchens?.addEventListener("click", function () {
        popUpKitchens.style.display = "none";
    });

    // Открытие второго попапа (дополнительные элементы)
    document.getElementById("slider-for")?.addEventListener("click", function () {
        elementsPopUp.style.display = "flex";

        // Динамически заполняем слайдер в попапе "elements"
        const sliderForElements = document.getElementById("slider-for-elements");
        sliderForElements.innerHTML = '';  // Очищаем слайдер перед добавлением новых изображений

        currentGallery.forEach((imageUrl) => {
            const imgFor = document.createElement('img');
            imgFor.classList.add('slider-for_img_elements');
            imgFor.src = imageUrl;
            sliderForElements.appendChild(imgFor);
        });

        // Инициализация слайдера для элементов, если он еще не был инициализирован
        if ($(".slider-for_elements").hasClass('slick-initialized')) {
            $(".slider-for_elements").slick("refresh");
        } else {
            $(".slider-for_elements").slick({
                slidesToShow: 1,
                prevArrow: '<button class="slick-prev"></button>',
                nextArrow: '<button class="slick-next"></button>',
                fade: false,
                autoplay: true,
                autoplaySpeed: 3000
            });
        }
    });

    // Закрытие второго попапа
    closeElements?.addEventListener("click", function () {
        elementsPopUp.style.display = "none";
    });

    // Управление состоянием кнопок фильтров
    const btnOll = document.getElementById("btn_oll");
    const btnModern = document.getElementById("btn_modern");
    const btnClassic = document.getElementById("btn_classic");

    const toggleActive = (activeButton) => {
        [btnOll, btnModern, btnClassic].forEach((button) => {
            if (button) {
                button.classList.toggle("active", button === activeButton);
            }
        });
    };

    btnOll?.addEventListener("click", () => toggleActive(btnOll));
    btnModern?.addEventListener("click", () => toggleActive(btnModern));
    btnClassic?.addEventListener("click", () => toggleActive(btnClassic));
});
