import React from 'react';
import { useSelector } from 'react-redux';
import Collaborators from '../../components/home/collaborators/Collaborators';
import Services from '../../components/home/homeServices/Services';
import TileCollection from '../../components/home/tileCollection/TileCollection';
import ResSlider from '../../components/responsiveSlider/ResSlider';
import SingleSlider from '../../components/singleSlider/SingleSlider';
import Tab from '../../components/tabs/Tab';
import "./home.scss";

function Home(props) {
  const {products} = useSelector(state => state.productslice)
  const {articles} = useSelector(state => state.productslice)
  console.log(articles);
  return (
    <div className='home_page'>
      <div className="banner_section container-fluid">
        <div className="row">
          <div className="col-7 for_slider">
            <SingleSlider/>
          </div>
          <div className="col-5">
            <div className="row">
              <div className="col-12 for_toilet">
                <div className="info_wrapper">
                  <div className="info">
                    <h1>УНИТАЗЫ</h1>
                    <h1>ДО 10 000 ₽</h1>
                    <p>ПОДРОБНЕЕ</p>
                  </div>
                </div>
              </div>
              <div className="col-12 for_discount">
                <div className="info_wrapper">
                  <div className="info">
                    <h1>ТОВАРЫ</h1>
                    <h1>СО СКИДКОЙ</h1>
                    <p>ПОДРОБНЕЕ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services_section">
        <Services/>
      </div>
      <div className="tile_collection_section">
        <div className="heading">
          <h1>Коллекции плитки</h1>
        </div>
        <TileCollection/>
      </div>
      <div className="best_sellers_section">
        <div className="heading">
          <h1>Хиты продаж</h1>
        </div>
        <Tab products={products}/>
      </div>
      <div className="discount_sellers_section">
        <div className="heading">
          <h1>Акции</h1>
        </div>
        <Tab products={products.filter((item) => item.discountCost !== "no discount")}/>
      </div>
      <div className="another_banner_section">
        <div className="banner_wrapper">
          <p>ЕЩЕ ОДИН БАННЕР</p>
        </div>
      </div>
      <div className="collaborators_section">
        <div className="heading">
          <h1>Популярные бренды</h1>
        </div>
        <Collaborators/>
      </div>
      <div className="articles_section">
        <div className="heading">
          <h1>Статьи</h1>
        </div>
        <ResSlider items={articles} mainBreak={4} />
      </div>
    </div>
  );
}

export default Home;