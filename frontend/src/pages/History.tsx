import React, { useEffect, useRef } from 'react';

const History: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (divRef.current) {
      divRef.current.style.top = `${window.screenY - window.scrollY / 3}px`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='w-[100vw] flexCol relative'>
      <div ref={divRef} className={`fixed left-0 w-[30vw] h-[30vh] overflow-hidden transition-all-300 bg-coral z-100`}></div>
      <article className='w-[100%] h-[100vh] bg-center bg-no-repeat bg-cover bg-red'></article>
      <article className='w-[100%] h-[100vh] bg-center bg-no-repeat bg-cover bg-orange'></article>
      <article className='w-[100%] h-[100vh] bg-center bg-no-repeat bg-cover bg-yellow'></article>
      <article className='w-[100%] h-[100vh] bg-center bg-no-repeat bg-cover bg-dark-gray'></article>
      <article className='w-[100%] h-[100vh] bg-center bg-no-repeat bg-cover bg-green'></article>
      <article className='w-[100%] h-[100vh] bg-center bg-no-repeat bg-cover bg-blue'></article>
      <article className='w-[100%] h-[100vh] bg-center bg-no-repeat bg-cover bg-gray'></article>
      <article className='w-[100%] h-[100vh] bg-center bg-no-repeat bg-cover bg-violet'></article>
      <article className='w-[100%] h-[100vh] bg-center bg-no-repeat bg-cover bg-brown'></article>
      <article className='w-[100%] h-[100vh] bg-center bg-no-repeat bg-cover bg-light-gray'></article>
      <article className='w-[100%] h-[100vh] bg-center bg-no-repeat bg-cover bg-dark-gray'></article>
      <article className='w-[100%] h-[100vh] bg-center bg-no-repeat bg-cover bg-red'></article>
    </section>
  );
};

export default History;
