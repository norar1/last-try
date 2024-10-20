const products = [
    { id: 1, name: 'Apple', price: 25.50, image: "apple.jpg" },
    { id: 1, name: 'Apple', price: 25.50, Image: "apple.jpg" },
    { id: 1, name: 'Apple', price: 25.50, Image: "apple.jpg" },
    { id: 1, name: 'Apple', price: 25.50, Image: "apple.jpg" },
    { id: 1, name: 'Apple', price: 25.50, Image: "apple.jpg" },
    { id: 1, name: 'Apple', price: 25.50, Image: "apple.jpg" },
    { id: 1, name: 'Apple', price: 25.50, Image: "apple.jpg" },
    { id: 1, name: 'Apple', price: 25.50, Image: "apple.jpg" },
    { id: 1, name: 'Apple', price: 25.50, Image: "apple.jpg" },
    { id: 1, name: 'Apple', price: 25.50, Image: "apple.jpg" }
]


const productContainer = document.getElementByid('product-container');

products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    productCard.innerHTML = `
    img src="${product.image} alt=${product.name} class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <div class="product-actions">
                <button class="buy" data-item-id="${product.id}">Buy</button>
                <button class="add-to-cart" data-item-id="${product.id}">Add to Cart</button>
            </div>`
})