'use client';
import { Barlow_Condensed, Roboto } from 'next/font/google';
import { useRouter } from 'next/navigation';

const barlowCondensed = Barlow_Condensed({
  weight: ['600'],
  subsets: ['latin'],
});
const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
});
const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="w-full flex justify-end">
      <div
        className={`${barlowCondensed.className} md:w-1/2 md:min-w-[500px] md:pt-[40px] pt-[20px]`}
      >
        <h1 className="text-white uppercase font-600 mid:text-50px md:text-40px text-28px tracking-[0.2em]">
          be
          <span className="text-red">
            {' '}
            unique <br />
            ride
          </span>{' '}
          with style.
        </h1>
        <button
          onClick={() => {
            router.push('/product');
          }}
          className={`bg-white-25 md:mt-[40px] mt-[20px] text-white-80 p-[10px] md:text-16px text-14px border-[1px] border-light-border text-white-80 ${roboto.className} uppercase`}
        >
          Product
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
