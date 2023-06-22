import React from 'react';

const GetStarted = () => {
  return (
    <section>
      <div className='max-w-[1336px] mx-auto flex mb-28 mt-16  '>
        <div className='relative '>
          <div className='absolute inset-x-28 inset-y-[8rem]'>
            <h2 className=' text-white text-[52px] font-bold leading-[1.15]'>
              Find the <span className='italic'>talent</span> needed to <br />{' '}
              get your business <span className='italic'>growing.</span>
            </h2>
            <button className='mt-10 text-[#fff] font-bold bg-[#1dbf73] px-7 py-[8px] rounded-md hover:bg-[#1aac68]'>
              Get Started
            </button>
          </div>
          <img src='/img/outro.webp' className='rounded-[5px]' />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
