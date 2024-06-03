import Image from 'next/image';
import bicycle from '../../../../../public/images/home-page/siamese.png';
import siamese from '../../../../../public/images/home-page/siamese.svg';
import { Barlow_Condensed } from 'next/font/google';
const barlowCondensed = Barlow_Condensed({
  weight: ['400'],
  subsets: ['latin'],
});

const SiameseSection = () => {
  return (
    <div className="w-full flex md:flex-row flex-col-reverse items-center mid:pt-[90px] md:pt-[60px] pt-[30px] mid:pb-[90px] md:pb-[50px] pb-[30px]">
      <div
        className="flex  items-start justify-end mt-[30px] md:mt-0
       w-full relative"
      >
        <div className="absolute bottom-0 top-0 left-0 bg-red flex items-end aspect-[1/1.15] pl-[15px] mid:pr-[60px] pr-[30px]   mid:ml-[-100px] md:ml-[-50px] ml-[-30px]">
          <Image
            src={siamese}
            alt="Siamese"
            width={1000}
            height={800}
            className="sm:w-[auto] aspect-[2.54/1] w-[300px] max-w-[380px] "
          />
        </div>
        <div className="z-10  md:mr-[30px] mr-[50px] pl-[15px] ">
          <Image
            src={bicycle}
            alt="Siamese"
            width={1000}
            height={1060}
            className="md:w-[50vw] aspect-[1.6/1] w-[90vw]"
          />
        </div>
      </div>
      <div className="w-full">
        <h2
          className={`md:pl-[40px] text-left w-full text-black uppercase font-400 mid:text-50px md:text-40px text-28px tracking-[0.2em] ${barlowCondensed.className}`}
        >
          the <span className="text-red">Siamese</span> model
        </h2>
      </div>
    </div>
  );
};

export default SiameseSection;
