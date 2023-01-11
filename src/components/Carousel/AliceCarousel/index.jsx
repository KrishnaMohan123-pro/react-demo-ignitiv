import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './index.css';
const handleDragStart = (e) => e.preventDefault();
function Gallery(props){
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 1 },
};
  const propItems = props.items.map((each) => {
      return (
             <img className='aliceCarouselImage' src={each.image} onDragStart={handleDragStart} alt="presentation" />
      )
  });
    return (
      <AliceCarousel mouseTracking items={propItems}  responsive={responsive}
      controlsStrategy="alternate" />
    );

}


export default Gallery;