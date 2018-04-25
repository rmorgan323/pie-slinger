import React from 'react';
import './Graphic.css';

const Graphic = ({ crust, size, toppings }) => {

  const displayToppings = () => {
    return toppings.map((topping, index) => {
      return (
        <img src={`/assets/${topping.name}-${topping.amount}.svg`} />
      )
    });
  }

  const displayCrust = () => {
    return <img src={`/assets/crust-${crust}.svg`} />
  }

  const pizzaClass = () => {
    return `Graphic ${size}-pizza`;
  }

  return (
    <div className={pizzaClass()}>
      <img src="/assets/background.svg" />
      {displayToppings()}
      {displayCrust()}
    </div>
  )
}

export default Graphic;