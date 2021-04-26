import React from 'react';
import { pizzaSize, pizzaSauce, pizzaCheese } from './PizzaCreator';

import '../css/Pizza.scss';

export default function Pizza({pizza, onUpdatePizza, setSize, setSauce, setCheese}) {
  const pizzaCardStyle = "pizza-card shadow m-2 p-5 d-flex flex-column";
  const pizzaReturnStyle = "pizza-return"
  const pizzaChoiceTitleStyle = "pizza-card-title";
  const pizzaRowStyle = "d-flex justify-content-around p-3 h-100";
  const pizzaChoiceStyle = "pizza-choice m-auto d-flex flex-column justify-content-center align-items-center";
  const pizzaStyle = "d-flex h-100 w-100";
  const pizzaImageStyle = "w-75 m-auto";
  const pizzaHiddenStyle = "pizza-card pizza-hidden";
  const pizzaToppingStyle = "pizza-topping";

  if (!pizza) {
    return <div className={pizzaHiddenStyle}>

    </div>
  }

  if (pizza.size === null) {
    return <div className={pizzaCardStyle}>
      <div className={pizzaChoiceTitleStyle}><span className="invisible">⌫</span> Choose the size: </div>
      <div className={pizzaRowStyle}>
        <div className={pizzaChoiceStyle} onClick={() => setSize && setSize(pizzaSize.NORMAL)}>
          <img id="normal-size-img" src={pizzaSize.NORMAL.image} alt={pizzaSize.NORMAL.name}/>
          {pizzaSize.NORMAL.size}
        </div>
        <div className={pizzaChoiceStyle} onClick={() => setSize && setSize(pizzaSize.LARGE)}>
          <img src={pizzaSize.LARGE.image} alt={pizzaSize.LARGE.name}/>
          {pizzaSize.LARGE.size}
        </div>
      </div>
    </div>
  }

  if (pizza.sauce === null) {
    return <div className={pizzaCardStyle}>
      <div className={pizzaChoiceTitleStyle}><span className={pizzaReturnStyle} onClick={() => setSize && setSize(null)}>⌫</span> Choose the sauce: </div>
      <div className={pizzaRowStyle}>
        <div className={pizzaChoiceStyle} onClick={() => setSauce && setSauce(pizzaSauce.TOMATO)}>
          <img src={pizzaSauce.TOMATO.image} alt={pizzaSauce.TOMATO.name}/>
          {pizzaSauce.TOMATO.name}
        </div>
        <div className={pizzaChoiceStyle} onClick={() => setSauce && setSauce(pizzaSauce.CREME)}>
          <img src={pizzaSauce.CREME.image} alt={pizzaSauce.CREME.name}/>
          {pizzaSauce.CREME.name}
        </div>
      </div>
    </div>
  }

  if (pizza.cheese === null) {
    return <div className={pizzaCardStyle}>
      <div className={pizzaChoiceTitleStyle}><span className={pizzaReturnStyle} onClick={() => setSauce && setSauce(null)}>⌫</span> Do you want cheese: </div>
      <div className={pizzaRowStyle}>
        <div className={pizzaChoiceStyle} onClick={() => setCheese && setCheese(pizzaCheese.CHEESE)}>
          <img src={pizzaCheese.CHEESE.image[(pizza.sauce === pizzaSauce.TOMATO) ? 0 : 1]} alt={pizzaCheese.CHEESE.name}/>
          {pizzaCheese.CHEESE.name}
        </div>
        <div className={pizzaChoiceStyle} onClick={() => setCheese && setCheese(pizzaCheese.NO_CHEESE)}>
          <img src={pizzaCheese.NO_CHEESE.image[(pizza.sauce === pizzaSauce.TOMATO) ? 0 : 1]} alt={pizzaCheese.NO_CHEESE.name}/>
          {pizzaCheese.NO_CHEESE.name}
        </div>
      </div>
    </div>
  }

  return <div className={pizzaCardStyle}>
    <div className={pizzaChoiceTitleStyle}><span className={pizzaReturnStyle} onClick={() => setCheese && setCheese(null)}>⌫</span> Select your toppings: </div>
    <div className={pizzaStyle}>
      <img className={pizzaImageStyle} src={pizza.image} alt="pizza"/>
      {/* FIXME: try use for loop */}
      {
        pizza.toppings.map(topping => {
          const TOP_BEGIN = 150;
          const LEFT_BEGIN = 300;
          const top = Math.random() * 70;
          const left = Math.random() * 70;
          return <>
            <img className={pizzaToppingStyle} style={{'top': TOP_BEGIN + top, 'left': LEFT_BEGIN + left}} src={topping.image} alt={topping.name}/>
            <img className={pizzaToppingStyle} style={{'top': TOP_BEGIN + top + 50, 'left': LEFT_BEGIN + left + 100}} src={topping.image} alt={topping.name}/>
            <img className={pizzaToppingStyle} style={{'top': TOP_BEGIN + top + 100, 'left': LEFT_BEGIN + left - 20}} src={topping.image} alt={topping.name}/>
            <img className={pizzaToppingStyle} style={{'top': TOP_BEGIN + top, 'left': LEFT_BEGIN + left + 50}} src={topping.image} alt={topping.name}/>
            <img className={pizzaToppingStyle} style={{'top': TOP_BEGIN + top + 100, 'left': LEFT_BEGIN + left + 60}} src={topping.image} alt={topping.name}/>
          </>
        })
      }
      
      </div>
  </div>
}