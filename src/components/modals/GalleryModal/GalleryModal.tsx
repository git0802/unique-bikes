'use client';
import Image from 'next/image';
import x from '@/../public/images/icons/white-x.svg';
import React, { useEffect, useState } from 'react';
import ImageSlider from '@/components/common/ImageSlider/ImageSlider';
import { imagesSet } from '@/constants/followUsGallery';

interface IGalleryModalProps {
  setIsOpenModal: (i: boolean) => void;
  currentImg: string;
}
const GalleryModal: React.FC<IGalleryModalProps> = ({
  setIsOpenModal,
  currentImg,
}) => {
  const [images, setImages] = useState([currentImg]);

  useEffect(() => {
    const filteredImages = imagesSet.filter((i) => i !== currentImg);
    setImages([currentImg, ...filteredImages]);
  }, [currentImg]);
  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpenModal(false);
      }}
      className="customBlur backdrop-blur-[2px] z-[1000] flex items-center justify-center top-0 bottom-0 left-0 right-0 h-[100vh] w-[100vw] bg-opacity-45
                overflow-hidden fixed"
    >
      <div
        className={`rounded-[30px] overflow-hidden relative sm:rounded-2xl max-w-500px `}
      >
        <button
          onClick={() => setIsOpenModal(false)}
          className="shadow-custom-shadow rounded-full bg-custom-border z-10 absolute sm:right-[32px] right-[24px] top-[24px]"
        >
          <Image src={x} alt={'Close'} className={'h-[24px] w-[24px]'} />
        </button>
        <div className={`max-w-600px`}>
          <ImageSlider images={images as string[]} />
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
