import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./cart.scss";

function Cart(props) {
  const {cart} = useSelector(state => state.cartSlice)
  console.log(cart)

  if(cart.length === 0){
    return (
      <>
        <h2>Your cart is empty</h2>
        <h3>If you want to add products , go to <Link to="/">products</Link></h3>
      </>
    )
  }

  return (
    <div>
      cart
    </div>
  );
}

export default Cart;