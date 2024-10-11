document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('pizzaForm');
    const totalPriceElement = document.getElementById('totalPrice');
    const orderButton = document.getElementById('orderNow');

    form.addEventListener('change', function () {
        let totalPrice = 0;

        // Calculate price for selected pizza size
        const pizzaSize = form.querySelector('#pizza-size');
        if (pizzaSize) {
            const pizzaPrice = parseFloat(pizzaSize.options[pizzaSize.selectedIndex].getAttribute('data-price'));
            console.log("Selected pizza size price:", pizzaPrice);
            totalPrice += pizzaPrice;
        }

        // Calculate price for selected crust
        const crust = form.querySelector('#crust');
        if (crust) {
            const crustPrice = parseFloat(crust.options[crust.selectedIndex].getAttribute('data-price'));
            console.log("Selected crust price:", crustPrice);
            totalPrice += crustPrice;
        }

        // Calculate price for selected toppings
        const toppings = form.querySelectorAll('input[name="toppings"]:checked');
        toppings.forEach(function (topping) {
            const toppingPrice = parseFloat(topping.getAttribute('data-price'));
            console.log("Selected topping price:", toppingPrice);
            totalPrice += toppingPrice;
        });

        console.log("Total price:", totalPrice);
        totalPriceElement.textContent = totalPrice.toFixed(2);
    });
    orderButton.addEventListener('click', function () {
        // Get the final total price
        const finalPrice = totalPriceElement.textContent;

        // Show a confirmation or submit order
        alert("Your order has been placed! Total: $" + finalPrice);

        // Optionally, log the order details to the console
        console.log("Order placed! Total price: $" + finalPrice);
    });
});

