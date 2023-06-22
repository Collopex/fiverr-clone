import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { axiosRequest } from '../utils/axios';

type Mutation = {
  conversationId?: string;
  message: string;
};

const Message = () => {
  const [message, setMessage] = useState('');
  const { id } = useParams();
  const queryClient = useQueryClient();

  const currentUser = JSON.parse(
    localStorage.getItem('currentUser') || 'false'
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ['messages'],
    queryFn: () => axiosRequest(`/messages/${id}`).then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (messsage: Mutation) => {
      return axiosRequest.post(`/messages`, messsage);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(['messages']);
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      message: message,
    });

    setMessage('');
  };

  return (
    <div>
      <div className='max-w-[1300px]  mx-auto py-5 px-0'>
        <span className='font-normal text-sm text-[#555]'>
          <Link to='/messages'>MESSAGES</Link> &gt; JOHN DOE &gt;
        </span>
        {isLoading ? (
          'Loading...'
        ) : error ? (
          'Something went wrong please try again later...'
        ) : (
          <div className='my-4 p-6 flex flex-col gap-5 h-[550px] overflow-scroll overflow-x-hidden  scrollbar-hide'>
            {data.map((msg: typeof data) => (
              <div
                className={`${
                  msg.userId === currentUser._id
                    ? 'flex gap-3 max-w-[600px] text-lg self-end flex-row-reverse '
                    : 'flex gap-3 max-w-[600px] text-lg'
                }`}
                key={msg._id}
              >
                <img
                  src={
                    currentUser._id === msg.userId
                      ? currentUser.img
                      : '/img/fiverposter.png'
                  }
                  alt='user name'
                  className='w-10 h-10 rounded-full object-cover'
                />
                <p
                  className={`px-6 py-2 mt-2  ${
                    msg.userId === currentUser._id
                      ? 'rounded-tr-none rounded-2xl bg-[#584aff] text-white'
                      : 'rounded-tl-none rounded-2xl bg-gray-200 text-[#56585e]'
                  }`}
                >
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        )}
        <div className='border-t border-gray-200 mb-6' />
        <form
          onSubmit={handleSubmit}
          className='flex items-center justify-between mb-14'
        >
          <input
            placeholder='Write a message'
            name='message'
            value={message}
            className='border border-gray-200 outline-none rounded-lg w-3/4 p-2'
            onChange={handleChange}
          />
          <button className='bg-[#1dbf73] hover:bg-[#1aac68] active:bg-[#1bbb71] py-2 px-16 rounded-md text-white '>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
