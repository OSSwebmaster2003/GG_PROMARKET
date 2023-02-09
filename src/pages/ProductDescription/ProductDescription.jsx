import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import img_changer1 from "../../assets/details/img_changer1.png";
import img_changer2 from "../../assets/details/img_changer2.png";
import img_changer3 from "../../assets/details/img_changer3.png";
import heart from "../../assets/media/heart.png";
import roca from "../../assets/collaborators/roca.png";
import correct from "../../assets/media/correct.png";
import "./productDescription.scss";

function ProductDescription(props) {
  const [imgChanger , setImgChanger] = useState(1)
  const {productDesc} = useSelector(state => state.productslice)
  const {id} = useParams()
  return (
    <div className='product_descr_page'>
      <div className="product_descr_top_card">
        <div className="card_wrapper">
          <div className="card_breadcrump">
            <Link to="/">Главная</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <Link to={`/product/${id}`}>product</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <p>{productDesc.name}</p>
          </div>
          <div className="card_body">
            <div className="card_product_image">
              <div className="image_changer">
                <div className={imgChanger === 1 ? "active" : ""} onClick={() => setImgChanger(1)}>
                  <img src={img_changer1} alt="" />
                </div>
                <div className={imgChanger === 2 ? "active" : ""} onClick={() => setImgChanger(2)}>
                  <img src={img_changer2} alt="" />
                </div>
                <div className={imgChanger === 3 ? "active" : ""} onClick={() => setImgChanger(3)}>
                  <img src={img_changer3} alt="" />
                </div>
              </div>
              <div className="main_img">
                <img src={productDesc.img} alt="" />
              </div>
            </div>
            <div className="card_product_info">
              <div className="info_header">
                <p>Код товара: {productDesc.id}</p>
                <h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                  </svg> 
                  <Link to="/">Назад в каталог</Link>
                </h1>
              </div>
              <div className="info_name">{productDesc.name}</div>
              <div className="info_full">
                <div className="first_part">
                  <div className="full_header">
                    <Link to="/cart">
                      <img src={heart} alt="" />
                      В избранное
                    </Link>
                    <img src={roca} alt="" />
                  </div>
                  <div className="full_body">
                    <table>
                      <tr>
                        <td>Страна бренда:</td>
                        <td>{productDesc.country}</td>
                      </tr>
                      <tr>
                        <td>Производитель:</td>
                        <td>Roca</td>
                      </tr>
                      <tr>
                        <td>Коллекция:</td>
                        <td>NewCast</td>
                      </tr>
                      <tr>
                        <td>Артикул:</td>
                        <td>{productDesc.id}</td>
                      </tr>
                      <tr>
                        <td>Цвет:</td>
                        <td>{productDesc.color}</td>
                      </tr>
                      <tr>
                        <td>Материал:</td>
                        <td>{productDesc.material}</td>
                      </tr>
                      <tr>
                        <td>Объем:</td>
                        <td>{productDesc.volume}</td>
                      </tr>
                      <tr>
                        <td>Гарантийный срок:</td>
                        <td>10 years</td>
                      </tr>
                    </table>
                    <p className="all_details">Все характеристики</p>
                  </div>
                </div>
                <div className="second_part">
                  <h1>{productDesc.cost}</h1>
                  <button>В КОРЗИНУ</button>
                  <p>Товар в наличии <img src={correct} alt="" /></p>
                  <table>
                    <tr>
                      <td>Ваш город</td>
                      <td>Alat</td>
                    </tr>
                    <tr>
                      <td>Доставка</td>
                      <td>{new Date().getDate() + 1} {new Date().getMonth() >=10 ? new Date().getMonth() : `0${new Date().getMonth()}`} {new Date().getFullYear()}</td>
                    </tr>
                    <tr>
                      <td>Самовывоз</td>
                      <td>Завтра   Бесплатно</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;