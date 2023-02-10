import React from 'react';
import TableOfContents from '../../ui/tableOfContents/TableOfContents';
import pdf from "../../assets/media/pdf.png";
import img_changer4 from "../../assets/details/img_changer4.png";
import { useSelector } from 'react-redux';
import "./characteristics.scss";

function Charasteristics(props) {
  const {productDesc} = useSelector(state => state.productslice)
  return (
    <div className='characteristics'>
      <div className="table_contents">
        <h1>Характеристики</h1>
        <TableOfContents/>
      </div>
      <div className="pdf_download">
        <img src={pdf} alt="" />
        <p>Схема подключения, документация</p>
      </div>
      <div className="set_products">
        <h1>Ваш комплект</h1>
        <div className="card">
          <div className="first_part">
            <div>
              <img src={productDesc.img} alt="" />
              <div className="info">
                <p>{productDesc.name}</p>
                <h1>{productDesc.discountCost !== "no discount" ? productDesc.discountCost : productDesc.cost}</h1>
                <h2>{productDesc.discountCost !== "no discount" && productDesc.cost}</h2>
              </div>
            </div>
            <div>
              <img src={img_changer4} alt="" />
              <div className="info">
                <p>Слив-перелив Geberit 150.520.21.1 для ванны стандартный, полуавтомат хром</p>
                <h1>2500 ₽ </h1>
                <h2>2890 ₽ </h2>
              </div>
            </div>
          </div>
          <div className="second_part">
            <p>Стоимость комплекта</p>
            <h1>{productDesc.discountCost === "no discount" ? `${productDesc.cost} + 2500 ₽` : `${productDesc.discountCost} + 2500 ₽` }</h1>
            <button>В КОРЗИНУ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charasteristics;