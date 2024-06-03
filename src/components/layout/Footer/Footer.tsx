import logo from '@/../public/images/logo/logo.svg';
import Image from 'next/image';
import MainContainer from '@/components/layout/MainContainer/MainContainer';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});
const Header = () => {
  return (
    <MainContainer>
      <div className={`w-full ${roboto.className} text-white `}>
        <div className="flex justify-between items-center">
          {' '}
          <div>
            <Image
              src={logo}
              alt="unique-bikes"
              width={99}
              height={53}
              className="sm:w-[99px] sm:h-[53px] w-[69px] h-[37px]"
            />
          </div>
          <div className="sm:max-w-[250px] max-w-[230px]">
            <div className="sm:mb-[17px] mb-[10px]">
              <p className="font-700 sm:text-18px text-16px leading-[128%] text-white">
                SERVICE@UNIQUEBIKES.COM
              </p>
            </div>
            <div>
              <p className="text-white-80 sm:text-16px text-14px leading-[125%] font-400">
                45 Fairground Rd, New York, United States
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:mt-[40px] mt-[20px] text-white-80 sm:text-16px text-14px font-400">
          <p>©Copyright Unique bikes</p>
        </div>
      </div>
    </MainContainer>
  );
};

export default Header;
