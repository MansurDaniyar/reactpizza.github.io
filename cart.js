let paymentBtn = document.querySelector('#payment')

paymentBtn.addEventListener('click', function() {
    window.location.href = './cart_off.html'
})

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.pizza_1, .pizza_2, .pizza_3');

    items.forEach(item => {
        const minusButton = item.querySelector('.minus');
        const plusButton = item.querySelector('.plus');
        const quantityElement = item.querySelector('.quantity');
        const priceElement = item.querySelector('h2');
        
        minusButton.addEventListener('click', function() {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            } else {
                quantityElement.textContent = 0;
            }
            updateCart();
        });

        plusButton.addEventListener('click', function() {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateCart();
        });
    });

    function updateCart() {
        let totalCount = 0;
        let totalPrice = 0;

        items.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const price = parseInt(item.querySelector('h2').textContent);

            totalCount += quantity;
            totalPrice += quantity * price;
        });

        document.getElementById('count').innerHTML = `Всего пицц: <b>${totalCount} шт.</b>`;
        document.getElementById('price').innerHTML = `Сумма заказа: <b>${totalPrice} KZT</b>`;
    }

    updateCart();

    const paymentLink = document.getElementById('payment');
    paymentLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Redirecting to payment...');
    });
});
