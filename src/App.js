import { React, useState } from 'react';
import './App.scss';

import Header from './components/Header';
import Checkout from './components/Checkout';
import PizzaCreator from './components/PizzaCreator';
import Pay from './components/Pay';
import roundToCents from './utils/Round';

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

  const onPay = () => {

  }

  const wrapperStyle = "wrapper d-flex my-5";

  var total = pizzas.reduce((acc, curr) => acc + (curr.size !== null ? curr.size.price : 0) + curr.toppings.reduce((a, c) => a + c.price, 0), 0);
  total = roundToCents(total);

  return (
    <div className="App">
      <Header />
      <div className={wrapperStyle}>
        <Checkout pizzas={pizzas} total={total}/>
        <PizzaCreator pizzas={pizzas} onUpdatePizza={onUpdatePizza}/>
      </div>
      <Pay onPay={onPay} total={total}/>
    </div>
  );
}

export default App;
