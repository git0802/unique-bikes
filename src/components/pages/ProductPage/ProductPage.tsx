import MainContainer from '@/components/layout/MainContainer/MainContainer';
import FollowUsSection from '@/components/pages/HomePage/FollowUsSection/FollowUsSection';
import HeroSection from '@/components/pages/ProductPage/HeroSection/HeroSection';
import CustomizeSection from '@/components/pages/ProductPage/CustomizeSection/CustomizeSection';
import DescriptionSection from '@/components/pages/ProductPage/DescriptionSection/DescriptionSection';

const ProductPage = () => {
  return (
    <div className="w-full">
      <div className="bg-black md:mt-[-135px] mt-[-95px]">
        <div className="mx-[auto] sm:aspect-video aspect-square flex items-center  max-w-[1440px]">
          <MainContainer>
            <HeroSection />
          </MainContainer>
        </div>
      </div>
      <MainContainer>
        <CustomizeSection />
      </MainContainer>
      <MainContainer>
        <DescriptionSection />
      </MainContainer>
      <MainContainer>
        <FollowUsSection />
      </MainContainer>
    </div>
  );
};

export default ProductPage;
