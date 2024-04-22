import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

interface Slide {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
}

interface SliderHeroProps {
  slides: Slide[];
}

const SliderHero: React.FC<SliderHeroProps> = ({ slides }) => {
  const { products } = useSelector((state: RootState) => state.loopStore);
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="relative">
          <img
            src={slide.imgSrc}
            alt={slide.altText}
            className="w-full h-[70%]"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 text-white">
            <h2 className="text-4xl font-bold">{slide.title}</h2>
            <p className="text-lg">{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderHero;
