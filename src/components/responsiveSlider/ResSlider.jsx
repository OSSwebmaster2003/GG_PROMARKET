import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../../ui/productCard/ProductCard';
import prev from "../../assets/slider/prev.png";
import next from "../../assets/slider/next.png";
import "./resSlider.scss";

function ResSlider({items}) {

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
            <ProductCard key ={id} {...props}/>
          ))}
        </Slider>
    </div>
  );
}

export default ResSlider;