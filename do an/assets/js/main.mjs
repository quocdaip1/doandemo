import { API_URL, GET_DATA } from "./utils.js";

// lay data categories 

function buildFitterItem(category) {
    const filterItemTemplate = document.querySelector('#filterCategoryTemplate');
    const filterItemFragment = filterItemTemplate.content.cloneNode(true);
    const filterItemElement = filterItemFragment.querySelector('.category');

    const filterItemTitle = filterItemElement.querySelector('span');
    filterItemTitle.innerText = category.name;

    const filterItemCheckBtn = filterItemElement.querySelector('.check-btn');

    filterItemElement.addEventListener('click', function () {
        const categoriesElement = document.querySelectorAll('.category');
        categoriesElement.forEach(function (categoryElement) {
            categoryElement.classList.remove('active');
        })

        filterItemElement.classList.add('active');
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

    return productElement
}


async function init() {
    // call api get category
    const filterItemWrapper = document.querySelector('.products__filter--categories');

    const categories = await GET_DATA(`${API_URL}/categories`);

    categories.forEach(category => {
        const fitlerElement = buildFitterItem(category);
        filterItemWrapper.appendChild(fitlerElement);
    });

    // get products
    const productList = document.querySelector('.products__list');
    const products = await GET_DATA(`${API_URL}/products`);

    products.forEach((product) => {
        // build product element
        const productElement = buildProductElement(product);
        productList.appendChild(productElement);
    })

}

init();