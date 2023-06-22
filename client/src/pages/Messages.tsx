import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { axiosRequest } from '../utils/axios';
import moment from 'moment';

type Mutation = {
  id?: string;
};

const Messages = () => {
  const currentUser = JSON.parse(
    localStorage.getItem('currentUser') || 'false'
  );

  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['conversations'],
    queryFn: () => axiosRequest(`/conversations`).then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (id: Mutation) => {
      return axiosRequest.put(`/conversations/${id}`);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(['conversations']);
    },
  });

  const handleRead = (id: Mutation) => {
    mutation.mutate(id);
  };

  return (
    <section>
      {isLoading ? (
        'Loading...'
      ) : error ? (
        'Something went wrong please try again later...'
      ) : (
        <div className='max-w-[1400px] mx-auto py-12 h-screen'>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl font-bold text-[#404145]'>Messages</h1>
          </div>
          <table className='table-auto w-full mt-8 mx-2 '>
            <thead className='text-left '>
              <tr className='text-[#555]'>
                <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((convo: typeof data) => (
                <tr key={convo.id}>
                  <td className='pb-4 pt-4 font-medium text-[#62646a]'>
                    {currentUser.isSeller ? convo.buyerId : convo.sellerId}
                  </td>
                  <td className='text-[#95979d]'>
                    <Link to={`/message/${convo.id}`}>
                      {convo?.lastMessage?.substring(0, 75)}...
                    </Link>
                  </td>
                  <td className='text-[#62646a]'>
                    {moment(convo.updatedAt).fromNow()}
                  </td>
                  <td>
                    {currentUser.isSeller && !convo.readBySeller ? (
                      <button
                        onClick={() => handleRead(convo.id)}
                        className='bg-[#1dbf73] hover:bg-[#1aac68] active:bg-[#1bbb71] text-white py-[6px] text-sm px-2 rounded-sm outline-none'
                      >
                        Mark as Read
                      </button>
                    ) : !currentUser.isSeller && !convo.readByBuyer ? (
                      <button
                        onClick={() => handleRead(convo.id)}
                        className='bg-[#1dbf73] hover:bg-[#1aac68] active:bg-[#1bbb71] text-white py-[6px] text-sm px-2 rounded-sm outline-none'
                      >
                        Mark as Read
                      </button>
                    ) : (
                      ''
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Messages;
