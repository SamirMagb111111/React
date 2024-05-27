import React from 'react';
import './CartModal.css';

const CartModal = ({ cart, onClose, onRemove }) => {
    return (
      <div className="cart-modal">
        <div className="cart-modal-content">
          <button className="close-button" onClick={onClose}>X</button>
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul>
              {cart.map(movie => (
                <li key={movie.id}>
                  {movie.title}
                  <button onClick={() => onRemove(movie.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
  
  export default CartModal;