import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './index.css';
    function SampleCode(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <div className="multiSlideCarousel">
    
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
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
                   {/* <p>{each.name}</p> */}
                   <img className="multiCarouselImage" src={each.image} alt={each.image} />
                </div>

            )
        })
        }

         </Carousel>
       </div>
    );

}
export default SampleCode;