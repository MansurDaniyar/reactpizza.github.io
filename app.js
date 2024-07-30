let cartBtn = document.querySelector('.cart_btn')

cartBtn.addEventListener('click', function() {
    window.location.href = './cart.html'
})

const buttons = document.querySelectorAll('.btn');
const totalPriceElement = document.querySelector('.cart_btn .price');
const totalCountElement = document.querySelector('.cart_btn .count');

let totalPrice = 0;
let totalCount = 0;

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        const price = +button.getAttribute('data-price');
        const name = button.getAttribute('data-name');

        totalPrice += price;
        totalCount++;

        totalPriceElement.textContent = totalPrice;
        totalCountElement.textContent = totalCount;

        console.log(`Added ${name} for ${price} KZT. Total items: ${totalCount}, Total price: ${totalPrice} KZT`);
    });
});
