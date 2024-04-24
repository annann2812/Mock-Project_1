import React from 'react';
import SliderHero from './CarouselForHero';
import Hero1 from "../../assets/image/HeroSlider_1.jpeg"
import Hero2 from "../../assets/image/HeroSilder_2.jpeg"
import Hero3 from "../../assets/image/HeroSlider_3.jpeg"


const slides = [
  {
    imgSrc: "https://m.media-amazon.com/images/I/61oSyFbfluL._AC_SX395_.jpg",
    altText: "Golf Shoes",
    title: "Golf Shoes",
    description: "Description for Golf Shoes",
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/51mNlxDSv1L._AC_SY395_.jpg",
    altText: "Image 2",
    title: "Ballet Flats",
    description: "Description for Ballet Flats",
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/51yfg7sxn4L._AC_SX395_.jpg",
    altText: "Image 3",
    title: "Espadrille Wedges",
    description: "Description for Espadrille Wedges",
  },
];

const Hero: React.FC = () => {
  return (
    <div className="w-70 h-50">
      <SliderHero slides={slides} />
    </div>
  );
};

export default Hero;
