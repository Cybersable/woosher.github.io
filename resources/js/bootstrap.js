window._ = require('lodash');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Swiper, {Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

const AboutSwiper = new Swiper('.about-swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.about-swiper-pagination',
        clickable: true,
    }
});

const CleaningSwiper = new Swiper('.cleaning-swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.cleaning-swiper-pagination',
        clickable: true
    }
})

const AboutCountSwiper = new Swiper('.about-count-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: '.about-count-swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    }
})

const modal_toggle_btns = document.querySelectorAll('.modal-form-toggle')
const modal_form = document.getElementById('modal_form')
modal_form && modal_toggle_btns.forEach(el => el.addEventListener('click', function (e) {
        e.preventDefault()
        modal_form.classList.toggle('active')
    })
)

const dropdowns = document.querySelectorAll('.dropdown')
dropdowns.forEach(function (el) {
    let ul = el.parentNode.querySelector('ul')
    if (ul.classList.contains('active')) {
        ul.style.maxHeight = ul.scrollHeight + "px"
        console.log('wtf')
    }
    el.addEventListener('click', function (e) {
        e.preventDefault()
        el.classList.toggle('active')
        ul.classList.toggle('active')
        if (ul.style.maxHeight) {
            ul.style.maxHeight = null;
        } else {
            ul.style.maxHeight = ul.scrollHeight + "px";
        }
    })
})

require('./modules/header')
