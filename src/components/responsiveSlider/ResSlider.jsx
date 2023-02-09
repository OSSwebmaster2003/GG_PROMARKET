import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../../ui/productCard/ProductCard';
import "./resSlider.scss";

function ResSlider({items , mainBreak}) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: mainBreak,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
          {items.map(({id , ...props}) => (
            <ProductCard key ={id} id={id} {...props}/>
          ))}
        </Slider>
    </div>
  );
}

export default ResSlider;