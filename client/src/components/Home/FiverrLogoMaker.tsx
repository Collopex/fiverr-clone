import React from 'react';
import { FiverrLogoMakerL } from '../../utils/icons';

const FiverrLogoMaker = () => {
  return (
    <section>
      <div className='max-w-[1336px] mx-auto bg-[#446ee7] flex mb-28 '>
        <div className='flex flex-col pl-20 py-[22px]'>
          <div>
            <FiverrLogoMakerL />
          </div>
          <div>
            <h2 className='text-[#fff] text-3xl pt-5 whitespace-nowrap'>
              Make an incredible logo
              <br />
              <span className='italic'> in minutes</span>
            </h2>
          </div>
          <div>
            <p className='text-base my-5 whitespace-nowrap text-[#fff]'>
              Pre-designed by top talent. Just add your touch.
            </p>
          </div>
          <div>
            <button className='bg-[#fff] text-base font-bold text-[#446ee7] py-2 px-6 rounded-md hover:bg-[#d4defb]'>
              Try Fiverr Logo Maker
            </button>
          </div>
        </div>
        <div>
          <img src='/img/logomaker.webp' />
        </div>
      </div>
    </section>
  );
};

export default FiverrLogoMaker;
