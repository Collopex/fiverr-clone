/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosRequest } from '../utils/axios';
import { MessageL } from '../utils/icons';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigation = useNavigate();
  const currentUser = JSON.parse(
    localStorage.getItem('currentUser') || 'false'
  );

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () => axiosRequest(`/orders`).then((res) => res.data),
  });

  const handleContact = async (order: typeof data) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;
    try {
      const res = await axiosRequest.get(`/conversations/coms/${id}`);
      navigation(`/message/${res.data.id}`);
    } catch (err: any) {
      if (err.response.status === 404) {
        const res = await axiosRequest.post(`/conversations/`, {
          to: currentUser.isSeller ? buyerId : sellerId,
        });
        navigation(`/message/${res.data.id}`);
      }
    }
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
            <h1 className='text-3xl font-bold text-[#404145]'>Orders</h1>
          </div>
          <table className='table-fixed w-full mt-8 mx-2 '>
            <thead className='text-left '>
              <tr className='text-[#555]'>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody className='[&>*:nth-child(odd)]:bg-sky-50'>
              {data.map((order: typeof data) => (
                <tr key={order._id}>
                  <td>
                    <img
                      className='w-12 h-6 object-cover mb-4 mt-4'
                      src={order.img}
                      alt=''
                    />
                  </td>
                  <td>{order.title}</td>
                  <td>{order.price}</td>
                  <td>
                    {currentUser.isSeller ? order.buyerId : order.sellerId}
                  </td>
                  <td
                    className='cursor-pointer'
                    onClick={() => handleContact(order)}
                  >
                    <MessageL />
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

export default Orders;
