import React from 'react';
import './CartIcon.css';

const CartIcon = ({ onClick, itemCount }) => {
    return (
      <div className="cart-icon" onClick={onClick}>
        <img src="https://img.icons8.com/material-outlined/48/000000/shopping-cart--v1.png" alt="Cart" />
        {itemCount > 0 && <span className="item-count">{itemCount}</span>}
      </div>
    );
  };
  
  export default CartIcon;