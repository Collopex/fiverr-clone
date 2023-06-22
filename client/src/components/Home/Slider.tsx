/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';

import { Carousel, Button } from 'antd';
import { ArrowLeft, ArrowRight } from '../../utils/icons';

type Props = {
  children: React.ReactNode;
  header: string;
  backgroundColor: string;
  slidesToShow: number;
  slidesToScroll: number;
};

const Slider = ({
  children,
  header,
  slidesToShow,
  slidesToScroll,
  backgroundColor,
}: Props) => {
  const ref = useRef<any>();
  return (
    <section style={{ backgroundColor }}>
      <div
        className={`${
          slidesToScroll === 1 ? 'max-w-[710px]' : 'max-w-[1400px]'
        } mx-auto relative z-0 ${
          slidesToShow === 4 ? 'pt-16 pb-10' : 'pt-0 pb-0'
        } `}
      >
        <h2 className='text-[34px] font-bold text-[#404145] mb-5 ml-4 '>
          {header}
        </h2>
        <div>
          <Button
            onClick={() => {
              ref.current.prev();
            }}
            className={`absolute z-10 rounded-full h-12 w-12  
          flex justify-center items-center bg-[#ffff] shadow-md ${
            slidesToShow === 5 ? 'left-arrow-category ' : 'left-arrow-project'
          } `}
          >
            <ArrowLeft />
          </Button>
          <Carousel
            draggable
            dots={false}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
            ref={ref}
          >
            {children}
          </Carousel>
          <Button
            onClick={() => {
              ref.current.next();
            }}
            className={`absolute z-10 rounded-full h-12 w-12 flex justify-center 
          items-center bg-[#ffff] shadow-sm ${
            slidesToShow === 5 ? 'right-arrow-category ' : 'right-arrow-project'
          } `}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
