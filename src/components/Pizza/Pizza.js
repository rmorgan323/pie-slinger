import React, { Component } from 'react';
import './Pizza.css';
import getPizza from '../../helper/getPizza/getPizza';

class Pizza extends Component {

  handleGetPizza = async () => {
    const randomPizza = await getPizza();
    console.log(randomPizza);
  }

  render () {
    return (
      <div className="Pizza">
        <button 
          className="get-pizza-button"
          onClick={() => this.handleGetPizza()}
        >Pie Me!</button>
      </div>
    )
  }
}

export default Pizza;