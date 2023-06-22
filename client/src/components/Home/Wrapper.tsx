import React from 'react';

type Props = {
  children: React.ReactNode;
  backgroundColor: string;
};
const Wrapper = ({ children, backgroundColor }: Props) => {
  return (
    <section style={{ backgroundColor }}>
      <div className='max-w-[1400px] mx-auto flex justify-center items-center my-20 py-20'>
        {children}
      </div>
    </section>
  );
};

export default Wrapper;
