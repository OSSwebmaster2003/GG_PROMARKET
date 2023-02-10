import React from 'react';
import { useSelector } from 'react-redux';
import "./tableOfContents.scss"

function TableOfContents(props) {
  const {productDesc} = useSelector(state => state.productslice)
  return (
    <ol className='toc-list' role="list">
      <li>
        <a href="">
          <span className='title'>Страна производства</span>
          <span className='page'><span className='visually hidden'>{productDesc.country}</span></span>
        </a>
      </li>

      <li>
        <a href="">
          <span className='title'>Производитель:</span>
          <span className='page'><span className='visually hidden'>Roca</span></span>
        </a>
      </li>

      <li>
        <a href="">
          <span className='title'>Другое название:</span>
          <span className='page'><span className='visually hidden'>no other name</span></span>
        </a>
      </li>

      <li>
        <a href="">
          <span className='title'>Артикул:</span>
          <span className='page'><span className='visually hidden'>{productDesc.id}</span></span>
        </a>
      </li>

      <li>
        <a href="">
          <span className='title'>Ширина:</span>
          <span className='page'><span className='visually hidden'>no width</span></span>
        </a>
      </li>

      <li>
        <a href="">
          <span className='title'>Высота:</span>
          <span className='page'><span className='visually hidden'>no height</span></span>
        </a>
      </li>

      <li>
        <a href="">
          <span className='title'>Длина:</span>
          <span className='page'><span className='visually hidden'>no length</span></span>
        </a>
      </li>

      <li>
        <a href="">
          <span className='title'>Цвет:</span>
          <span className='page'><span className='visually hidden'>{productDesc.color}</span></span>
        </a>
      </li>

      <li>
        <a href="">
          <span className='title'>Материал:</span>
          <span className='page'><span className='visually hidden'>{productDesc.material}</span></span>
        </a>
      </li>

      <li>
        <a href="">
          <span className='title'>Объем:</span>
          <span className='page'><span className='visually hidden'>{productDesc.volume}</span></span>
        </a>
      </li>

      <li>
        <a href="">
          <span className='title'>Гарантийный срок:</span>
          <span className='page'><span className='visually hidden'>no period</span></span>
        </a>
      </li>
    </ol>
  );
}

export default TableOfContents;