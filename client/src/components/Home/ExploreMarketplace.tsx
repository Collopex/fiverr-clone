import React from 'react';
import { Link } from 'react-router-dom';
const ExploreMarketplace = () => {
  return (
    <section className='-mt-2'>
      <div className='max-w-[1400px] mx-auto'>
        <h2 className='text-3xl font-bold text-[#404145] ml-4 pb-14'>
          Explore the marketplace
        </h2>
        <ul className='flex flex-wrap  gap-5 justify-center'>
          <li className='w-[18.5%] pb-11 flex  justify-center items-center'>
            <Link to='/' className='icon_dash'>
              <img
                className='w-12 h-12 mx-auto mb-2 '
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg'
              />
              <span className='text-[#222325]'> Graphics & Design</span>
            </Link>
          </li>
          <li className='w-[18.5%] pb-11 flex justify-center items-center'>
            <Link to='/' className='icon_dash'>
              <img
                className='w-12 h-12 mx-auto mb-2'
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg'
              />
              <span className='text-[#222325]'> Digital Marketing</span>
            </Link>
          </li>
          <li className='w-[18.5%] pb-11 flex justify-center items-center'>
            <Link to='/' className='icon_dash'>
              <img
                className='w-12 h-12 mx-auto mb-2'
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg'
              />
              <span className='text-[#222325]'> Writing & Translation</span>
            </Link>
          </li>
          <li className='w-[18.5%] pb-11 flex justify-center items-center'>
            <Link to='/' className='icon_dash'>
              <img
                className='w-12 h-12 mx-auto mb-2'
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg'
              />
              <span className='text-[#222325]'> Video & Animation</span>
            </Link>
          </li>
          <li className='w-[18.5%] pb-11 flex justify-center items-center'>
            <Link to='/' className='icon_dash'>
              <img
                className='w-12 h-12 mx-auto mb-2'
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg'
              />
              <span className='text-[#222325]'> Music & Audio</span>
            </Link>
          </li>
          <li className='w-[18.5%] flex justify-center items-center'>
            <Link to='/' className='icon_dash'>
              <img
                className='w-12 h-12 mx-auto mb-2'
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg'
              />
              <span className='text-[#222325]'> Programming & Tech</span>
            </Link>
          </li>
          <li className='w-[18.5%] flex justify-center items-center'>
            <Link to='/' className='icon_dash'>
              <img
                className='w-12 h-12 mx-auto mb-2'
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg'
              />
              <span className='text-[#222325]'> Business</span>
            </Link>
          </li>
          <li className='w-[18.5%] flex justify-center items-center'>
            <Link to='/' className='icon_dash'>
              <img
                className='w-12 h-12 mx-auto mb-2'
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg'
              />
              <span className='text-[#222325]'> Lifestyle</span>
            </Link>
          </li>
          <li className='w-[18.5%] flex justify-center items-center'>
            <Link to='/' className='icon_dash'>
              <img
                className='w-12 h-12 mx-auto mb-2'
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg'
              />
              <span className='ml-2'> Data </span>
            </Link>
          </li>
          <li className='w-[18.5%] flex justify-center items-center'>
            <Link to='/' className='icon_dash'>
              <img
                className='w-12 h-12 mx-auto mb-2'
                src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg'
              />
              <span className='text-[#222325]'> Photography</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExploreMarketplace;
