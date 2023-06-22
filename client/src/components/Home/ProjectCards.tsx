import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: number;
  img: string;
  pp: string;
  category: string;
  username: string;
};

const CategoryCards = ({ img, pp, category, username }: Props) => {
  return (
    <Link to='/gigs?category=AI'>
      <div className='h-[260px] w-[350px] text-white cursor-pointer relative px-4 mb-28'>
        <img
          src={img}
          alt=''
          className='w-full h-full object-cover rounded-t-md  '
        />
        <div className='bg-[#fff] flex p-4 gap-[10px] shadow-sm rounded-b-md'>
          <img
            src={pp}
            alt={username}
            className='w-10 h-10 rounded-full object-cover'
          />
          <div className='flex flex-col  '>
            <div>
              <h2 className='text-[#404145] font-bold whitespace-nowrap text-sm'>
                {category}
              </h2>
            </div>
            <div>
              <span className='text-[#95979d] text-sm '>by {username}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCards;
