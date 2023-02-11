import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import heart from "../../assets/media/heart.png";
import "./productCard.scss";

function ProductCard({id,
  name , 
  img , 
  status1,
  status2 , 
  country , 
  cost , 
  discountCost  , 
  type , 
  color , 
  material , 
  volume , 
  getProductDesc,
  addItemToCart,
}) {
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
        {cost && <div className="product_actions">
          <div className="costs">
            {discountCost === "no discount" ? <h2>{cost}</h2> : 
            <div className='sub_costs'>
              <h2>{discountCost}</h2>
              <h3>{cost}</h3>
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
        <div className="wishlist_wrapper">
          <img src={heart} alt="" />
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;