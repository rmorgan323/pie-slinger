import React from 'react';
import { PropTypes } from 'prop-types';
import './Graphic.css';

const Graphic = ({ crust, size, toppings }) => {
  
  const graphics = [
    'cheese', 'pepperoni', 'sausage', 'bacon', 'mushrooms', 'pineapple', 'ham', 'peppers'
  ];

  const displayToppings = () => {
    return toppings.map((topping, index) => {
      if (graphics.includes(topping.name)) {
        return (
          <img 
            key={index} 
            src={require(`./assets/${topping.name}-${topping.amount}.svg`)} alt={topping.name} 
          />
        );
      } else return null;
    });
  };

  const displayCrust = () => {
    return <img src={require(`./assets/crust-${crust}.svg`)} alt={`${crust} crust`} />;
  };

  const pizzaClass = pizzaSize => {
    return `Graphic ${pizzaSize}-pizza`;
  };

  return (
    <div className={pizzaClass(size)}>
      <img src={require("./assets/background.svg")} alt="pizza background" />
      {displayToppings()}
      {displayCrust()}
    </div>
  );
};

export default Graphic;

Graphic.propTypes = {
  crust: PropTypes.string,
  size: PropTypes.string,
  toppings: PropTypes.array
};