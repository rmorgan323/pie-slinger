import React from 'react';
import { PropTypes } from 'prop-types';
import moment from 'moment';
import cap from '../../helper/cap/cap';
import checkNormal from '../../helper/checkNormal/checkNormal';
import './OrderDetailsLeft.css';

const OrderDetailsLeft = ({ date, orderId, crust, size }) => {

  return (
    <div className="OrderDetailsLeft">
      <div>
        <h3>ORDER</h3>
        <div className="order-container">
          <p>{moment(date).format('MMMM Do, h:mm a')}</p>
          <p>Order ID: {orderId}</p>
        </div>
        <h3>PIZZA</h3>
        <div className="order-container">
          <p>Crust: <span className={checkNormal(crust)}>{cap(crust)}</span></p>
          <p>Size: <span className={checkNormal(size)}>{cap(size)}</span></p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsLeft;

OrderDetailsLeft.propTypes = {
  date: PropTypes.string,
  orderId: PropTypes.number,
  crust: PropTypes.string,
  size: PropTypes.string
};