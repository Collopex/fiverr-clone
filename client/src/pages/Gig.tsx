import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useQueries, useQuery } from '@tanstack/react-query';
import { Reviews, Slider } from '../components/Home';
import { Checked, Delivery, Revision, Star } from '../utils/icons';
import { axiosRequest } from '../utils/axios';
import { useParams } from 'react-router-dom';

const Gig = () => {
  const { id } = useParams();

  const [gigQuery] = useQueries({
    queries: [
      {
        queryKey: ['gig'],
        queryFn: () => axiosRequest(`/gigs/gig/${id}`).then((res) => res.data),
      },
    ],
  });

  const userId = gigQuery.data?.userId;

  const { data, isLoading, error } = useQuery({
    queryKey: ['user'],
    queryFn: () => axiosRequest(`/users/${userId}`).then((res) => res.data),
    enabled: !!userId,
  });

  return (
    <section>
      {gigQuery.isLoading ? (
        'loading'
      ) : gigQuery.error ? (
        'Something went wrong please try again later.'
      ) : (
        <div className='max-w-[1400px] mx-auto gap-5  flex py-8 px-0 '>
          <div className='flex flex-[2] flex-col gap-6'>
            <span className='font-normal text-sm text-[#555]'>
              FIVERR &gt; {gigQuery.data.category} &gt;
            </span>
            <h1 className='text-3xl text-[#404145] font-bold'>
              {gigQuery.data.description}
            </h1>

            {isLoading ? (
              'Loading...'
            ) : error ? (
              'Something went wrong please try again later.'
            ) : (
              <div className='flex items-center gap-4'>
                <img
                  className='w-8 h-8 rounded-full object-cover'
                  src={data.img}
                  alt=''
                />
                <span className='text-sm font-medium'>{data.username}</span>
                {!isNaN(
                  gigQuery.data.totalStars / gigQuery.data.starNumber
                ) && (
                  <div className='flex items-center gap-[5px]'>
                    {Array(
                      Math.round(
                        gigQuery.data.totalStars / gigQuery.data.starNumber
                      )
                    )
                      .fill(null)
                      .map((item, i) => (
                        <Star key={i} />
                      ))}
                    <span className='text-[#ffc108] text-sm font-medium '>
                      {Math.round(
                        gigQuery.data.totalStars / gigQuery.data.starNumber
                      )}
                    </span>
                  </div>
                )}
              </div>
            )}
            <Slider
              header=''
              backgroundColor=''
              slidesToShow={1}
              slidesToScroll={1}
            >
              {gigQuery.data.images.map((img: string) => (
                <img
                  key={uuidv4()}
                  src={img}
                  alt='gig-img'
                  className='h-[420px] bg-[#f5f5f5] object-contain'
                />
              ))}
            </Slider>
            <h2 className='text-[#404145] font-bold text-xl mt-10 '>
              About This Gig
            </h2>
            <p className='text-[#62646a]'>{gigQuery.data.shortTitle}</p>
            {isLoading ? (
              'Loading...'
            ) : error ? (
              'Something went wrong please try again later.'
            ) : (
              <div className='mt-8 flex flex-col gap-5'>
                <h2 className='font-bold text-[#404145] text-xl'>
                  About The Seller
                </h2>
                <div className='flex items-center gap-4'>
                  <img
                    src={data.img || '/img/fiverposter.png'}
                    alt=''
                    className='w-24 h-24 rounded-full object-cover'
                  />
                  <div className='flex flex-col gap-3'>
                    <span className='font-bold block text-[#62646a]'>
                      {data.username}
                    </span>
                    {!isNaN(
                      gigQuery.data.totalStars / gigQuery.data.starNumber
                    ) && (
                      <div className='flex items-center gap-[5px]'>
                        {Array(
                          Math.round(
                            gigQuery.data.totalStars / gigQuery.data.starNumber
                          )
                        )
                          .fill(null)
                          .map((item, i) => (
                            <Star key={i} />
                          ))}
                        <span className='text-[#ffc108] text-sm font-medium '>
                          {Math.round(
                            gigQuery.data.totalStars / gigQuery.data.starNumber
                          )}
                        </span>
                      </div>
                    )}
                    <button className='border border-black px-7 py-[6px] hover:bg-[#62646a] hover:text-white font-medium mt-2 rounded-md text-[#62646a]'>
                      Contact Me
                    </button>
                  </div>
                </div>
                {isLoading ? (
                  'Loading'
                ) : error ? (
                  'Something went wrong please try again later.'
                ) : (
                  <div className='border border-gray-200 rounded-sm p-5 mt-5'>
                    <div className='flex flex-wrap justify-between'>
                      <div className='w-[300px] flex flex-col gap-1 mb-3'>
                        <span className='text-[#74767e]'>From</span>
                        <span className='font-bold text-[#62646a]'>
                          {data.country}
                        </span>
                      </div>
                      <div className='w-[300px] flex flex-col gap-1 mb-3'>
                        <span className='text-[#74767e]'>Member since</span>
                        <span className='font-bold text-[#62646a]'>
                          Aug 2022
                        </span>
                      </div>
                      <div className='w-[300px] flex flex-col gap-1 mb-3'>
                        <span className='text-[#74767e]'>
                          Avg. response time
                        </span>
                        <span className='font-bold text-[#62646a]'>
                          4 hours
                        </span>
                      </div>
                      <div className='w-[300px] flex flex-col gap-1 mb-3'>
                        <span className='text-[#74767e]'>Last delivery</span>
                        <span className='font-bold text-[#62646a]'>1 day</span>
                      </div>
                      <div className='w-[300px] flex flex-col gap-1 mb-3'>
                        <span className='text-[#74767e]'>Languages</span>
                        <span className='font-bold text-[#62646a]'>
                          English
                        </span>
                      </div>
                    </div>
                    <hr className='mb-4' />
                    <p className='text-[#74767e]'>{data.description}</p>
                  </div>
                )}
              </div>
            )}

            <Reviews gigId={id} />
          </div>
          <div className='flex-[1.2] border border-gray-200 p-5 flex flex-col gap-5 sticky top-[130px] max-h-[550px] h-max max-w-[420px]'>
            <div className='flex items-center justify-between'>
              <h3 className='text-[#404145] font-bold text-lg '>Basic</h3>
              <span className='text-xl font-normal text-[#404145]'>
                $ {gigQuery.data.price}
              </span>
            </div>
            <div>
              <p className='my-3 text-sm text-[#62646a] '>
                {gigQuery.data.shortDescription}
              </p>
            </div>
            <div className='flex items-center gap-5'>
              <div className='flex items-center gap-[6px] text-[#62646a] font-semibold'>
                <Delivery />
                <span>{gigQuery.data.deliveryTime} days Delivery</span>
              </div>
              <div className='flex items-center gap-[6px] text-[#62646a] font-semibold'>
                <Revision />
                <span>{gigQuery.data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              {gigQuery.data.features.map((feature: Array<string>) => (
                <div
                  className='flex items-center gap-2 text-[#95979d]'
                  key={uuidv4()}
                >
                  <Checked />
                  <span> {feature}</span>
                </div>
              ))}
            </div>
            <button className='bg-[#1dbf73] font-medium text-lg py-[6px] cursor-pointer text-white rounded-md'>
              Continue{' '}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gig;
