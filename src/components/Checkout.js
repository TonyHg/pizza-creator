import React from 'react';

export default function Checkout({pizzas}) {
  const checkoutStyle = "col-3";
  return <div className={checkoutStyle}>
    Checkout
    <ul>
      {pizzas.map(pizza => 
        <li>
          pizza {pizza.id} : {pizza.size}, {pizza.sauce}, {pizza.cheese}, {pizza.toppings}
        </li>
        )}
    </ul>
  </div>
}