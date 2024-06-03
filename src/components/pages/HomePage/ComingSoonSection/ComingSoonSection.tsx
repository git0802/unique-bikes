import { Barlow_Condensed } from 'next/font/google';
const barlowCondensed = Barlow_Condensed({
  weight: ['400'],
  subsets: ['latin'],
});
const ComingSoonSection = () => {
  return (
    <div className="md:w-full w-[100vw] aspect-[1.62/1] bg-[url(/images/home-page/comming-soon-bg.png)] bg-no-repeat bg-cover flex items-center justify-center p-[15px] mid:mx-[auto] md:mx-[-50px] mx-[-30px] mid:mb-[90px] md:mb-[50px] mb-[30px]">
      <div>
        <h2
          className={`text-white text-center uppercase font-400 mid:text-50px md:text-40px text-28px tracking-[0.2em] ${barlowCondensed.className}`}
        >
          <span className="text-red">coming soon!</span> <br /> eco friendly
          e-bike
        </h2>
      </div>
    </div>
  );
};

export default ComingSoonSection;
