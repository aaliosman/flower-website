import React from 'react';
import CreateHeading from './createHeading';
import MarketingBanner from './MarketingBanner';
import Image from 'next/image';

const Hero = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mx-auto bg-[#ECECEC] mb-[200px] relative">
      <div className="hero w-full h-[800px] flex items-center mx-auto bg-[#ECECEC]">
        <div className="container flex justify-center items-center max-w-6xl mx-auto ">
          <div className="content flex-1 flex flex-col gap-4">
            {/* <h1 className="title text-7xl/[80px] text-secondary">
            Make Your Life <br />{' '}
            <span className="text-primary">More Nature</span>
          </h1> */}
            {CreateHeading({
              parts: [data.title, '\n', data.hightLightedTitle],
              highlightIndex: 0,
            })}

            <p className="text-gray-500">{data.aboutText}</p>

            <button className="w-[150px] cursor-pointer mt-[30px] px-2 py-4 bg-secondary text-white hover:bg-white hover:text-secondary">
              {data.buttonTitle}
            </button>
          </div>
          <div className="img flex-1 flex justify-center">
            <Image
              src="/images/f1.png"
              alt="hero-image"
              height={600}
              width={400}
            />
          </div>
        </div>
      </div>
      <MarketingBanner />
    </div>
  );
};
export default Hero;
// Font Details:

// font-family: Raleway
// font-size: 16px
// font-style: normal
// font-variant-caps: normal
// font-variant-east-asian: normal
// font-variant-ligatures: normal
// font-variant-numeric: normal
// font-weight: 400
