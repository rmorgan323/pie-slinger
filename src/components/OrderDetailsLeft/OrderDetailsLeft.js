import React from 'react';
import './OrderDetailsLeft.css';
import moment from 'moment';
import cap from '../../helper/cap/cap';

const OrderDetailsLeft = ({ date, orderId, crust, size }) => {

  return (
    <div className="OrderDetailsLeft">
      <div>
        <h3>ORDER</h3>
        <div className="order-container">
          <p>{moment(date).calendar()}</p>
          <p>Order ID: {orderId}</p>
        </div>
        <h3>PIZZA</h3>
        <div className="order-container">
          <p>Crust: {cap(crust)}</p>
          <p>Size: {cap(size)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsLeft;