import React from 'react';

import '../css/Topping.scss';
import Anchovy from '../assets/svg/anchovy.svg';
import Basil from '../assets/svg/basil.svg';
import Bacon from '../assets/svg/bacon.svg';
import Chicken from '../assets/svg/chicken.svg';
import Egg from '../assets/svg/fried-egg.svg';
import Pepperoni from '../assets/svg/pepperoni.svg';
import Pineapple from '../assets/svg/pineapple.svg';
import Ham from '../assets/svg/pork-leg.svg';
import Salmon from '../assets/svg/salmon.svg';
import Sausages from '../assets/svg/sausages.svg';
import Nugget from '../assets/svg/nuggets.svg';
import Pepper from '../assets/svg/bell-pepper.svg';
import Mushroom from '../assets/svg/mushroom.svg';
import Olive from '../assets/svg/olives.svg';
import Onion from '../assets/svg/red-onion.svg';
import Potato from '../assets/svg/potato.svg';

const toppingType = {
  MEAT: "Meat",
  VEGGIE: "Veggie"
}

const toppingTypeArray = [
  toppingType.MEAT, toppingType.VEGGIE
]

const toppings = [
  { name: 'Anchovy', price: 1, type: toppingType.MEAT, image: Anchovy},
  { name: 'Bacon', price: 1.20, type: toppingType.MEAT, image: Bacon},
  { name: 'Ham', price: 1.20, type: toppingType.MEAT, image: Ham},
  { name: 'Pepperoni', price: 1, type: toppingType.MEAT, image: Pepperoni},
  { name: 'Chicken', price: 1, type: toppingType.MEAT, image: Chicken},
  { name: 'Merguez', price: 1, type: toppingType.MEAT, image: Sausages},
  { name: 'Nugget', price: 1, type: toppingType.MEAT, image: Nugget},
  { name: 'Salmon', price: 1.50, type: toppingType.MEAT, image: Salmon},

  { name: 'Ananas', price: 0, type: toppingType.VEGGIE, image: Pineapple},
  { name: 'Basil', price: 0.5, type: toppingType.VEGGIE, image: Basil},
  { name: 'Egg', price: 1, type: toppingType.VEGGIE, image: Egg},
  { name: 'Mush', price: 0.75, type: toppingType.VEGGIE, image: Mushroom},
  { name: 'Onion', price: 0.25, type: toppingType.VEGGIE, image: Onion},
  { name: 'Olive', price: 0.25, type: toppingType.VEGGIE, image: Olive},
  { name: 'Pepper', price: 0.5, type: toppingType.VEGGIE, image: Pepper},
  { name: 'Potato', price: 1, type: toppingType.VEGGIE, image: Potato},
]

export default function Toppings({ onClickTopping, pizza }) {
  const toppingsStyle = "toppings-card col-3 pt-1 shadow-lg";
  const toppingSectionStyle = "mb-2";
  const toppingSectionTitleStyle = "topping-selection-title";
  const toppingFlexStyle = "d-flex flex-wrap";
  const toppingItemStyle = "topping-item m-2 mt-3";
  const toppingPriceStyle = "topping-price w-75 m-auto shadow"

  const canAddToppings = (pizza) => {
    return pizza && pizza.size && pizza.sauce && pizza.cheese;
  }

  return <div className={toppingsStyle + (canAddToppings(pizza) ? "" : " disabled")}>
    {
      toppingTypeArray.map(type => 
      <div className={toppingSectionStyle} key={type}>
        <span className={toppingSectionTitleStyle}>{type}</span>
        <div className={toppingFlexStyle}>
          {toppings.filter(topping => topping.type === type).map(t => 
            <div key={t.name} className={toppingItemStyle.concat(pizza.toppings.includes(t) ? " active": "")} onClick={() => canAddToppings(pizza) && onClickTopping(t)}>
              <div className="w-100 h-75 d-flex">
                <img src={t.image} className="w-75 h-75 m-auto"/>
              </div>
              {t.name}
              <div className={toppingPriceStyle}>
                {t.price}$
              </div>
            </div>
          )}
        </div>
      </div>
      )
    }
  </div>
}