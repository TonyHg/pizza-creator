import React from 'react';

import '../css/Topping.scss';
import Bacon from '../assets/svg/bacon.svg';

const toppingType = {
  MEAT: "Meat",
  VEGGIE: "Veggie"
}

const toppingTypeArray = [
  toppingType.MEAT, toppingType.VEGGIE
]

const toppings = [
  { name: 'Anchovy', price: 1, type: toppingType.MEAT},
  { name: 'Bacon', price: 1.20, type: toppingType.MEAT},
  { name: 'Beef', price: 1.20, type: toppingType.MEAT},
  { name: 'Chorizo', price: 1, type: toppingType.MEAT},
  { name: 'Chicken', price: 1, type: toppingType.MEAT},
  { name: 'Merguez', price: 1, type: toppingType.MEAT},
  { name: 'Nugget', price: 1, type: toppingType.MEAT},
  { name: 'Salmon', price: 1.50, type: toppingType.MEAT},

  { name: 'Ananas', price: 0, type: toppingType.VEGGIE},
  { name: 'Basil', price: 0.5, type: toppingType.VEGGIE},
  { name: 'Egg', price: 1, type: toppingType.VEGGIE},
  { name: 'Mush', price: 0.75, type: toppingType.VEGGIE},
  { name: 'Onion', price: 0.25, type: toppingType.VEGGIE},
  { name: 'Olive', price: 0.25, type: toppingType.VEGGIE},
  { name: 'Pepper', price: 0.5, type: toppingType.VEGGIE},
  { name: 'Potato', price: 1, type: toppingType.VEGGIE},
]

export default function Toppings({ onClickTopping, pizza }) {
  const toppingsStyle = "toppings-card col-3 pt-1 shadow-lg";
  const toppingSectionStyle = "mb-2";
  const toppingSectionTitleStyle = "topping-selection-title";
  const toppingFlexStyle = "d-flex flex-wrap";
  const toppingItemStyle = "topping-item m-2 mt-3";
  const toppingPriceStyle = "topping-price w-75 m-auto shadow"

  return <div className={toppingsStyle}>
    {
      toppingTypeArray.map(type => 
      <div className={toppingSectionStyle} key={type}>
        <span className={toppingSectionTitleStyle}>{type}</span>
        <div className={toppingFlexStyle}>
          {toppings.filter(topping => topping.type === type).map(t => 
            <div key={t.name} className={toppingItemStyle.concat(pizza.toppings.includes(t) ? " active": "")} onClick={() => onClickTopping(t)}>
              <div className="w-100 h-75 d-flex">
                <img src={Bacon} className="w-75 h-75 m-auto"/>
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