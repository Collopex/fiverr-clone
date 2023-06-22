import React from 'react';
import { Check } from '../../utils/icons';

const SellingProposition = () => {
  return (
    <>
      <div className='flex flex-col flex-[.95] justify-start gap-2 '>
        <h2 className='text-[32px] leading-[130%] text-[#404145] font-bold tracking-[0.020em]'>
          A whole world of freelance <br />
          talent at your fingertips
        </h2>
        <div className='mt-3'>
          <div className='flex items-center gap-2 text-lg text-[#404145] font-bold'>
            <Check />
            <span>The best for every budget</span>
          </div>
          <p className='text-lg text-[#62646a] font-normal ml-1 mt-2 mb-4 leading-relaxed'>
            Find high-quality services at every price point. No <br />
            hourly rates, just project-based pricing.
          </p>
          <div className='flex items-center gap-2 text-lg text-[#404145] font-bold'>
            <Check />
            <span>Quality work done quickly</span>
          </div>
          <p className='text-lg text-[#62646a] font-normal ml-1 mt-2 mb-4 leading-relaxed'>
            Find the right freelancer to begin working on your <br /> project
            within minutes.
          </p>
          <div className='flex items-center gap-2 text-lg text-[#404145] font-bold'>
            <Check />
            <span>Protected payments, every time</span>
          </div>
          <p className='text-lg text-[#62646a] font-normal ml-1 mt-2 mb-4 leading-relaxed'>
            Always know what you will pay upfront. Your payment <br /> is not
            released until you approve the work.
          </p>
          <div className='flex items-center gap-2 text-lg text-[#404145] font-bold'>
            <Check />
            <span>24/7 support</span>
          </div>
          <p className='text-lg text-[#62646a] font-normal ml-1 mt-2 mb-4 leading-relaxed'>
            Questions? Our round-the-clock support team <br /> is available to
            help anytime, anywhere..
          </p>
        </div>
      </div>
      <div>
        <video
          className='w-[700px] h-auto '
          poster='/img/fiverposter.png'
          controls
        >
          <source
            type='video/mp4'
            src='https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7'
          />
        </video>
      </div>
    </>
  );
};

export default SellingProposition;
