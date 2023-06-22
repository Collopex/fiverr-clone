import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '../../utils/icons';

const Featured = () => {
  const [input, setInput] = useState<string>('');
  const navigation = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    navigation(`/gigs?search=${input}`);
  };

  return (
    <section className='h-[600px] flex justify-center bg-[#013914] text-white overflow-hidden'>
      <div className='w-full max-w-[1400px] flex items-center'>
        <div className='flex-1 flex flex-col gap-8 mb-10'>
          <h1 className='text-[48px] leading-[56px] '>
            Find the perfect{' '}
            <span className='italic font-normal'>freelance</span>
            <br />
            services for your business
          </h1>
          <div className='flex items-center justify-between bg-white rounded-sm rounded-r-lg w-[650px] h-[48px]'>
            <div className='flex items-center mx-2 space-x-3 '>
              <SearchIcon />
              <input
                type='text'
                placeholder='Try "building mobile" app'
                className='outline-none text-[#404145]'
                onChange={handleChange}
              />
            </div>
            <button
              className='bg-[#1dbf73] p-3 rounded-r-lg w-[103px] h-auto block'
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
          <div className='flex items-center gap-5 '>
            <span>Popular:</span>
            <button className='border px-3 py-[0.5px] rounded-full'>
              Web Design
            </button>
            <button className='border px-3 py-[0.5px] rounded-full'>
              Wordpress
            </button>
            <button className='border px-3 py-[0.5px] rounded-full'>
              Logo Design
            </button>
            <button className='border px-3 py-[0.5px] rounded-full'>
              AI Services
            </button>
          </div>
        </div>
        <div>
          <img
            src='/img/man.png'
            alt='Hero Image '
            className='object-contain w-full h-full'
          />
        </div>
      </div>
    </section>
  );
};

export default Featured;
