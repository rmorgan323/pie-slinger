import React, { Component } from 'react';
import OrderDetailsLeft from '../OrderDetailsLeft/OrderDetailsLeft';
import OrderDetailsRight from '../OrderDetailsRight/OrderDetailsRight';
import Graphic from '../Graphic/Graphic';
import getPizza from '../../helper/getPizza/getPizza';
import './Pizza.css';

class Pizza extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  handleGetPizza = async () => {
    const randomPizza = await getPizza();
    this.setState(randomPizza);
  }

  displayGraphic = () => {
    if (this.state.order_id) {
      return (
        <Graphic 
          crust={this.state.crust}
          size={this.state.size}
          toppings={this.state.toppings}
        />
      );
    }
  }

  displayOrderLeft = () => {
    if (this.state.order_id) {
      return (
        <OrderDetailsLeft 
          date={this.state.order_date}
          orderId={this.state.order_id}
          crust={this.state.crust}
          size={this.state.size}
        />
      );
    }
  }

  displayOrderRight = () => {
    if (this.state.order_id) {
      return (
        <OrderDetailsRight 
          toppings={this.state.toppings}
        />
      );
    }
  }

  render () {
    return (
      <div className="Pizza">
        <button 
          className="get-pizza-button"
          onClick={() => this.handleGetPizza()}
        >PIE ME!</button>
        <div className="pizza-container">
          {this.displayOrderLeft()}
          {this.displayGraphic()}
          {this.displayOrderRight()}
        </div>
      </div>
    );
  }
}

export default Pizza;