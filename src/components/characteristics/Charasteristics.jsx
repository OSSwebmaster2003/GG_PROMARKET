import React from 'react';
import TableOfContents from '../../ui/tableOfContents/TableOfContents';
import pdf from "../../assets/media/pdf.png";
import "./characteristics.scss";
import SetProducts from '../setProducts/SetProducts';

function Charasteristics(props) {
  return (
    <div className='characteristics'>
      <div className="table_contents">
        <h1>Характеристики</h1>
        <TableOfContents/>
      </div>
      <div className="pdf_download">
        <img src={pdf} alt="" />
        <p>Схема подключения, документация</p>
      </div>
      <SetProducts/>
    </div>
  );
}

export default Charasteristics;