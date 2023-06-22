import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiosRequest } from '../../utils/axios';
import { Star, ThumbsDown, ThumbsUp } from '../../utils/icons';

type Props = {
  userId: string;
  gigId: string;
  star: number;
  description: string;
};

const Review = ({ userId, description, star }: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`${userId}`],
    queryFn: () => axiosRequest(`/users/${userId}`).then((res) => res.data),
  });
  return (
    <div>
      <div className='border-t border-gray-200 mt-7' />
      <div className='flex flex-col gap-5 my-5 mx-0'>
        {isLoading ? (
          'Loading'
        ) : error ? (
          'Something went wrong please try again later...'
        ) : (
          <div className='flex items-center gap-5'>
            <img
              className='h-14 w-14 rounded-full object-cover'
              src={data.img || '/img/fiverposter.png'}
              alt='user review'
            />
            <div>
              <span>{data.username}</span>
              <div className='flex items-center gap-2'>
                <img
                  className='w-5 h-5'
                  src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png'
                  alt=''
                />
                <span>{data.country}</span>
              </div>
            </div>
          </div>
        )}
        <div className='flex items-center gap-[5px]'>
          {Array(star)
            .fill(null)
            .map((item, i) => (
              <Star key={i} />
            ))}

          <span className='text-[#ffc108] text-sm font-medium '>{star}</span>
        </div>
        <p className='text-[#404145] font-normal'>{description}</p>
        <div className='flex items-center gap-3'>
          <span className='text-[#404145]'>Helpful?</span>
          <div className='flex items-center gap-1'>
            <ThumbsUp />
            <span className='text-[#404145]'>Yes</span>
          </div>
          <div className='flex items-center gap-1'>
            <ThumbsDown />
            <span className='text-[#404145]'>No</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
