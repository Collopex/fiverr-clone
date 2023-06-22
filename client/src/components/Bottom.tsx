import React from 'react';
import {
  Accessiblity,
  Facebook,
  Fiverr,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
} from '../utils/icons';

const Bottom = () => {
  return (
    <div className='mb-10'>
      <div className='max-w-[1400px] mx-auto flex  '>
        <div className='flex flex-1 items-center gap-5'>
          <div className='ml-4'>
            <Fiverr />
          </div>
          <div className='text-sm text-[#b5b6ba] mt-1 justify-center'>
            <p>© Fiverr International Ltd. {new Date().getFullYear()}</p>
          </div>
        </div>
        <div className='flex gap-3 items-center justify-center'>
          <div className='cursor-pointer bottom-animation'>
            <Twitter />
          </div>
          <div className='cursor-pointer  bottom-animation'>
            <Facebook />
          </div>
          <div className='cursor-pointer bottom-animation'>
            <LinkedIn />
          </div>
          <div className='cursor-pointer bottom-animation'>
            <Pinterest />
          </div>
          <div className='cursor-pointer bottom-animation'>
            <Instagram />
          </div>
          <span className='text-[#74767e] ml-5 mr-3 font-medium'>English</span>
          <span className='text-[#74767e] mr-2 font-medium'>$ USD</span>

          <div className='cursor-pointer'>
            <Accessiblity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
