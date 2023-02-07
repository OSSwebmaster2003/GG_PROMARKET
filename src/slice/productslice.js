import { createSlice } from "@reduxjs/toolkit";
import sink1 from "../assets/products/sink1.png";
import bath1 from "../assets/products/bath1.png";
import shower1 from "../assets/products/shower1.png";
import toilet1 from "../assets/products/toilet1.png";
import machine1 from "../assets/products/machine1.png";
import sink2 from "../assets/products/sink2.png";
import shower2 from "../assets/products/shower2.png";
import bath2 from "../assets/products/bath2.png";
import toilet2 from "../assets/products/toilet2.png";
import sink3 from "../assets/products/sink3.png";
import articles1 from "../assets/articles/articles1.png";
import articles2 from "../assets/articles/articles2.png";
import articles3 from "../assets/articles/articles3.png";
import articles4 from "../assets/articles/articles4.png";
import articles5 from "../assets/articles/articles5.png";
import articles6 from "../assets/articles/articles6.png";

const initialState = {
  isLoading: false,
  products: [
    {
      id: 1,
      name: "Раковина Roca Debba 32799400Y, 60x48 см",
      img: sink1,
      status1: "ХИТ",
      status2: "",
      country: "Испания",
      cost: "2 601 ₽",
      discountCost: "no discount",
      type: "Раковины",
      color: "Белый",
      material: "Чугун",
      volume: "7 л",
    },
    {
      id: 2,
      name: "Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB",
      img: bath1,
      status1: "ХИТ",
      status2: "АКЦИЯ",
      country: "Германия",
      cost: "28 601 ₽",
      discountCost: "26 990 ₽",
      type: "Ванны",
      color: "Белый",
      material: "Чугун",
      volume: "180 л",
    },
    {
      id: 3,
      name: "Душевая система Raiber R0808, хром",
      img: shower1,
      status1: "ХИТ",
      status2: "",
      country: "Германия",
      cost: "12 207 ₽",
      discountCost: "no discount",
      type: "Душевые кабины",
      color: "Белый",
      material: "iron",
      volume: "4 л",
    },
    {
      id: 4,
      name: "Унитаз AM.PM Spirit V2.0 C708607SC компакт с сиденьем микролифт",
      img: toilet1,
      status1: "ХИТ",
      status2: "",
      country: "Испания",
      cost: "14 764 ₽",
      discountCost: "no discount",
      type: "Унитазы",
      color: "Белый",
      material: "Чугун",
      volume: "5 л",
    },
    {
      id: 5,
      name: "Полотенцесушитель электрический Laris Кватро П7 40 x 60 см, 85 Вт, со...",
      img: machine1,
      status1: "ХИТ",
      status2: "",
      country: "Россия, Украина",
      cost: "12 730 ₽",
      discountCost: "no discount",
      type: "Унитазы",
      color: "Белый",
      material: "iron",
      volume: "no volume",
    },
    {
      id: 6,
      name: "Смеситель Hansgrohe Logis 71070000 для раковины",
      img: sink2,
      status1: "",
      status2: "АКЦИЯ",
      country: "Германия",
      cost: "7 601 ₽",
      discountCost: "6 050 ₽",
      type: "Смесители",
      color: "Белый",
      material: "Чугун",
      volume: "no volume",
    },
    {
      id: 7,
      name: "Душевая кабина Black&White Galaxy G8800, 80 x 110 см",
      img: shower2,
      status1: "",
      status2: "АКЦИЯ",
      country: "Германия",
      cost: "90 580 ₽",
      discountCost: "84 000 ₽",
      type: "Душевые системы",
      color: "Белый",
      material: "glass and iron",
      volume: "no volume",
    },
    {
      id: 8,
      name: "Ванна акриловая Am.Pm Spirit W72A-160L100W-A2, 160 x 100 см, левосторонняя",
      img: bath2,
      status1: "",
      status2: "АКЦИЯ",
      country: "Германия",
      cost: "36 900 ₽",
      discountCost: "29 990 ₽",
      type: "Ванны",
      color: "Белый",
      material: "Чугун",
      volume: "210 l",
    },
    {
      id: 9,
      name: "Унитаз Laguraty 8074 крышка микролифт, с функцией биде",
      img: toilet2,
      status1: "",
      status2: "АКЦИЯ",
      country: "Китай",
      cost: "34 900 ₽",
      discountCost: "32 108 ₽",
      type: "Унитазы",
      color: "Белый",
      material: "Чугун",
      volume: "no volume",
    },
    {
      id: 10,
      name: "Раковина Laufen Palace 120 см 8.1170.4.000.104.1",
      img: sink3,
      status1: "",
      status2: "АКЦИЯ",
      country: "Швейцария",
      cost: "58 601 ₽",
      discountCost: "53 458 ₽",
      type: "Зеркала",
      color: "Белый",
      material: "Чугун",
      volume: "no volume",
    },
  ],
  articles: [
    {
      id: "1",
      img: articles1,
      name: "Актуальные и необычные аксессуары для ванной комнаты ",
    },
    {
      id: "2",
      img: articles2,
      name: "Какой температуры должна быть горячая вода? ",
    },
    {
      id: "3",
      img: articles3,
      name: "Конденсат на бачке унитаза: причины появления и способы устранения ",
    },
    {
      id: "4",
      img: articles4,
      name: "Анаэробный герметик для резьбовых соединений ",
    },
    {
      id: "5",
      img: articles5,
      name: "GG Promarket — крупный ритейлер сантехнического оборудования, плитки и аксессуаров. Мы нацелены на то, чтобы сделать процесс выбора ",
    },
    {
      id: "6",
      img: articles6,
      name: "Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB",
    },
  ],
  error: null,
};

export const productslice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productslice.actions;
export default productslice.reducer;
