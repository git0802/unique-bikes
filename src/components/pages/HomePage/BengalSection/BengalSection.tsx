import Image from 'next/image';
import bicycle from '../../../../../public/images/home-page/bengal.png';
import bengal from '../../../../../public/images/home-page/bengal.svg';
import { Barlow_Condensed } from 'next/font/google';
const barlowCondensed = Barlow_Condensed({
  weight: ['400'],
  subsets: ['latin'],
});
const BengalSection = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center mid:pt-[90px] md:pt-[60px] pt-[30px] mid:pb-[90px] md:pb-[50px] pb-[30px]">
      <div className="w-full md:w-auto">
        <h2
          className={`text-black uppercase font-400 mid:text-50px md:text-40px text-28px tracking-[0.2em] ${barlowCondensed.className}`}
        >
          the <span className="text-red">Bengal</span> model
        </h2>
      </div>
      <div
        className="flex  items-end justify-end mt-[30px] md:mt-0
       w-full relative"
      >
        <div className="z-10 md:mb-[-30px] md:mr-[30px] mr-[50px] ">
          <Image
            src={bicycle}
            alt="Bengal"
            width={1000}
            height={1060}
            className="md:w-[50vw] aspect-[1.006/1] w-[90vw]"
          />
        </div>
        <div className="absolute bottom-0 top-[70px]  bg-red flex items-end aspect-[1/1.3] px-[15px]   mid:mr-[-100px] md:mr-[-50px] mr-[-30px]">
          <Image
            src={bengal}
            alt="Bengal"
            width={1000}
            height={800}
            className="sm:w-[auto] aspect-[2.54/1] w-[300px] max-w-[480px] "
          />
        </div>
      </div>
    </div>
  );
};

export default BengalSection;
