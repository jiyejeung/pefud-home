import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
  backgroundColor?: string;
  // ref?: React.RefObject<HTMLElement>;
};

const Footer = ({ children, backgroundColor = '' }: PropsType) => {
  /*
      m : { max: '480px' },
      t : { min: '481px', max: '767px' },
      p : { min: '768px', max: '1024px' },
      l : { min: '1025px', max: '1280px' },
      d : { min: '1280px' },
  */
  return (
    <>
      <footer className='w-100% flexRow px-4rem l:px-3rem p:px-2rem t:px-1rem m:px-2vw py-2rem l:py-1.5rem p:py-1rem t:py-0.5rem m:py-1vw' style={{ backgroundColor }}>
        <div className='max-w-145rem w-100% flexRow justify-between'>{children}</div>
      </footer>
    </>
  );
};

export default Footer;
