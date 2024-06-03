'use client';
import React, { useEffect, useState } from 'react';

const DescriptionSection = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  useEffect(() => {
    setIndicatorStyle({
      width: document.getElementById('description')?.offsetWidth,
      left: -30,
    });
  }, []);

  const updateIndicator = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tab = e.currentTarget;
    setIndicatorStyle({
      width: tab.offsetWidth + 2,
      left: tab.offsetLeft - 30,
    });
  };
  return (
    <div className="w-full mid:pb-[90px] md:pb-[50px] pb-[30px]">
      <nav
        className="flex w-[100%] md:w-auto space-x-[30px] mb-6 relative"
        aria-label="Tabs"
      >
        <button
          id={'description'}
          className={`pb-2 uppercase md:text-34px sm:text-28px text-20px  font-500 ${
            activeTab === 'description'
              ? 'text-black dark:text-white'
              : 'text-black-70 dark:text-white-white-80'
          }`}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            setActiveTab('description');
            updateIndicator(e);
          }}
        >
          Description
        </button>
        <button
          className={`pb-2 uppercase md:text-34px sm:text-28px text-20px  font-500 ${
            activeTab === 'benefits'
              ? 'text-black dark:text-white'
              : 'text-black-70 dark:text-white-white-80'
          }`}
          onClick={(e) => {
            setActiveTab('benefits');
            updateIndicator(e);
          }}
        >
          Benefits
        </button>
        <span
          className="absolute bottom-0 ml-0 h-[2px] bg-red transition-all duration-300 ease-out"
          style={indicatorStyle}
        ></span>
      </nav>
      <div>
        {activeTab === 'description' ? (
          <div className="max-w-[955px] md:mt-[40px] mt-[20px]">
            <h3 className="md:text-34px sm:text-28px text-20px font-600 text-black mb-[20px]">
              Be unique with your choice of ride.
            </h3>
            <p className="md:text-34px sm:text-28px text-20px font-300 text-black">
              The EUPHORIA turns obstacles into features. Its nimble, poppy feel
              makes even the most mundane rides feel like they're loaded with
              features to hop, skip and jump over. It's the kind of bike that
              makes new trails feel as familiar as the back of your hand.
              <br />
              <br /> 27.5 is the fun-sized wheel size. Smaller wheels provide an
              ideal balance between toughness and weight saving making them the
              most fleet-footed (or quick fingered) whether launching logs or
              weaving through stumps. With its quick and agile character, the
              5010 has become a go-to plaything for progressive riders the world
              over and the only contender on any backyard trails.
            </p>
          </div>
        ) : (
          <div className="max-w-[955px] md:mt-[40px] mt-[20px]">
            <h3 className="md:text-34px sm:text-28px text-20px font-600 text-black mb-[20px]">
              Advantages of the EUPHORIA Bicycle
            </h3>
            <p className="md:text-34px sm:text-28px text-20px font-300 text-black">
              The EUPHORIA combines a sleek design with enhanced aerodynamics
              for a smoother ride.
              <br />
              - Its lightweight frame is easy to handle, reducing fatigue on
              longer rides.
              <br />
              - The powerful electric motor offers excellent pedal assistance
              for hills and long commutes.
              <br />
              - The advanced braking system ensures superior stopping power and
              safety.
              <br />
              - Ideal for city commutes, off-road trails, and leisurely rides.
              <br />
              - Smart technology features a digital display for speed and
              battery monitoring.
              <br />
              - Eco-friendly transportation reduces your carbon footprint.
              <br />- Customizable options allow for personalization with
              various colors and accessories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionSection;
