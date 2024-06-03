import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import React from 'react';
interface IImageSliderProps {
  images: string[];
}
const ImageSlider: React.FC<IImageSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div
      className={
        'z-0 w-[auto] max-w-[600px]  max-h-[85vh] object-cover object-top'
      }
    >
      <Slider {...settings}>
        {images?.map((i: string, index: number) => (
          <div key={index}>
            <Image
              src={i}
              alt={`Photo ${index}`}
              width={600}
              height={600}
              className="sm:max-w-[600px] max-h-[85vh] object-cover object-top sm:rounded-[16px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
