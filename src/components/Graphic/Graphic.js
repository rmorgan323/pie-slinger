import React from 'react';
import { PropTypes } from 'prop-types';
import './Graphic.css';

const Graphic = ({ crust, size, toppings }) => {

  const displayToppings = () => {
    return toppings.map((topping, index) => {
      return (
        <img key={index} src={`/assets/${topping.name}-${topping.amount}.svg`} alt={topping} />
      );
    });
  };

  const displayCrust = () => {
    return <img src={`/assets/crust-${crust}.svg`} alt={`${crust} crust`} />;
  };

  const pizzaClass = (pizzaSize) => {
    return `Graphic ${pizzaSize}-pizza`;
  };

  return (
    <div className={pizzaClass(size)}>
      <img src="/assets/background.svg" alt="pizza background" />
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