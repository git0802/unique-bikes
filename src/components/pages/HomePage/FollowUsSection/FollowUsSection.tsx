'use client';
import img1 from '@/../public/images/home-page/follow-us-1.png';
import img2 from '@/../public/images/home-page/follow-us-2.png';
import img3 from '@/../public/images/home-page/follow-us-3.png';
import img4 from '@/../public/images/home-page/follow-us-4.png';
import img5 from '@/../public/images/home-page/follow-us-5.png';

import Image from 'next/image';

import { Barlow_Condensed } from 'next/font/google';
import { useEffect, useState } from 'react';
import GalleryModal from '@/components/modals/GalleryModal/GalleryModal';
import { noScroll } from '@/utils/noScroll';
const barlowCondensed = Barlow_Condensed({
  weight: ['700'],
  subsets: ['latin'],
});

const FollowUsSection = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<string>('');
  useEffect(() => {
    noScroll(isOpenModal);
  }, [isOpenModal]);
  const handleOpenGallery = (img: string) => {
    setIsOpenModal(true);
    setCurrentImg(img);
  };

  return (
    <div className="w-full mid:pt-[90px] md:pt-[60px] pt-[30px] mid:pb-[90px] md:pb-[50px] pb-[30px]">
      <div className="flex justify-center md:mb-[60px] mb-[30px]">
        <button
          className={`md:text-18px text-16px tracking-[0.2em] md:px-[40px] md:py-[20px] px-[20px] py-[10px] bg-red text-white uppercase ${barlowCondensed.className}`}
        >
          follow us @uniquebikes
        </button>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="md:w-[33%] md:pr-[15px] flex md:flex-col justify-between">
          <div
            className="mr-[20px] md:mr-0"
            onClick={() => handleOpenGallery(img1.src)}
          >
            <Image
              src={img1}
              alt="Follow Us"
              width={1000}
              height={1060}
              className=" aspect-[1.36/1]"
            />
          </div>
          <div onClick={() => handleOpenGallery(img2.src)}>
            <Image
              src={img2}
              alt="Follow Us"
              width={1000}
              height={1060}
              className=" aspect-[1.36/1] min-h-[100%]"
            />
          </div>
        </div>
        <div className="flex md:w-[66%] mt-[20px] md:mt-0">
          <div className="w-[50%]">
            <div
              className="md:px-[10px] pr-[10px]"
              onClick={() => handleOpenGallery(img3.src)}
            >
              <Image
                src={img3}
                alt="Follow Us"
                width={1000}
                height={1060}
                className="aspect-[1/1.56] h-full"
              />
            </div>
          </div>
          <div className="w-[50%] md:pl-[15px] pl-[10px] flex flex-col justify-between">
            <div onClick={() => handleOpenGallery(img4.src)}>
              <Image
                src={img4}
                alt="Follow Us"
                width={1000}
                height={1060}
                className=" aspect-[1.36/1]"
              />
            </div>
            <div onClick={() => handleOpenGallery(img5.src)}>
              <Image
                src={img5}
                alt="Follow Us"
                width={1000}
                height={1060}
                className=" aspect-[1.36/1]"
              />
            </div>
          </div>
        </div>
      </div>
      {isOpenModal && currentImg && (
        <GalleryModal setIsOpenModal={setIsOpenModal} currentImg={currentImg} />
      )}
    </div>
  );
};

export default FollowUsSection;
