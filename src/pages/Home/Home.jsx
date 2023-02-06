import React from 'react';
import Services from '../../components/home/homeServices/Services';
import TileCollection from '../../components/home/tileCollection/TileCollection';
import SingleSlider from '../../components/singleSlider/SingleSlider';
import "./home.scss";

function Home(props) {
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
    </div>
  );
}

export default Home;