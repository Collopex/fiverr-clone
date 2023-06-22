import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { axiosRequest } from '../../utils/axios';
import { Heart, Star } from '../../utils/icons';

type Props = {
  _id: object;
  userId: string;
  coverImg: string;
  totalStars: number;
  starNumber: number;
  description: string;
  price: number | undefined;
  star: number;
  username: string;
};

const GigCard = ({
  _id,
  userId,
  coverImg,
  totalStars,
  starNumber,
  description,
  price,
}: Props) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`${userId}`],
    queryFn: () => axiosRequest(`/users/${userId}`).then((res) => res.data),
  });

  return (
    <Link to={`/gig/${_id}`}>
      <div className='w-[324px] h-[399px] border border-gray-200 mb-6 mt-5'>
        <img src={coverImg} alt='' className='w-full h-2/4 object-cover' />
        <div className='py-3 px-5 flex flex-col gap-4'>
          {isLoading ? (
            'loading'
          ) : error ? (
            'Something went wrong please try again later'
          ) : (
            <div className='flex items-center gap-3'>
              <img
                src={data.img || '/img/fiverposter.png'}
                alt=''
                className='w-6 h-6 rounded-full object-cover '
              />
              <span className='font-medium'>{data.username}</span>
            </div>
          )}
          <p className='text-[#111]'>{description}</p>
          <div className='flex items-center gap-[10px]'>
            <Star />
            <span className='text-sm font-bold text-[#ffc108] '>
              {!isNaN(totalStars / starNumber) &&
                Math.round(totalStars / starNumber)}
            </span>
          </div>
        </div>
        <div className='border-b border-gray-200' />
        <div className='flex justify-between px-3  items-center'>
          <div className='ml-2'>
            <Heart />
          </div>
          <div>
            <span className='text-[#74767e] text-[10px] font-bold'>
              STARTING AT
            </span>
            <h2 className='text-[#555] text-right text-base font-medium'>
              ${price}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
