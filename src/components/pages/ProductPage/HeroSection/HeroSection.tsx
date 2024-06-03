import bicycle from '@/../public/images/product-page/product-hero-bg.png';
import euphoria from '@/../public/images/product-page/euphoria.svg';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="w-full flex justify-center items-end relative">
      <div className="absolute top-[60px] md:top-[90px] mid:top-[70px] 2xl:top-[100px] left-0">
        <Image
          src={euphoria}
          alt="euphoria"
          width={1000}
          height={800}
          className="md:w-[50vw] aspect-[1.92/1] w-[80vw] max-w-[600px]"
        />
      </div>
      <div className="z-10">
        <Image
          src={bicycle}
          alt="euphoria"
          width={1000}
          height={800}
          className="md:w-[60vw] aspect-[1.57/1] w-[95vw] mt-[130px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
