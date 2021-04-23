import { React, useState } from 'react';
import './App.scss';

import Header from './components/Header';
import Checkout from './components/Checkout';
import PizzaCreator from './components/PizzaCreator';

function App() {
  const [pizzas, setPizzas] = useState([]);

  const onUpdatePizza = (pizza) => {
    const pizzaIdx = pizzas.findIndex(p => p.id === pizza.id);
    if (pizzaIdx !== -1) {
      var newPizzas = [...pizzas];
      newPizzas[pizzaIdx] = pizza;
      setPizzas(newPizzas);
    } else {
      onAddPizza(pizza);
    }
  }

  const onAddPizza = (pizza) => {
    const newPizzas = [...pizzas];
    newPizzas.push(pizza);
    setPizzas(newPizzas);
  }

  const wrapperStyle = "wrapper d-flex my-5";
  return (
    <div className="App">
      <Header />
      <div className={wrapperStyle}>
        <Checkout pizzas={pizzas}/>
        <PizzaCreator pizzas={pizzas} onUpdatePizza={onUpdatePizza}/>
      </div>
    </div>
  );
}

export default App;
