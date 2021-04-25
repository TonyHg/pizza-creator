import React from 'react';
import { pizzaSize, pizzaSauce, pizzaCheese } from './PizzaCreator';

import '../css/Pizza.scss';

export default function Pizza({pizza, onUpdatePizza, setSize, setSauce, setCheese}) {
  const pizzaCardStyle = "pizza-card shadow m-2 p-5 d-flex flex-column";
  const pizzaReturnStyle = "pizza-return"
  const pizzaChoiceTitleStyle = "pizza-card-title";
  const pizzaRowStyle = "d-flex justify-content-around p-3 h-100";
  const pizzaChoiceStyle = "pizza-choice m-auto";
  const pizzaStyle = "d-flex h-100 w-100";
  const pizzaImageStyle = "m-auto";
  const pizzaHiddenStyle = "pizza-card pizza-hidden";

  if (!pizza) {
    return <div className={pizzaHiddenStyle}>

    </div>
  }

  if (pizza.size === null) {
    return <div className={pizzaCardStyle}>
      <div className={pizzaChoiceTitleStyle}><span className="invisible">⌫</span> Choose the size: </div>
      <div className={pizzaRowStyle}>
        <div className={pizzaChoiceStyle} onClick={() => setSize && setSize(pizzaSize.NORMAL)}>{pizzaSize.NORMAL.size}</div>
        <div className={pizzaChoiceStyle} onClick={() => setSize && setSize(pizzaSize.LARGE)}>{pizzaSize.LARGE.size}</div>
      </div>
    </div>
  }

  if (pizza.sauce === null) {
    return <div className={pizzaCardStyle}>
      <div className={pizzaChoiceTitleStyle}><span className={pizzaReturnStyle} onClick={() => setSize && setSize(null)}>⌫</span> Choose the sauce: </div>
      <div className={pizzaRowStyle}>
        <div className={pizzaChoiceStyle} onClick={() => setSauce && setSauce(pizzaSauce.TOMATO)}>{pizzaSauce.TOMATO}</div>
        <div className={pizzaChoiceStyle} onClick={() => setSauce && setSauce(pizzaSauce.CREME)}>{pizzaSauce.CREME}</div>
      </div>
    </div>
  }

  if (pizza.cheese === null) {
    return <div className={pizzaCardStyle}>
      <div className={pizzaChoiceTitleStyle}><span className={pizzaReturnStyle} onClick={() => setSauce && setSauce(null)}>⌫</span> Do you want cheese: </div>
      <div className={pizzaRowStyle}>
        <div className={pizzaChoiceStyle} onClick={() => setCheese && setCheese(pizzaCheese.CHEESE)}>{pizzaCheese.CHEESE}</div>
        <div className={pizzaChoiceStyle} onClick={() => setCheese && setCheese(pizzaCheese.NO_CHEESE)}>{pizzaCheese.NO_CHEESE}</div>
      </div>
    </div>
  }

  return <div className={pizzaCardStyle}>
    <div className={pizzaChoiceTitleStyle}><span className={pizzaReturnStyle} onClick={() => setCheese && setCheese(null)}>⌫</span> Select your toppings: </div>
    <div className={pizzaStyle}>
      <span className={pizzaImageStyle}>Pizza picture</span>
      </div>
  </div>
}