import React from 'react';
import { Link } from 'react-router-dom';
import whatsapp from "../../assets/media/whatsapp.png";
import instagram from "../../assets/media/instagram.png";
import telegram from "../../assets/media/telegram.png";
import yandex_map from "../../assets/footer/yandex_map.png";
import logo from "../../assets/header/logo.png"
import "./footer.scss";

function Footer(props) {
  return (
    <footer>
      <div className="top_footer">
        <ul>
          <li>
            <Link>
              Плитка
            </Link>
          </li>
          <li>
            <Link>
              Сантехника
            </Link>
          </li>
          <li>
            <Link>
              Мебель для ванной
            </Link>
          </li>
          <li>
            <Link>
              Электроника и бытовая техника
            </Link>
          </li>
          <li>
            <Link>
              Отопление
            </Link>
          </li>
          <li>
            <Link>
              Напольное покрытие
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link>
              Оплата
            </Link>
          </li>
          <li>
            <Link>
              Доставка
            </Link>
          </li>
          <li>
            <Link>
              Поставщикам
            </Link>
          </li>
          <li>
            <Link>
              Статьи
            </Link>
          </li>
          <li>
            <Link>
              Контакты
            </Link>
          </li>
        </ul>
        <div className="call_info">
          <h1>8 495 018-32-10</h1>
          <button>
            <Link>ЗАКАЗАТЬ ЗВОНОК</Link>
          </button>
          <p>Пн-Пт: 10:00 — 20:00</p>
          <p>Сб: 10:00 — 18:00</p>
          <p>Вс: выходной</p>
        </div>
        <div className="stock">
          <pre>Склад: Москва, ул. Салтыковская, 6 стр 11</pre>
          <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox">zakaz@ggpromarket.ru</a>
        </div>
      </div>
      <div className="middle_footer">
        <div className='logo_part'>
          <Link>
            <img src={logo} alt="" />
          </Link>
          <p>© {new Date().getFullYear()} ggpromarket.ru</p>
        </div>
        <div className='media_part'>
          <Link>
            <img src={whatsapp} alt="./" />
          </Link>
          <Link>
            <img src={instagram} alt="./" />
          </Link>
          <Link>
            <img src={telegram} alt="./" />
          </Link>
        </div>
        <div className='yandex_part'>
          <img src={yandex_map} alt="" />
        </div>
      </div>
      <div className="low_footer">
        <p>Копирование всех составляющих частей сайта в какой бы то ни было форме без письменного разрешения владельцев авторских прав запрещено. Сайт носит исключительно информационный характер, 
          и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437(2) Гражданского кодекса Российской Федерации.Наличие 
          и цены уточняйте у наших операторов.
        </p>
        <p>Сайт использует технологию cookie. Используя сайт, Вы соглашаетесь с <a href="https://policies.google.com/technologies/cookies?hl=en-US">правилами использования cookie</a>, а также даете <a href="https://policies.google.com/technologies/cookies?hl=en-US">согласие на обработку персональных данных</a></p>
      </div>
    </footer>
  );
}

export default Footer;