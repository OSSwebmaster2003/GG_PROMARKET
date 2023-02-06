import React from 'react';
import car from "../../../assets/services/car.png";
import logo from "../../../assets/services/logo.png";
import currency from "../../../assets/services/currency.png";
import thumb from "../../../assets/services/thumb.png";
import truck from "../../../assets/services/truck.png";
import "./services.scss";

function Services(props) {
  return (
    <div className='services'>
      <div>
        <div className="image">
          <img src={car} alt="" />
        </div>
        <p>Быстрая доставка по Москве и в любой регион России</p>
      </div>
      <div>
        <div className="image">
          <img src={logo} alt="" />
        </div>
        <p>Все товары имеют официальную гарантию производителя</p>
      </div>
      <div>
        <div className="image">
          <img src={truck} alt="" />
        </div>
        <p>Более 100 000 товаров</p>
      </div>
      <div>
        <div className="image">
          <img src={currency} alt="" />
        </div>
        <p>Любой способ оплаты</p>
      </div>
      <div>
        <div className="image">
          <img src={thumb} alt="" />
        </div>
        <p>Высокие оценки клиентов</p>
      </div>
    </div>
  );
}

export default Services;