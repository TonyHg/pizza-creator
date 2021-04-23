import React from 'react';

import Pizza from './Pizza';

export default function PizzasDisplayer({ previousPizza, currentPizza, nextPizza, onPrevious, onNext, onUpdatePizza, setSize, setSauce, setCheese}) {

  const PizzasDisplayerStyle = "col-6 d-flex justify-content-center";
  return <div className={PizzasDisplayerStyle}>
    {previousPizza !== null && <Pizza pizza={previousPizza}/>}
    <Pizza pizza={currentPizza} onUpdatePizza={onUpdatePizza} setSize={setSize} setSauce={setSauce} setCheese={setCheese}/>
    {nextPizza !== null && <Pizza pizza={nextPizza}/>}
  </div>
}
