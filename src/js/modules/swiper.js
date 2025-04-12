import Swiper from 'swiper/bundle';

function swiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 24,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

export default swiper;