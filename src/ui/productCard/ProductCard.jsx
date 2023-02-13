import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import heart from "../../assets/media/heart.png";
import "./productCard.scss";

function ProductCard({
  id,
  name , 
  img , 
  status1,
  status2 , 
  country , 
  cost , 
  discountCost  , 
  getProductDesc,
  addItemToCart,
  addItemToWishlist
}) {
  const {wishlist} = useSelector(state => state.cartSlice)

  const index = wishlist.findIndex((item) => item.id === id)
  return (
    <Card className={!cost ? "short_card" : ""}>
      <img
        alt="Sample"
        src={img}
      />
      <div className="status_btns">
        {status1 ? <button className='trend_products'>{status1}</button> : ""}
        {status2 === "АКЦИЯ" ? <button className='discount_products'>{status2}</button> : ""}
      </div>
      <CardBody>
        <CardTitle tag="h5">
          {name}
        </CardTitle>
        <div className="product_country">
          <p>{country}</p>
        </div>
        {cost!==0 && <div className="product_actions">
          <div className="costs">
            {discountCost === "no discount" ? <h2>{cost} ₽</h2> : 
            <div className='sub_costs'>
              <h2>{discountCost} ₽</h2>
              <h3>{cost} ₽</h3>
            </div>
            }
          </div>
          <div className="add_cart" onClick={addItemToCart}>В КОРЗИНУ</div>
        </div>}
      </CardBody>
      <div className="hovered_part_watch">
        <Link to={`/product/${id}`} className="watch_wrapper" onClick={getProductDesc}>
          БЫСТРЫЙ ПРОСМОТР
        </Link>
      </div>
      <div className="hovered_part_wishlist">
        <div className="wishlist_wrapper" onClick={addItemToWishlist}>
          {index < 0 ? <img src={heart} alt="" /> : <svg style={{color : "#2b7bc6"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>}
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;