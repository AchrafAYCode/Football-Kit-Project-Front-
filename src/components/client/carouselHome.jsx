"use client";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const tabSliders = [

    {src: "https://res.cloudinary.com/dmf4akoqh/image/upload/v1714767354/css.png"},
    
    {src: "https://res.cloudinary.com/dmf4akoqh/image/upload/v1714767442/z6zvnep2nefofvz5yvdx.png" },
    
    {src: "https://res.cloudinary.com/dmf4akoqh/image/upload/v1714767497/hbmhlxbiq9gdjcemedgk.png"},
    
    {src: "https://res.cloudinary.com/dmf4akoqh/image/upload/v1714769870/yix1v77szu1tea3skasf.png"},

    {src :"https://res.cloudinary.com/dmf4akoqh/image/upload/v1714817923/laq6twa5jng7n4z7vfly.png"}
    
    ]
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        
      {tabSliders.map((tab, i) => <Carousel.Item key={i}>
<img src={tab.src}  />
</Carousel.Item>)
}
        
      <Carousel.Item>
        <img
          src="https://res.cloudinary.com/dmf4akoqh/image/upload/v1714768326/qihl2vieu1qa2ibrtes0.png"
        />
      </Carousel.Item>
    
    </Carousel>
    
  );
  
}
export default ControlledCarousel;
