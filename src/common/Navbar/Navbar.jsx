import React from 'react';
import { Link } from 'react-router-dom';
import user from "../../assets/header/user.png";
import heart from "../../assets/header/heart.png";
import cart from "../../assets/header/cart.png";
import "./navbar.scss";

function Navbar(props) {
  return (
    <nav>
      <div className="left_navbar">
        <div className="catalog">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          КАТАЛОГ ТОВАРОВ
        </div>
        <div className="discounts">АКЦИИ</div>
        <div className="brands">БРЕНДЫ</div>
      </div>
      <div className="search_box">
        <div className="search_wrapper">
          <input type="text" placeholder='Что вы ищете?' />
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="right_navbar">
        <div className="right_navbar_wrapper">
          <Link to="/profile">
            <img src={user} alt="" />
          </Link>
          <Link to="/wishlist">
            <img src={heart} alt="" />
          </Link>
          <Link to="/cart">
            <img src={cart} alt="" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;