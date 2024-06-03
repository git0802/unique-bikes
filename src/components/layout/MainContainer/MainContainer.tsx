import React from 'react';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto w-full overflow-hidden flex justify-center max-w-[1440px] mid:px-[100px] md:px-[50px] px-[30px]">
      {children}
    </div>
  );
};

export default MainContainer;
