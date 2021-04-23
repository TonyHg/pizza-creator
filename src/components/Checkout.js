import React from 'react';

import '../css/Checkout.scss'


export default function Checkout({pizzas, total}) {
  const checkoutStyle = "checkout-card col-3 shadow d-flex flex-column";
  const checkoutTitleStyle = "checkout-title";
  const checkoutPriceStyle = "checkout-price mt-auto mb-3";
  

  return <div className={checkoutStyle}>
    <div className={checkoutTitleStyle}>Checkout</div>
    <ul>
      {pizzas.map(pizza => 
        <li key={pizza.id}>
          Pizza: {pizza.size && pizza.size.size} {pizza.sauce} {pizza.cheese}
          <ul>
            {pizza.toppings.map(topping =>
              <li key={topping.name}>
                {topping.name}
              </li>)}
          </ul>
        </li>
        )}
    </ul>
    <div className={checkoutPriceStyle}>Total price: <span>{total}$</span></div>
  </div>
}