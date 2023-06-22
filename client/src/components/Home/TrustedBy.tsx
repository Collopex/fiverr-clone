import React from 'react';

const TrustedBy = () => {
  return (
    <section className='bg-[#fafafa] w-full h-[95px] flex justify-center mb-24 '>
      <div className='flex justify-center items-center gap-12 text-[#b5b6ba]'>
        <span>Trusted by:</span>
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/meta.7a1cdec.png'
          alt='facebook logo'
          className='h-[60px] w-auto object-contain'
        />
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png'
          alt='google logo'
          className='h-[60px] w-auto object-contain'
        />
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png'
          alt='netflix logo'
          className='h-[60px] w-auto object-contain'
        />
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png'
          alt='pandg logo'
          className='h-[60px] w-auto object-contain'
        />
        <img
          src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png'
          alt='paypal'
          className='h-[60px] w-auto object-contain'
        />
      </div>
    </section>
  );
};

export default TrustedBy;
