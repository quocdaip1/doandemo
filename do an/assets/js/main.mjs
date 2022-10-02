import { addToCart } from "./cart.js";
import { API_URL, GET_DATA } from "./utils.js";

// lay data categories



function buildProductsElements(products) {
    // get product
    const productList = document.querySelector('.products__list');
    productList.innerText = '';
    products.forEach((product) => {
        // build product element
        const productElement = buildProductElement(product);
        productList.appendChild(productElement);
    })

}


function buildFitterItem(category) {
    const filterItemTemplate = document.querySelector('#filterCategoryTemplate');
    const filterItemFragment = filterItemTemplate.content.cloneNode(true);
    const filterItemElement = filterItemFragment.querySelector('.category');

    const filterItemTitle = filterItemElement.querySelector('span');
    filterItemTitle.innerText = category.name;

    const filterItemCheckBtn = filterItemElement.querySelector('.check-btn');

    filterItemElement.addEventListener('click', async function () {
        const categoriesElement = document.querySelectorAll('.category');
        categoriesElement.forEach(function (categoryElement) {
            categoryElement.classList.remove('active');
        })
        
        filterItemElement.classList.add('active');
        let api = `${API_URL}/products`;
        if(category.id){
            api = `${API_URL}/products?category=${category.id}`;
        }

        const products = await GET_DATA(api);
        buildProductsElements(products);
    })

    return filterItemElement
}

// build product element
function buildProductElement(product) {
    const productElementTemplate = document.querySelector('#productTemplate');
    const productElementFragment = productElementTemplate.content.cloneNode(true);
    const productElement = productElementFragment.querySelector('.products__list--product');


    
    const productName = productElement.querySelector('.name');
    productName.innerText = product.productName;

    const productImage = productElement.querySelector('.product__image > img');
    productImage.src = product.image;

    const productPrice = productElement.querySelector('.price');
    productPrice.innerText = product.price;

    const btnaddCart = productElement.querySelector('.product__image--cart');
    btnaddCart.style.cursor = "pointer";
    btnaddCart.addEventListener('click', function(){
        addToCart(product);
    })

    return productElement;
}


async function init() {
    // call api get category
    const filterItemWrapper = document.querySelector('.products__filter--categories');
    const allCategrory = {
        id: null,
        name: 'ALL'
    }

    const categories = await GET_DATA(`${API_URL}/categories`);
    categories.unshift(allCategrory);
    categories.forEach(category => {
        const fitlerElement = buildFitterItem(category);
        filterItemWrapper.appendChild(fitlerElement);
    });

   buildProductsElements();
}

init();