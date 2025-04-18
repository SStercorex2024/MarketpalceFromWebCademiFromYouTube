import Swiper from 'swiper/bundle';

function swiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1.5,
        spaceBetween: 12,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        breakpoints: {
            520: {
                slidesPerView: 4.5,
                spaceBetween: 24
            }
        }
    });
}

export default swiper;