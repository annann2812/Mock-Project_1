import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Link } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";

interface Slide {
  preTitle: string;
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  title2: string;
  desc: string;
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
    autoplaySpeed: 2500,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="relative transition-all">
          <img
            src={slide.imgSrc}
            alt={slide.altText}
            className="w-full object-cover"
          />
          <div className="absolute bottom-0 w-[50%] left-0 p-8 px-20 text-white flex flex-col gap-3">
            <p className="text-xl text-gray-900 text-primary-01 uppercase">{slide.preTitle}</p>
            <p className="text-4xl font-medium text-gray-900 uppercase">{slide.description}</p>
            <p className="text-lg text-gray-700">{slide.desc}</p>
            <h2 className="text-[70px] ease-in-out duration-300 font-semibold text-primary-01 ">
              {slide.title}
            </h2>
            {/* <p className="text-2xl font-thin text-gray-900">{slide.title2}</p> */}

            <Link to = "/sale" className=" font-thin hover:font-medium hover:translate-x-3 delay-200 duration-150 text-[#FC6736] flex items-center"><MdPlayArrow className="mr-2"/>See more</Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderHero;
