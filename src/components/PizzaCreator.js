import { React, useState, useEffect } from 'react';
import PizzasDisplayer from './PizzasDisplayer';
import Toppings from './Toppings';

export const pizzaSize = {
  LARGE: "Large",
  NORMAL: "Normal"
};

export const pizzaSauce = {
  TOMATO: "Tomato",
  CREME: "Fresh Creme"
}

export const pizzaCheese = {
  CHEESE: "Cheese",
  NO_CHEESE: "No Cheese"
}

const initPizza = {
  id: 0,
  size: null,
  sauce: null,
  cheese: null,
  toppings: []
}

export default function PizzaCreator({pizzas, onUpdatePizza}) {
  const [previousPizza, setpreviousPizza] = useState(null);
  const [currentPizza, setCurrentPizza] = useState(initPizza);
  const [nextPizza, setNextPizza] = useState(null);

  useEffect(() => {
    onUpdatePizza(currentPizza);
  }, [currentPizza]);

  const onPrevious = () => {
    if (previousPizza === null)
      return;

  };

  const onNext = () => {

  };

  const setSize = (size) => {
    const pizza = {...currentPizza};
    pizza.size = size;
    setCurrentPizza(pizza);
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
    console.log(pizza);
  }

  return <>
    <PizzasDisplayer previousPizza={previousPizza} currentPizza={currentPizza} nextPizza={nextPizza} onPrevious={onPrevious} onNext={onNext} onUpdatePizza={onUpdatePizza} setSize={setSize} setSauce={setSauce} setCheese={setCheese}/>
    <Toppings onClickTopping={onClickTopping} pizza={currentPizza}/>
  </>
}