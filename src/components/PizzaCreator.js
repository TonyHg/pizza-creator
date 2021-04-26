import { React, useState, useEffect } from 'react';
import PizzasDisplayer from './PizzasDisplayer';
import Toppings from './Toppings';

import PizzaCompleted from '../assets/svg/pizza-completed.svg';
import Tomato from '../assets/svg/tomato.svg';
import TomatoCheese from '../assets/svg/tomato-cheese.svg';
import Creme from '../assets/svg/creme.svg';
import CremeCheese from '../assets/svg/creme-cheese.svg';

export const pizzaSize = {
  LARGE: { size: "Large", price: 4, image: PizzaCompleted},
  NORMAL: { size: "Normal", price: 3, image: PizzaCompleted}
};

export const pizzaSauce = {
  TOMATO: { name: "Tomato", image: Tomato},
  CREME: { name: "Creme", image: Creme}
}

export const pizzaCheese = {
  CHEESE: { name: "Cheese", image: [TomatoCheese, CremeCheese]},
  NO_CHEESE: { name: " ̶C̶h̶e̶e̶s̶e̶", image: [Tomato, Creme]}
}


export default function PizzaCreator({pizzas, currentPizza, currentPizzaIdx, setCurrentPizza, onPrevious, onNext, onUpdatePizza, onAddDummyPizza}) {
  useEffect(() => {
    onUpdatePizza(currentPizza);
  }, [currentPizza]);

  const setSize = (size) => {
    const pizza = {...currentPizza};
    pizza.size = size;
    setCurrentPizza(pizza);
    onAddDummyPizza();
  }

  const setSauce = (sauce) => {
    const pizza = {...currentPizza};
    pizza.sauce = sauce;
    setCurrentPizza(pizza);
  }

  const setCheese = (cheese) => {
    const pizza = {...currentPizza};
    pizza.cheese = cheese;
    if (cheese) pizza.image = cheese.image[(pizza.sauce === pizzaSauce.TOMATO) ? 0 : 1];
    setCurrentPizza(pizza); 
  }

  const onClickTopping = (topping) => {
    const pizza = {...currentPizza};
    if (currentPizza.toppings.includes(topping))
      pizza.toppings = pizza.toppings.filter(t => t !== topping);
    else
      pizza.toppings.push(topping);
    setCurrentPizza(pizza);
  }

  return <>
    <PizzasDisplayer previousPizza={pizzas[currentPizzaIdx - 1]} 
                      currentPizza={pizzas[currentPizzaIdx]} 
                      nextPizza={pizzas[currentPizzaIdx + 1]} 
                      onPrevious={onPrevious} onNext={onNext} 
                      onUpdatePizza={onUpdatePizza} setSize={setSize} 
                      setSauce={setSauce} 
                      setCheese={setCheese}/>
    <Toppings onClickTopping={onClickTopping} pizza={currentPizza}/>
  </>
}