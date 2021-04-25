import { React, useState, useEffect } from 'react';
import './App.scss';

import Header from './components/Header';
import Checkout from './components/Checkout';
import PizzaCreator from './components/PizzaCreator';
import Pay from './components/Pay';
import roundToCents from './utils/Round';
import deepCopyOf from './utils/DeepCopy';

const initPizza = {
  id: -1,
  size: null,
  sauce: null,
  cheese: null,
  toppings: []
}

function App() {
  const [pizzas, setPizzas] = useState([deepCopyOf(initPizza)]);
  const [currentPizzaIdx, setCurrentPizzaIdx] = useState(0);
  const [currentPizza, setCurrentPizza] = useState(pizzas[currentPizzaIdx]);

  useEffect(() => {
    updateCurrentPizza();
  }, [currentPizzaIdx]);

  const onUpdatePizza = (pizza) => {
    var pizzaIdx = pizzas.findIndex(p => p.id === pizza.id);
    if (pizza.id === -1) {
      pizza.id = getMaxIdx() + 1;
      pizzaIdx = pizzas.length - 1;
    } 
    var newPizzas = [...pizzas];
    newPizzas[pizzaIdx] = pizza;
    setPizzas(newPizzas);
  }

  const getMaxIdx = () => {
    return pizzas.reduce((max, curr) => curr.id > max ? curr.id : max, pizzas[0].id);
  }

  const updateCurrentPizza = () => {
    setCurrentPizza(pizzas[currentPizzaIdx]);
  }

  const onPrevious = () => {
    if (currentPizzaIdx === 0)
      return;
    setCurrentPizzaIdx(currentPizzaIdx - 1);
  };

  const onNext = () => {
    if (currentPizzaIdx === pizzas.length - 1)
      return;
    setCurrentPizzaIdx(currentPizzaIdx + 1);
  };

  const onAddPizza = (pizza) => {
    const newPizzas = [...pizzas];
    newPizzas.push(pizza);
    setPizzas(newPizzas);
  }

  const resetPizzas = () => {
    setPizzas([deepCopyOf(initPizza)]);
    setCurrentPizzaIdx(0);
  }

  const onAddDummyPizza = () => {
    if (pizzas[pizzas.length - 1].id !== -1) {
      const copy = deepCopyOf(initPizza);
      onAddPizza(copy);
    }
  }

  const onPay = () => {
    resetPizzas();
  }

  const wrapperStyle = "wrapper d-flex my-5";

  var total = pizzas.reduce((acc, curr) => acc + (curr.size !== null ? curr.size.price : 0) + curr.toppings.reduce((a, c) => a + c.price, 0), 0);
  total = roundToCents(total);

  const getValidPizzas = () => {
    return pizzas.filter(pizza => pizza.size != null);
  }

  const getTotalPrice = (pizzas) => {
    var total = pizzas.reduce((acc, curr) => acc + (curr.size !== null ? curr.size.price : 0) + curr.toppings.reduce((a, c) => a + c.price, 0), 0);
    total = roundToCents(total);
    return total;
  }

  var total = getTotalPrice(getValidPizzas());

  return (
    <div className="App">
      <Header />
      <div className={wrapperStyle}>
        <Checkout pizzas={getValidPizzas()} total={total}/>
        <PizzaCreator pizzas={pizzas} 
                      currentPizza={currentPizza}
                      currentPizzaIdx={currentPizzaIdx} 
                      setCurrentPizza={setCurrentPizza}
                      onPrevious={onPrevious}
                      onNext={onNext} 
                      onUpdatePizza={onUpdatePizza}
                      onAddDummyPizza={onAddDummyPizza}/>
      </div>
      <Pay onPay={onPay} total={total}/>
    </div>
  );
}

export default App;
