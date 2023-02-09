import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/header/logo.png"
import "./header.scss";

function Header(props) {
  const [navStatus , setNavStatus] = useState(false)
  return (
    <header>
      <div className="header_wrapper">
        <div className="header_logo">
          <img src={logo} alt="" />
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
        <div className={!navStatus ? "header_right" : "header_right header_right_open"}>
          <div className="mobile_toggle_closer" onClick={() => setNavStatus(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </div>
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
        <div className="mobile_toggle" onClick={() => setNavStatus(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;