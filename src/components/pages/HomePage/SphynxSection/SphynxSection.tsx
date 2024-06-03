import Image from 'next/image';
import bicycle from '../../../../../public/images/home-page/sphynx.png';
import sphynx from '../../../../../public/images/home-page/sphynx.svg';
import { Barlow_Condensed } from 'next/font/google';
const barlowCondensed = Barlow_Condensed({
  weight: ['400'],
  subsets: ['latin'],
});
const SphynxSection = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center mid:pt-[190px] md:pt-[140px] pt-[60px] mid:pb-[90px] md:pb-[50px] pb-[30px]">
      <div className="w-full md:w-auto">
        <h2
          className={`text-black uppercase font-400 mid:text-50px md:text-40px text-28px tracking-[0.2em] ${barlowCondensed.className}`}
        >
          the <span className="text-red">Sphynx</span> model
        </h2>
      </div>
      <div
        className="flex  items-end justify-end mt-[90px] md:mt-0
       w-full relative"
      >
        <div className="z-10 md:mb-[-30px] md:mr-[30px] mr-[50px] ">
          <Image
            src={bicycle}
            alt="Sphynx"
            width={1000}
            height={800}
            className="md:w-[50vw] aspect-[1.23/1] w-[90vw]"
          />
        </div>
        <div className="absolute bottom-0 top-[-60px]  bg-red flex items-end aspect-[1/1.3] px-[15px]   mid:mr-[-100px] md:mr-[-50px] mr-[-30px]">
          <Image
            src={sphynx}
            alt="Sphynx"
            width={1000}
            height={800}
            className="sm:w-[auto] aspect-[2.54/1] w-[300px] max-w-[480px] "
          />
        </div>
      </div>
    </div>
  );
};

export default SphynxSection;
