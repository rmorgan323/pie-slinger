import React from 'react';
import './Graphic.css';

const Graphic = ({ crust, size, toppings }) => {

  const displayToppings = () => {
    return toppings.map((topping, index) => {
      return (
        <img key={index} src={`/assets/${topping.name}-${topping.amount}.svg`} alt={topping} />
      )
    });
  }

  const displayCrust = () => {
    return <img src={`/assets/crust-${crust}.svg`} alt={`${crust} crust`} />
  }

  const pizzaClass = () => {
    return `Graphic ${size}-pizza`;
  }

  return (
    <div className={pizzaClass()}>
      <img src="/assets/background.svg" alt="pizza background" />
      {displayToppings()}
      {displayCrust()}
    </div>
  )
}

export default Graphic;