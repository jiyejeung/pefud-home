import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
  backgroundColor?: string;
};

const Section = ({ children, backgroundColor = '' }: PropsType) => {
  return (
    <>
      <section className='w-100% flexRow px-4rem l:px-3rem p:px-2rem t:px-1rem m:px-2vw py-2rem l:py-1.5rem p:py-1rem t:py-0.5rem m:py-1vw' style={{ backgroundColor }}>
        <article className='max-w-145rem w-100% flexCol relative'>{children}</article>
      </section>
    </>
  );
};

export default Section;
