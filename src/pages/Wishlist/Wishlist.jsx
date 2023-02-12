import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteWishlistElement } from '../../slice/cartSlice';
import "./wishlist.scss";

function Wishlist(props) {
  const {wishlist} = useSelector(state => state.cartSlice);
  const {cart} = useSelector(state => state.cartSlice)
  const dispatch = useDispatch()

  const addItemToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id)
    
    if(index < 0){
      const newProduct = {
        ...product,
        quantity : 1
      }
      dispatch(addToCart([...cart , newProduct]))
    }else{
      const newCart = cart.map((itemOrder , itemIndex) => {
        if(itemIndex === index){
          return{
            ...itemOrder,
            quantity : itemOrder.quantity + 1
          }
        }else{
          return itemOrder
        }
      })
      dispatch(addToCart(newCart))
    }
  }

  if(wishlist.length === 0){
    return (
      <div className="empty_wishlist">
        <h4>No items in your wishlist</h4>
      </div>
    )
  }
  return (
    <div className='wishlist'>
      <h1>There are {wishlist.length} products in your wishlist</h1>
      <div className="wishlist_body">
        {wishlist.map((item) => (
          <div className="wishlist_card" key={item.id}>
            <div className="card_wrapper">
              <img src={item.img} alt="" />
              <div className="info">
                <h1>{item.name}</h1>
                <div className="cost">
                  <h2>{item.discountCost === "no discount" ? "" : item.cost}</h2>
                  <h3>{item.discountCost === "no discount" ? item.cost : item.discountCost}</h3>
                </div>
                <div className="buttons">
                  <button className="add_to_cart" onClick={() => addItemToCart(item)}>Add To Cart</button>
                  <button className="delete" onClick={() => dispatch(deleteWishlistElement(item.id))}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;