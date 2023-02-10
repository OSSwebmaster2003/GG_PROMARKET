import React from 'react';
import SetProducts from '../setProducts/SetProducts';
import set1 from "../../assets/sets/set1.png";
import set2 from "../../assets/sets/set2.png";
import set3 from "../../assets/sets/set3.png";
import set4 from "../../assets/sets/set4.png";
import set5 from "../../assets/sets/set5.png";
import set6 from "../../assets/sets/set6.png";
import set7 from "../../assets/sets/set7.png";
import set8 from "../../assets/sets/set8.png";
import "./completeSet.scss";

function CompleteSet(props) {
  const completeSets = [
    {
      key : "1",
      img : set1,
      body : "Слив-перелив Geberit 150.520.21.1 для ванны стандартный, полуавтомат хром",
      cost : "2890 ₽"
    },
    {
      key : "2",
      img : set2,
      body : "Слив-перелив Geberit 150.520.21.1 для ванны стандартный, полуавтомат хром",
      cost : "2890 ₽"
    },
    {
      key : "3",
      img : set3,
      body : "Слив-перелив Geberit 150.520.21.1 для ванны стандартный, полуавтомат хром",
      cost : "2890 ₽"
    },
    {
      key : "4",
      img : set4,
      body : "Слив-перелив Geberit 150.520.21.1 для ванны стандартный, полуавтомат хром",
      cost : "2890 ₽"
    },
    {
      key : "5",
      img : set5,
      body : "Слив-перелив Geberit 150.520.21.1 для ванны стандартный, полуавтомат хром",
      cost : "2890 ₽"
    },
    {
      key : "6",
      img : set6,
      body : "Слив-перелив Geberit 150.520.21.1 для ванны стандартный, полуавтомат хром",
      cost : "2890 ₽"
    },
  ]
  return (
    <div className='complete_set'>
      <div className="product_complete">
        <h1>Составьте выгодный комплект</h1>
        <div className="product_complete_body">
          <h2>Слив-перелив</h2>
          <div className="checkbox_cards">
            {completeSets.map((card) => (
              <div className="checkbox_card" key={card.id}>
                <input type="checkbox" />
                <label>
                  <img src={card.img} alt="" />
                  <div className="info">
                    <p>{card.body}</p>
                    <h1>{card.cost}</h1>
                  </div>
                </label>
              </div>
            ))}
          </div>
          <div className="monitor_cards">
            <div className="monitor_card">
              <h1>Экран для ванны</h1>
              <div className="body">
                <input type="checkbox" />
                <label>
                  <img src={set7} alt="" />
                  <div className="info">
                    <p>Панель фронтальная Am.Pm Gem W90A-170-070W-P для</p>
                    <h1>3990 ₽</h1>
                  </div>
                </label>
              </div>
            </div>
            <div className="monitor_card">
              <h1>Контейнер</h1>
              <div className="body">
                <input type="checkbox" />
                <label>
                  <img src={set8} alt="" />
                  <div className="info">
                    <p>Контейнер с крышкой Am.Pm Gem W90A-070-070W-C для ванны</p>
                    <h1>3490 ₽</h1>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SetProducts/>
    </div>
  );
}

export default CompleteSet;