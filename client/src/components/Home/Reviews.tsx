import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { axiosRequest } from '../../utils/axios';
import Review from './Review';

type Props = {
  gigId?: string;
};

type Mutation = {
  description: string;
  star: number;
  gigId?: string;
};

const Reviews = ({ gigId }: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['reviews'],
    queryFn: () => axiosRequest(`/reviews/${gigId}`).then((res) => res.data),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (review: Mutation) => {
      return axiosRequest.post('/reviews', review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews']);
    },
  });

  const [reviews, setReviews] = useState({
    description: '',
    star: 1,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setReviews((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { description, star } = reviews;
    mutation.mutate({ description, star, gigId });
  };

  return (
    <div className='mt-14'>
      <h2 className='font-bold text-[#404145] text-xl'>Reviews</h2>
      {isLoading
        ? 'Loading...'
        : error
        ? 'Something went wrong please try again later...'
        : data.map((review: typeof data) => (
            <Review key={review._id} {...review} />
          ))}

      <div className='mt-20'>
        <h3 className='font-bold text-[#404145] text-bases'>Add a review</h3>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <div className='flex items-center gap-10'>
            <input
              name='description'
              className='border p-2 border-gray-300 mt-4 w-full mb-3 rounded-sm'
              type='text'
              placeholder='Write your opinions for this user'
              onChange={handleChange}
            />
            <select
              id='stars'
              name='star'
              onChange={handleChange}
              className='border px-5 py-2 border-gray-300  rounded-sm'
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <button
            className='bg-[#1dbf73] hover:bg-[#1aac68] active:bg-[#1bbb71]  font-medium  
            px-14 py-2 self-end cursor-pointer text-white rounded-md  mt-4'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
