import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Slider from 'react-slick';
import { addToCart } from '../../slice/cartSlice';
import { getProductDescription } from '../../slice/productslice';
import ProductCard from '../../ui/productCard/ProductCard';
import "./resSlider.scss";

function ResSlider({items , mainBreak}) {
  const {productDesc} = useSelector(state => state.productslice)
  const {cart} = useSelector(state => state.cartSlice)
  const dispatch = useDispatch()
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

  const getProductDesc = (id) => {
    const index = items.findIndex((item) => item.id === id)
    dispatch(getProductDescription(items[index]))
    console.log(productDesc)
  }

  const addItemToCart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id)
    
    if(index < 0){
      const newProduct = {
        ...product,
        quantity : 1
      }
      dispatch(addToCart([...cart , newProduct]))
    }else{
      const newCart = cart.map((itemOrder , itemIndex) => {
        if(itemIndex === index){
          return{
            ...itemOrder,
            quantity : itemOrder.quantity + 1
          }
        }else{
          return itemOrder
        }
      })
      dispatch(addToCart(newCart))
    }
  }

  return (
    <div>
      <Slider {...settings}>
          {items.map(({id , ...props}) => (
            <ProductCard 
            key ={id} 
            id={id} 
            {...props} 
            getProductDesc={() => getProductDesc(id)}
            addItemToCart={() => addItemToCart({id , ...props})}
            />
          ))}
        </Slider>
    </div>
  );
}

export default ResSlider;