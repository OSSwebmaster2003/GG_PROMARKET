import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { inrementQuantity , decrementQuantity , deleteCartElement } from '../../slice/cartSlice';
import "./cart.scss";

function Cart(props) {
  const {cart} = useSelector(state => state.cartSlice)
  const dispatch = useDispatch();

  let totalCost = 0;
  for(let i = 0; i<cart.length ; i++){
    if(cart[i].discountCost === "no discount"){
      totalCost  = totalCost + cart[i].cost * cart[i].quantity
    }else{
      totalCost = totalCost + cart[i].discountCost * cart[i].quantity
    }
  }

  const buyProducts = () => {
    alert("You bought these products , operators call you soon")
    window.location.reload(true)
  }

  const handleQuantityIncrement = (id) => {
    const index = cart.findIndex((item) => item.id === id)
    dispatch(inrementQuantity(index))
  }
  const handleQuantityDecrement = (id) => {
    const index = cart.findIndex((item) => item.id === id)
    if(cart[index].quantity>1){
      dispatch(decrementQuantity(index))
    }else{
      dispatch(deleteCartElement(id))
    }
  }

  if(cart.length === 0){
    return (
      <div className='empty_cart'>
        <div className="empty_cart_card">
          <h2>Your cart is empty</h2>
          <h3>If you want to add products , go to <Link to="/">products</Link></h3>
        </div>
      </div>
    )
  }

  return (
    <div className='cart'>
      <h1>there {cart.length} products in your cart</h1>
      <div className="cart_wrapper">
        <div className="cart_info">
          {cart.map((item) => (
            <div className="cart_card">
              <div className="card_wrapper">
                <img src={item.img} alt="" />
                <h1>{item.name}</h1>
                <div className="quantity">
                  <button className='decr' onClick={() => handleQuantityDecrement(item.id)}>-</button>
                  <h4>{item.quantity}</h4>
                  <button className='incr' onClick={() => handleQuantityIncrement(item.id)}>+</button>
                </div>
                <div className="cost">
                  <h3>{item.discountCost === "no discount" ? item.cost * item.quantity : item.discountCost * item.quantity} ₽</h3>
                  <div className="detele" onClick={() => dispatch(deleteCartElement(item.id))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                  </svg>
                  delete
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="payment_info">
          <div className="payment_wrapper">
            <h2>There are {cart.length} products </h2>
            <h3>Total cost :</h3>
            <h1>{totalCost} ₽</h1>
            <div className="card_footer">
              <button onClick={() => buyProducts()}>Buy Products</button>
              <button className='purchasing'><Link to="/">Go on purchasing</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;