import HeroSection from '@/components/pages/HomePage/HeroSection/HeroSection';
import SphynxSection from '@/components/pages/HomePage/SphynxSection/SphynxSection';
import SiameseSection from '@/components/pages/HomePage/SiameseSection/SiameseSection';
import BengalSection from '@/components/pages/HomePage/BengalSection/BengalSection';
import ComingSoonSection from '@/components/pages/HomePage/ComingSoonSection/ComingSoonSection';
import FollowUsSection from '@/components/pages/HomePage/FollowUsSection/FollowUsSection';
import MainContainer from '@/components/layout/MainContainer/MainContainer';

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="bg-black md:mt-[-135px] mt-[-95px]">
        <div className="mx-[auto] sm:aspect-video aspect-square bg-[url(/images/home-page/hero-bg.png)] bg-no-repeat sm:bg-contain bg-cover flex items-center  max-w-[1440px]">
          <MainContainer>
            <HeroSection />
          </MainContainer>
        </div>
      </div>
      <MainContainer>
        <SphynxSection />
      </MainContainer>
      <MainContainer>
        <SiameseSection />
      </MainContainer>
      <MainContainer>
        <BengalSection />
      </MainContainer>
      <MainContainer>
        <ComingSoonSection />
      </MainContainer>
      <MainContainer>
        <FollowUsSection />
      </MainContainer>
    </div>
  );
};

export default HomePage;
