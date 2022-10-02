const cartBtn = $('.cart');
const closeCartBtn = $('.close');
const cartSection = $('.cart-section');
function handleToggleCart() {
    cartSection.toggleClass('active');
}

cartBtn.click(handleToggleCart)

closeCartBtn.click(handleToggleCart)
