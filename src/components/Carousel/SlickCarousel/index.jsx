import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true
  };
  return (
    <Slider {...settings}>
        {
        props.items.map((each) => {
            return (
                <div className='item p-3 mx-3 d-flex' key={each.name}>
                   <p>{each.name}</p>
                   <img className="multiCarouselImage" src={each.image} alt={each.image} />
                </div>

            )
        })
        }
    </Slider>
  );
}