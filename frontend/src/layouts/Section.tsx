import { forwardRef, ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
  backgroundColor?: string;
  pb?: boolean;
};

const Section = forwardRef<HTMLElement, PropsType>((props, ref) => {
  const { children, backgroundColor = '', pb = true } = props;
  return (
    <>
      <section className={`w-100% flexRow px-4rem l:px-3rem p:px-2rem t:px-1rem m:px-2vw pt-2rem l:pt-1.5rem p:pt-1rem t:pt-0.5rem m:pt-1vw ${pb ? 'pb-2rem l:pb-1.5rem p:pb-1rem t:pb-0.5rem' : 'border-b-[0.3rem] border-[#101010]'}`} style={{ backgroundColor }} ref={ref}>
        <article className='max-w-145rem w-100% flexCol relative'>{children}</article>
      </section>
    </>
  );
});

export default Section;
