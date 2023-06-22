import React from 'react';
import Bottom from './Bottom';

const Footer = () => {
  return (
    <footer>
      <div className='mb-4'>
        <div className='border-t border-gray-200 mb-10' />
        <div className='max-w-[1400px] mx-auto '>
          <div className='flex justify-between px-8 text-[#404145] font-bold text-[17px]  '>
            <div className='w-[20%]'>
              <h6>Categories</h6>
              <ul className='text-[#74767e] font-normal flex flex-col gap-4 mt-3'>
                <li>Graphics & Design</li>
                <li>Digital Marketing</li>
                <li>Writing & Translation</li>
                <li>Video & Animation</li>
                <li>Music & Audio</li>
                <li>Programming & Tech</li>
                <li>Data</li>
                <li>Business</li>
                <li>Lifestyle</li>
                <li>Photography</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className='w-[20%]'>
              <h6>About</h6>
              <ul className='text-[#74767e] font-normal flex flex-col gap-4 mt-3'>
                <li>Careers</li>
                <li>Press & News</li>
                <li>Partnerships</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Intellectual Property Claims</li>
                <li>Investor Relations</li>
              </ul>
            </div>
            <div className='w-[20%]'>
              <h6>Support</h6>
              <ul className='text-[#74767e] font-normal flex flex-col gap-4 mt-3'>
                <li>Help & Support</li>
                <li>Trust & Safety</li>
                <li>Selling on Fiverr</li>
                <li>Buying on Fiverr</li>
              </ul>
            </div>
            <div className='w-[20%]'>
              <h6>Community</h6>
              <ul className='text-[#74767e] font-normal flex flex-col gap-4 mt-3'>
                <li>Customer Success Stories</li>
                <li>Community hub</li>
                <li>Forum</li>
                <li>Events</li>
                <li>Blog</li>
                <li>Influencers</li>
                <li>Affiliates</li>
                <li>Podcast</li>
                <li>Invite a Friend</li>
                <li>Become a Seller</li>
                <li>Community Standards</li>
              </ul>
            </div>
            <div className='w-[20%]'>
              <h6>More From Fiverr</h6>
              <ul className='text-[#74767e] font-normal flex flex-col gap-4 mt-3'>
                <li>Fiverr Business</li>
                <li>Fiverr Pro</li>
                <li>Fiverr Logo Maker</li>
                <li>Fiverr Guides</li>
                <li>Get Inspired</li>
                <li>Fiverr Select</li>
                <li>ClearVoice</li>
                <li>Fiverr Workspace</li>
                <li>Learn</li>
                <li>Working Not Working</li>
              </ul>
            </div>
          </div>
          <div className='border-b border-gray-200 mt-16' />
        </div>
      </div>
      <Bottom />
    </footer>
  );
};

export default Footer;
