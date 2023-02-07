import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import "./productCard.scss";

function ProductCard({name , img , status1,status2 , country , cost , discountCost  , type , color , material , volume}) {
  return (
    <Card>
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
        <div className="product_actions">
          <div className="costs">
            {discountCost === "no discount" ? <h2>{cost}</h2> : 
            <div className='sub_costs'>
              <h2>{discountCost}</h2>
              <h3>{cost}</h3>
            </div>
            }
          </div>
          <div className="add_cart">В КОРЗИНУ</div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductCard;