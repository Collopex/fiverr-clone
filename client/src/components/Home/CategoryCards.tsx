import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: number;
  category: string;
  title: string;
  desc: string;
  img: string;
};

const CategoryCards = ({ title, desc, img, category }: Props) => {
  return (
    <Link to={`/gigs?category=${category}`}>
      <div className='h-[350px] w-full text-white cursor-pointer relative px-4'>
        <img
          src={img}
          alt=''
          className='w-full h-full object-cover rounded-md'
        />
        <span className='font-medium absolute top-3 left-7'>{desc}</span>
        <span className='font-bold text-2xl absolute top-8 left-7'>
          {title}
        </span>
      </div>
    </Link>
  );
};

export default CategoryCards;
