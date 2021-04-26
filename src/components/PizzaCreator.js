import { React, useState, useEffect } from 'react';
import PizzasDisplayer from './PizzasDisplayer';
import Toppings from './Toppings';

export const pizzaSize = {
  LARGE: { size: "Large", price: 4, image: ""},
  NORMAL: { size: "Normal", price: 3, image: ""}
};

export const pizzaSauce = {
  TOMATO: { name: "Tomato", image: ""},
  CREME: { name: "Fresh Creme", image: ""}
}

export const pizzaCheese = {
  CHEESE: { name: "Cheese", image: ""},
  NO_CHEESE: { name: "No Cheese", image: ""}
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