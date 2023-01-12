// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './index.css'

// export default function SimpleSlider(props) {
//   var settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay : true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true
//   };
//   return (
//     <Slider {...settings}>
//         {
//         props.items.map((each) => {
//             return (
//                 <div className='' key={each.name}>
//                    <img className="slickCarouselImage" src={each.image} alt={each.image} />
//                 </div>

//             )
//         })
//         }
//     </Slider>
//   );
// }

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './index.css';
    function SimpleSlider(props) {
    const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
    };
    return (
        <div>
        <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        arrows={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className='location-jobs '
       >
          {
          props.items.map((each) => {
              return (
                  <div className='item p-3 mx-3 d-flex' key={each.name}>
                    <img className="slickCarouselImage" src={each.image} alt={each.image} />
                  </div>

              )
          })
        }

         </Carousel>
       </div>
    );

}
export default SimpleSlider;