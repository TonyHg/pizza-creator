import React from 'react';

import '../css/Checkout.scss'

export default function Checkout({pizzas}) {
  const checkoutStyle = "checkout-card col-3 shadow";
  return <div className={checkoutStyle}>
    Checkout
    <ul>
      {pizzas.map(pizza => 
        <li key={pizza.id}>
          pizza {pizza.id} : {pizza.size}, {pizza.sauce}, {pizza.cheese}
          <ul>
            {pizza.toppings.map(topping =>
              <li key={topping.name}>
                {topping.name}
              </li>)}
          </ul>
        </li>
        )}
    </ul>
  </div>
}