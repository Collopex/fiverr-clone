import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { axiosRequest } from '../utils/axios';

const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const navigation = useNavigate();
  const [active, setActive] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);

    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  useEffect(() => {
    const clickedOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as HTMLElement)) {
        setModal(false);
      }
    };

    document.addEventListener('click', clickedOutside);

    return () => {
      document.removeEventListener('click', clickedOutside);
    };
  }, []);

  const currentUser = JSON.parse(
    localStorage.getItem('currentUser') || 'false'
  );

  const handleLogout = async () => {
    try {
      await axiosRequest.post('/auth/logout');
      localStorage.removeItem('currentUser');
      navigation('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      className={
        active || pathname !== '/'
          ? 'flex flex-col items-center justify-center bg-white text-black transition duration-500 ease-out sticky top-0 z-10'
          : 'flex flex-col items-center justify-center bg-[#013914] text-white transition duration-500 ease-out z-10'
      }
    >
      <div className='max-w-[1400px] w-full flex justify-between py-5'>
        <div className='text-4xl font-bold'>
          <Link to='/'>
            <span>fiverr</span>
          </Link>
          <span className='text-[#1dbf73]'>.</span>
        </div>
        <ul className='flex flex-row gap-6 items-center font-medium list-none'>
          <li>Fiverr Business</li>
          <li>Explore</li>
          <li>English</li>
          {!currentUser && (
            <li>
              <Link to='/login'>Sign in</Link>
            </li>
          )}
          {!currentUser && <li>Become a Seller</li>}

          {!currentUser && (
            <Link to='/register'>
              <button
                className={
                  active
                    ? 'text-[#1dbf73] text-sm px-[16px] py-[6px] rounded-md border border-[#1dbf73] transition duration-200 ease-out text-center cursor-pointer hover:bg-[#1dbf73] hover:border-[#1dbf73]  hover:text-white'
                    : `${
                        pathname !== '/'
                          ? 'text-[#1dbf73] border-[#1dbf73] hover:text-white'
                          : 'text-[#1dbf73] border-[#1dbf73] hover:text-white'
                      } text-white text-sm px-[16px] py-[6px] rounded-md border border-white transition duration-200 ease-out text-center cursor-pointer hover:bg-[#1dbf73] hover:border-[#1dbf73] 
                  `
                }
              >
                Join
              </button>
            </Link>
          )}

          {currentUser && (
            <div
              ref={ref}
              className='flex items-center gap-3 cursor-pointer relative'
              onClick={() => setModal((prev) => !prev)}
            >
              <img
                src={currentUser.img || '/img/fiverposter.png'}
                alt='User Profile Picture'
                className='w-9 h-9 rounded-full object-cover'
              />
              <span>{currentUser?.username}</span>
              {modal && (
                <div className='absolute flex flex-col gap-3 font-normal text-[#62646a] top-[50px] right-0 p-5 bg-slate-50 border border-gray-100 rounded-md whitespace-nowrap '>
                  {currentUser?.isSeller && (
                    <>
                      <Link to='/mygigs' className='hover:text-[#1dbf73]'>
                        Gigs
                      </Link>
                      <Link to='/add' className='hover:text-[#1dbf73]'>
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link to='/orders' className='hover:text-[#1dbf73]'>
                    Orders
                  </Link>
                  <Link to='/messages' className='hover:text-[#1dbf73]'>
                    Messages
                  </Link>
                  <Link
                    to=''
                    className='hover:text-[#1dbf73]'
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </ul>
      </div>

      {(active || pathname !== '/') && (
        <>
          <hr className='w-full h-0 border-[0.5px] border-gray-100 ' />
          <div className='max-w-[1400px] w-full flex justify-between font-normal text-[#74767e] p-2'>
            <Link to='/'>Graphic & Design</Link>
            <Link to='/'>Video & Animation</Link>
            <Link to='/'>Writing & Translation</Link>
            <Link to='/'>AI Services</Link>
            <Link to='/'>Digital Marketing</Link>
            <Link to='/'>Music & Audio</Link>
            <Link to='/'>Programming & Tech</Link>
            <Link to='/'>Business</Link>
            <Link to='/'>Lifestyle</Link>
          </div>
          <hr className='w-full h-0 border-[0.5px] border-gray-100 ' />
        </>
      )}
    </nav>
  );
};

export default Navbar;
