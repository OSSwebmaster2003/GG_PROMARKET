import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";

function Header(props) {
  return (
    <header>
      <div className="header_wrapper">
        <div className="header_logo">
          <img src="./assets/logo.png" alt="" />
        </div>
        <div className="header_location">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <h2>Москва</h2>
        </div>
        <div className="header_call">
          <h1>8 495 018-32-10</h1>
          <h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </svg>
            <a href="tel:8 495 018-32-10">Заказать звонок</a>
          </h2>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <Link>Оплата</Link>
            </li>
            <li>
              <Link>Доставка</Link>
            </li>
            <li>
              <Link>Поставщикам</Link>
            </li>
            <li>
              <Link>Статьи</Link>
            </li>
            <li>
              <Link>Контакты</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;