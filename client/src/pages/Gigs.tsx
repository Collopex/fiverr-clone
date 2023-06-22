import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

import GigCard from '../components/GigCards/GigCard';
import { axiosRequest } from '../utils/axios';
import { ChevronDown } from '../utils/icons';

const Gigs = () => {
  const { search } = useLocation();

  const [open, setOpen] = useState<boolean>(false);
  const [sort, setSort] = useState<string>('sales');
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      axiosRequest(
        `/gigs${search}&min=${minRef.current?.value}&max=${maxRef.current?.value}&sort=${sort}`
      ).then((res) => res.data),
  });

  const reSort = (type: string) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const budgetRange = () => {
    refetch();
  };

  useEffect(() => {
    const clickedOutside = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as HTMLElement)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', clickedOutside);

    return () => {
      document.removeEventListener('click', clickedOutside);
    };
  }, []);

  return (
    <section className='flex '>
      <div className='max-w-[1400px] w-full mx-auto py-8 px-0 flex flex-col gap-4'>
        <span className='font-normal text-sm text-[#555]'>
          FIVERR &gt; GRAPHICS & DESIGN &gt;
        </span>
        <h1 className='text-3xl font-bold'>AI Artist</h1>
        <p className='text-[#999] font-normal'>
          Explore the boundaries of art and technology with Fiverr&apos;s AI
          Artists
        </p>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <span className='text-[#555] font-normal'>Budget</span>
            <input
              type='text'
              placeholder='min'
              ref={minRef}
              className='border p-1 outline-none placeholder:text-[#555] rounded-md'
            />
            <input
              type='text'
              placeholder='max'
              ref={maxRef}
              className='border p-1 outline-none placeholder:text-[#555] rounded-md'
            />
            <button
              className='bg-[#1dbf73] text-white font-medium cursor-pointer py-[6px] px-6 rounded-sm hover:bg-[#1aac68] active:bg-[#39c383]'
              onClick={budgetRange}
            >
              Search
            </button>
          </div>
          <div className='flex items-center gap-3 relative'>
            <span className='text-[#555] font-normal'>Sort by</span>
            <span className='font-medium'>
              {sort === 'sales' ? 'Best Selling' : 'Newest'}
            </span>
            <div
              className='cursor-pointer'
              onClick={() => setOpen((prev) => !prev)}
              ref={ref}
            >
              <ChevronDown />
            </div>
            {open && (
              <div
                className=' absolute top-8 right-0 flex flex-col gap-5 text-[#62646a] w-[170px] h-[150] px-7 py-4  shadow-sm
             bg-[#fff] border border-[#e4e5e7] rounded-md'
              >
                {sort === 'sales' ? (
                  <span
                    className='cursor-pointer'
                    onClick={() => reSort('createdAt')}
                  >
                    Newest
                  </span>
                ) : (
                  <span
                    className='cursor-pointer'
                    onClick={() => reSort('sales')}
                  >
                    Best Selling
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-wrap justify-between mt-2'>
          {isLoading
            ? 'loading'
            : error
            ? 'Something went wrong please try again later.'
            : data.map((card: typeof data) => (
                <GigCard key={card._id} {...card} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Gigs;
