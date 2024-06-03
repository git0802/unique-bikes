'use client';
import Slider from 'react-slick';
import React from 'react';
import { Slide } from '@/types/multiImagesSlider';
import Image from 'next/image';

interface IMultiImagesSliderProps {
  slides: Slide[];
}

const MultiImagesSlider: React.FC<IMultiImagesSliderProps> = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides?.map((i: Slide, index: number) => (
          <div key={index} className="w-auto px-[40px] ">
            <div className="w-full flex justify-center items-center">
              <div className="max-w-[265px] justify-self-center flex flex-col justify-center gap-[15px]">
                <Image
                  src={i.img}
                  alt={`Photo ${index}`}
                  width={600}
                  height={600}
                  className=" aspect-[1/1] object-cover object-top"
                />
                <div className="uppercase md:text-24px sm:text-18px text-14px text-center text-black dark:text-white">
                  {i.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultiImagesSlider;
