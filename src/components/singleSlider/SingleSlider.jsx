import { Link } from "react-router-dom";
import Slider from "react-slick";
import singlePrev from "../../assets/media/singlePrev.png";
import singleNext from "../../assets/media/singleNext.png";
import "./singleSlider.scss";

const PrevArrow = ({onClick}) => {
  return(
    <div className="prev_arrow_wrapper" onClick={onClick}>
      <img src={singlePrev} alt="" />
    </div>
  )
}
const NextArrow = ({onClick}) => {
  return(
    <div className="next_arrow_wrapper" onClick={onClick}>
      <img src={singleNext} alt="" />
    </div>
  )
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: < PrevArrow/>,
  prevArrow: <NextArrow />
  // nextArrow : true,
  // prevArrow : true
};

function SingleSlider(props) {
  return (
    <div className="single_slider">
      <Slider {...settings}>
          <div className="slider_item">
            <div className="info_wrapper">
              <div className="info">
                <h1>СМЕСИТЕЛИ RAIBER</h1>
                <p>уже в наличии</p>
                <button>
                  <Link>ПОДРОБНЕЕ</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="slider_item">
            <div className="info_wrapper">
              <div className="info">
                <h1>СМЕСИТЕЛИ RAIBER</h1>
                <p>уже в наличии</p>
                <button>
                  <Link>ПОДРОБНЕЕ</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="slider_item">
            <div className="info_wrapper">
              <div className="info">
                <h1>СМЕСИТЕЛИ RAIBER</h1>
                <p>уже в наличии</p>
                <button>
                  <Link>ПОДРОБНЕЕ</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="slider_item">
            <div className="info_wrapper">
              <div className="info">
                <h1>СМЕСИТЕЛИ RAIBER</h1>
                <p>уже в наличии</p>
                <button>
                  <Link>ПОДРОБНЕЕ</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="slider_item">
            <div className="info_wrapper">
              <div className="info">
                <h1>СМЕСИТЕЛИ RAIBER</h1>
                <p>уже в наличии</p>
                <button>
                  <Link>ПОДРОБНЕЕ</Link>
                </button>
              </div>
            </div>
          </div>
        </Slider>
    </div>
  );
}

export default SingleSlider;