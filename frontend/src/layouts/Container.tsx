import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
};

const Container = ({ children }: PropsType) => {
  /*
      m : { max: '480px' },
      t : { min: '481px', max: '767px' },
      p : { min: '768px', max: '1024px' },
      l : { min: '1025px', max: '1280px' },
      d : { min: '1280px' },
  */
  return (
    <>
      <div className='w-100vw'>{children}</div>
    </>
  );
};

export default Container;
