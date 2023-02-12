import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Slider from 'react-slick';
import { addToCart, addToWishlist, deleteWishlistElement } from '../../slice/cartSlice';
import { getProductDescription } from '../../slice/productslice';
import ProductCard from '../../ui/productCard/ProductCard';
import resPrev from "../../assets/media/resPrev.png";
import resNext from "../../assets/media/nextPrev.png";
import "./resSlider.scss";

function ResSlider({items , mainBreak}) {
  const {productDesc} = useSelector(state => state.productslice);
  const {cart} = useSelector(state => state.cartSlice);
  const {wishlist} = useSelector(state => state.cartSlice);
  const dispatch = useDispatch();

  const PrevArrow = ({onClick}) => {
    return(
      <div className="arrow_wrapper_prev" onClick={onClick}>
        <img src={resPrev} alt="" />
      </div>
    )
  }
  const NextArrow = ({onClick}) => {
    return(
      <div className="arrow_wrapper_next" onClick={onClick}>
        <img src={resNext} alt="" />
      </div>
    )
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: mainBreak,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  const addItemToWishlist = (product) => {
    const index = wishlist.findIndex((item) => item.id === product.id)
    if(index<0){
      dispatch(addToWishlist([...wishlist , product]))
    }else{
      dispatch(deleteWishlistElement(product.id))
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
            addItemToWishlist = {() => addItemToWishlist({id , ...props})}
            />
          ))}
        </Slider>
    </div>
  );
}

export default ResSlider;