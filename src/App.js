import { React, useState, useEffect } from 'react';
import './App.scss';

import Header from './components/Header';
import Checkout from './components/Checkout';
import PizzaCreator from './components/PizzaCreator';
import Pay from './components/Pay';
import roundToCents from './utils/Round';
import deepCopyOf from './utils/DeepCopy';
import OrderSuccessModal from './components/OrderSuccessModal';

const initPizza = {
  id: -1,
  size: null,
  sauce: null,
  cheese: null,
  toppings: [],
  image: null
}

function App() {
  const [loading, setLoading] = useState(true)
  const [pizzas, setPizzas] = useState([deepCopyOf(initPizza)]);
  const [currentPizzaIdx, setCurrentPizzaIdx] = useState(0);
  const [currentPizza, setCurrentPizza] = useState(pizzas[currentPizzaIdx]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [startStyle, setStartStyle] = useState("");

  useEffect(() => {
    setLoading(true);
  }, []);

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
    const copy = deepCopyOf(initPizza);
    setPizzas([copy]);
    setCurrentPizzaIdx(0);
    setCurrentPizza(copy);
  }

  const onAddDummyPizza = () => {
    if (pizzas[pizzas.length - 1].id !== -1) {
      const copy = deepCopyOf(initPizza);
      onAddPizza(copy);
    }
  }

  const onPay = () => {
    resetPizzas();
    setModalVisibility(true);
    setTimeout(() => setModalVisibility(false), 1500);
    setTimeout(() => setLoading(true), 2000);
  }

  const onStart = () => {
    setLoading(false);
  }

  const wrapperStyle = "wrapper d-flex my-5";
  const startScreenStyle = "start d-flex flex-column justify-content-center align-items-center w-100 h-100";
  const startButtonStyle = "start-btn mt-5 px-5 py-3 shadow";

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
        <div className={startScreenStyle + (loading ? "" : " active")}>
          <h3>Welcome to</h3>
          <h1>Pizza-Creator !</h1>
          <div className={startButtonStyle} onClick={onStart}>ORDER</div>
        </div>
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
      <OrderSuccessModal visible={modalVisibility}/>
    </div>
  );
}

export default App;
