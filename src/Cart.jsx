import React from 'react'
import './Cart.css'

const Cart = ({ cart }) => {
    return (
      <div className='cart'>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={`https://image.tmdb.org/t/p/w92${item.poster_path}`} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Cart;