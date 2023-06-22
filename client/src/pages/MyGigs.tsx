import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { axiosRequest } from '../utils/axios';
import { Trash } from '../utils/icons';

const MyGigs = () => {
  const currentUser = JSON.parse(
    localStorage.getItem('currentUser') || 'false'
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ['myGigs'],
    queryFn: () =>
      axiosRequest(`/gigs?userId=${currentUser.id}`).then((res) => res.data),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => {
      return axiosRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myGigs']);
    },
  });

  const handleDelete = (id: string) => {
    mutation.mutate(id);
  };

  return (
    <section>
      <div className='max-w-[1400px] mx-auto py-12 h-screen'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-[#404145]'>Gigs</h1>
          <Link to='/add'>
            <button className='bg-[#1dbf73] text-white font-medium cursor-pointer p-2 rounded-[5px]'>
              Add New Gig
            </button>
          </Link>
        </div>
        {isLoading ? (
          'Loading...'
        ) : error ? (
          'Something went wrong please try again later...'
        ) : (
          <table className='table-fixed w-full mt-8 mx-2 '>
            <thead className='text-left '>
              <tr className='text-[#555]'>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className='[&>*:nth-child(odd)]:bg-sky-50'>
              {data.map((gig: typeof data) => (
                <tr key={gig._id}>
                  <td>
                    <img
                      className='w-12 h-6 object-cover mb-4 mt-4'
                      src={gig.coverImg}
                      alt=''
                    />
                  </td>
                  <td>{gig.title}</td>
                  <td>{gig.price}</td>
                  <td>{gig.sales}</td>
                  <td onClick={() => handleDelete(gig._id)}>
                    <Trash />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default MyGigs;
