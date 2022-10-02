const cartSection = document.querySelector('.cart-section');

const productsCart = [

]
const buildElementCart = (product) => {
    const productCartTemplate = document.querySelector('#productCartTemplate');
    const fragment = productCartTemplate.content.cloneNode(true);
    const productCartElement = fragment.querySelector('.cart-product');


    const productCartName = productCartElement.querySelector('h4 a');
    productCartName.innerText = product.productName;

    const productCartPrices = productCartElement.querySelector('.price');
    productCartPrices.innerText = product.price;

    const productCartimg = productCartElement.querySelector('.cart-product__image img');
    productCartimg.src = product.image;


    return productCartElement;
}


const buildProductsCart = () => {
    const cartWrapper = document.querySelector('.cart-products');
    cartWrapper.innerText = '';
    productsCart.forEach(product => {
        const productElement = buildElementCart(product);
        cartWrapper.appendChild(productElement);
    })
    
}


export function addToCart(product){
    cartSection.classList.add('active')
    const productIndex = productsCart.findIndex(function (cartProduct){
        return cartProduct.id === product.id;
    })
    if(productIndex !== -1){
        productsCart[productIndex].quantity = productsCart[productIndex].quantity + 1;
        buildProductsCart();
        return;
    }
    const newProduct = {
        ...product,
        quantity: 1
    };

    productsCart.push(newProduct);
    buildProductsCart();
}