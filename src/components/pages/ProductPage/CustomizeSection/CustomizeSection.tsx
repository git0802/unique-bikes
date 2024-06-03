import MultiImagesSlider from '@/components/common/MultiImagesSlider/MultiImagesSlider';
import { multiImgsSlides } from '@/constants/multiImgsSlides';

const CustomizeSection = () => {
  return (
    <div className="w-full mid:py-[90px] md:py-[50px] py-[30px]">
      <div className="pb-[24px] w-full border-b-[1px] border-black-30 flex justify-center">
        <h2 className="uppercase md:text-34px sm:text-28px text-20px  font-500">
          Customize
        </h2>
      </div>
      <div className="mt-[30px]">
        <MultiImagesSlider slides={multiImgsSlides} />
      </div>
    </div>
  );
};

export default CustomizeSection;
