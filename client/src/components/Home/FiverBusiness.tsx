import React from 'react';
import { Check, FiverrBusinessL } from '../../utils/icons';

const FiverBusiness = () => {
  return (
    <>
      <div className='flex flex-col flex-[.95] justify-start gap-2 '>
        <div className='mb-4 flex items-center gap-2'>
          <div>
            <FiverrBusinessL />
          </div>
          <div>
            <span className='uppercase text-[10px] text-[#fff] font-bold tracking-[0.05em] bg-[#584aff] py-[2.5px] px-2 rounded-full'>
              new
            </span>
          </div>
        </div>
        <h2 className='text-[32px] leading-[130%] text-[#fff] font-bold tracking-[0.020em]'>
          A business solution <br />
          designed for teams
        </h2>
        <div className='mt-3 '>
          <div className='flex items-center gap-2 text-lg text-[#fff] '>
            <span className='mb-5 font-medium'>
              Upgrade to a curated experience packed with tools <br />
              and benefits, dedicated to businesses
            </span>
          </div>
          <div className='flex items-center gap-2 my-4 text-[#fff] text-base  font-medium'>
            <Check />
            <span>Connect to freelancers with proven business experience </span>
          </div>

          <div className='flex items-center gap-2 my-4 text-[#fff] text-base  font-medium'>
            <div className='mb-5'>
              <Check />
            </div>
            <span>
              Get matched with the perfect talent by a customer success <br />{' '}
              manager
            </span>
          </div>
          <div className='flex items-center gap-2  text-[#fff] text-base  font-medium'>
            <div className='mb-5'>
              <Check />
            </div>
            <span>
              Manage teamwork and boost productivity with one powerful <br />{' '}
              workspace
            </span>
          </div>
          <button className='mt-12 text-[#fff] font-bold bg-[#1dbf73] px-7 py-[8px] rounded-md hover:bg-[#1aac68]'>
            Explore Fiverr Business
          </button>
        </div>
      </div>
      <div>
        <img
          src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png'
          className='w-[700px] h-auto '
        />
      </div>
    </>
  );
};

export default FiverBusiness;
