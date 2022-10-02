$('.featured-product-list').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3
});



// pre btn
const prevBtn = $('.featured-product-list .slick-prev')
prevBtn.html('<i class="fa-solid fa-chevron-left"></i>')

// next btn
const nextBtn = $('.featured-product-list .slick-next')
nextBtn.html('<i class="fa-solid fa-chevron-right"></i>')
