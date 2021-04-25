import React from 'react';

import Pizza from './Pizza';
import '../css/PizzasDisplayer.scss';

export default function PizzasDisplayer({ previousPizza, currentPizza, nextPizza, onPrevious, onNext, onUpdatePizza, setSize, setSauce, setCheese}) {
  const previousPizzaStyle = "previous-pizza my-auto";
  const currentPizzaStyle = "current-pizza mx-3";
  const nextPizzaStyle = "next-pizza my-auto";

  const PizzasDisplayerStyle = "col-6 d-flex justify-content-center";
  return <div className={PizzasDisplayerStyle}>
    <div className={previousPizzaStyle} onClick={onPrevious}>
      <Pizza pizza={previousPizza}/>
    </div>
    <div className={currentPizzaStyle}>
      <Pizza className={currentPizzaStyle} pizza={currentPizza} onUpdatePizza={onUpdatePizza} setSize={setSize} setSauce={setSauce} setCheese={setCheese}/>
    </div>
    <div className={nextPizzaStyle} onClick={onNext}>
      <Pizza pizza={nextPizza}/>
    </div>
  </div>
}
