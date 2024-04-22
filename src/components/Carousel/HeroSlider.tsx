import React from 'react';
import SliderHero from './CarouselForHero';
import Hero1 from "../../assets/image/HeroSlider_1.jpeg"
import Hero2 from "../../assets/image/HeroSilder_2.jpeg"
import Hero3 from "../../assets/image/HeroSlider_3.jpeg"

const slides = [
  {
    imgSrc: Hero1,
    altText: 'Image 1',
    title: 'Slide 1',
    description: 'Description for Slide 1',
  },
  {
    imgSrc: Hero2,
    altText: 'Image 2',
    title: 'Slide 2',
    description: 'Description for Slide 2',
  },
  {
    imgSrc: Hero3,
    altText: 'Image 3',
    title: 'Slide 3',
    description: 'Description for Slide 3',
  },
];

const Hero: React.FC = () => {
  return (
    <div className="w-70">
      <SliderHero slides={slides} />
    </div>
  );
};

export default Hero;
