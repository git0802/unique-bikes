'use client';
import logo from '@/../public/images/logo/logo.svg';
import Image from 'next/image';
import MainContainer from '@/components/layout/MainContainer/MainContainer';
import { Roboto } from 'next/font/google';
import { useRouter } from 'next/navigation';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});
const Header = () => {
  const router = useRouter();

  return (
    <MainContainer>
      <div
        className={`w-full ${roboto.className} flex justify-between text-white font-400 sm:text-18px text-16px uppercase items-center`}
      >
        <Image
          src={logo}
          onClick={() => {
            router.push('/');
          }}
          alt="unique-bikes"
          width={99}
          height={53}
          className="sm:w-[99px] sm:h-[53px] w-[69px] h-[37px] cursor-pointer"
        />
        <div className="flex gap-[20px] items-center">
          <div
            className="cursor-pointer p-[5px] hover:underline"
            onClick={() => {
              router.push('/product');
            }}
          >
            About us
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Header;
