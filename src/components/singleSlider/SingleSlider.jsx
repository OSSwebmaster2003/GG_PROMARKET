import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./singleSlider.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />
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