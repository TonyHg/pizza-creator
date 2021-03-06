import React from 'react';

import '../css/Checkout.scss'


export default function Checkout({pizzas, total}) {
  const checkoutStyle = "checkout-card col-3 shadow-lg d-flex flex-column";
  const checkoutTitleStyle = "checkout-title";
  const checkoutListStyle = "checkout-list";
  const checkoutPriceStyle = "checkout-price mt-auto mb-3";
  const pizzaStyle = "checkout-pizza";
  const toppingStyle = "checkout-topping";
  

  return <div className={checkoutStyle}>
    <div className={checkoutTitleStyle}>Checkout</div>
    <ul className={checkoutListStyle}>
      {pizzas.map(pizza => 
        <li key={pizza.id} className={pizzaStyle}>
          Pizza - {pizza.size && pizza.size.size} <span className="font-italic">{pizza.sauce && pizza.sauce.name}</span> {pizza.cheese && pizza.cheese.name}
          <ul>
            {pizza.toppings.map(topping =>
              <li key={topping.name} className={toppingStyle}>
                {topping.name}
              </li>)}
          </ul>
        </li>
        )}
    </ul>
    <div className={checkoutPriceStyle}>Total price: <span>{total}$</span></div>
  </div>
}