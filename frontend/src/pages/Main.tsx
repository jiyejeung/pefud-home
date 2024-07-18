import { useEffect, useRef, useState } from 'react';
import Container from '../layouts/Container';
// import Footer from '../layouts/Footer';
import Section from '../layouts/Section';
import CircleShow from '../components/CircleShow';
import { useFetcher } from 'react-router-dom';
import Footer from '../layouts/Footer';

const Main = () => {
  // const slide = 'animate-[shake-vertical-pefud_1s]';

  const [bounceHandler, setBounceHandler] = useState(false);

  const [countHover, setCountHover] = useState(0);
  const [isOnHover, setIsOnHover] = useState(false);

  const whoIsPefudRef = useRef<HTMLTableSectionElement>(null);

  const pefudHoverRef = useRef<HTMLDivElement>(null);

  const pefudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setBounceHandler(true);
    }, 1300);
  }, []);

  const handlePointerEnter = (event: React.PointerEvent) => {
    if (event.pointerType === 'mouse') {
      setCountHover((prev) => prev + 1);
      setIsOnHover(true);
    }
  };

  const handlePointerLeave = (event: React.PointerEvent) => {
    if (event.pointerType === 'mouse') {
      setIsOnHover(false);
    }
  };

  useEffect(() => {
    // if (countHover > 20 && pefudRef.current) {
    //   pefudRef.current.style.animation = 'customAnimation 3s ease-in-out';
    //   setTimeout(() => {
    //     if (pefudRef.current) pefudRef.current.style.animation = '';
    //   }, 3000);
    // }
    //  ${bounceHandler ? 'animate-[shake-vertical-pefud_3s_ease-in-out_infinite]' : 'animate-[bounced_1s]'} ${isOnHover === false && countHover < 20 ? 'w-100% h-90%' : isOnHover === true && countHover < 20 ? 'w-100% h-60%' : ' animate-[smooth-show_1.2s] w-100% h-90%'}

    /*
    
    */
    const element = pefudRef.current;

    console.log(element, bounceHandler);
    if (element) {
      if (bounceHandler) {
        element.classList.add('animate-[shake-vertical-pefud_3s_ease-in-out_infinite]');
        element.classList.remove('animate-[bounced_1s]');
      } else {
        element.classList.add('animate-[bounced_1s]');
        element.classList.remove('animate-[shake-vertical-pefud_3s_ease-in-out_infinite]');
      }
      if (isOnHover === false && countHover < 20) {
        // element.classList.add('w-100%');
        element.classList.add('h-90%');
        element.classList.remove('h-60%');
        element.classList.remove('animate-[smooth-show_1.2s]');
      } else if (isOnHover === true && countHover < 20) {
        element.classList.add('h-60%');
        element.classList.remove('h-90%');
        element.classList.remove('animate-[smooth-show_1.2s]');
      } else if (countHover > 20) {
        console.log('hello');
      }
    }
  }, [countHover, bounceHandler, isOnHover]);

  useEffect(() => {
    const element = pefudRef.current;

    if (element) {
      if (countHover === 20) {
        element.classList.add('h-90%');
        element.classList.remove('h-60%');
        element.classList.remove('animate-[bounced_1s]');
        element.classList.add('animate-[smooth-show_1.2s]');
        setTimeout(() => {
          if (element) {
            element.classList.remove('animate-[smooth-show_1.2s]');
            element.classList.add('animate-[shake-vertical-pefud_3s_ease-in-out_infinite]');
          }
        }, 1200);
      }
    }
  }, [countHover]);

  const handleTouchStart = () => {
    setCountHover((prev) => prev + 1);
    setIsOnHover((prev) => !prev);
  };

  const handleScrollToWhoIsPefud = () => {
    if (whoIsPefudRef.current) {
      whoIsPefudRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickTwitter = () => {
    window.open('https://twitter.com/pefuds', '_blank');
  };
  const handleClickTelegram = () => {
    window.open('https://t.me/PeFu_d', '_blank');
  };
  const handleClickITree = () => {
    window.open('https://linktr.ee/pefud', '_blank');
  };
  const handleClickBinance = () => {
    window.open('https://www.binance.com', '_blank');
  };
  const handleClickCoinbase = () => {
    window.open('https://www.coinbase.com', '_blank');
  };
  const handleClickGemini = () => {
    window.open('', '_blank');
  };
  const handleClickKraken = () => {
    window.open('https://www.kraken.com', '_blank');
  };
  const handleClickKucoin = () => {
    window.open('https://www.kucoin.com', '_blank');
  };
  const handleClickCrypto = () => {
    window.open('https://crypto.com', '_blank');
  };
  const handleClickBybit = () => {
    window.open('https://www.bybit.com', '_blank');
  };
  const handleClickGateIO = () => {
    window.open('https://www.gate.io', '_blank');
  };

  // const test = ' d:bg-red l:bg-orange p:bg-yellow t:bg-green m:bg-blue';

  /*
   ${isOnHover === true && countHover < 20 ? ' w-100% h-50% ' : ' h-90% w-90%'} ${countHover >= 20 ? ' animate-[smooth-show_2s]' : ''}`} 
  */

  /*
    m : { max: '480px' },
    t : { min: '481px', max: '767px' },
    p : { min: '768px', max: '1024px' },
    l : { min: '1025px', max: '1280px' },
    d : { min: '1280px' },
  */

  return (
    <>
      <Container>
        <Section>
          <div className='relative h-15rem t:h-22vw w-100%'>
            <h1 className='text-dark-gray w-100% flexRow absolute text-17rem l:text-15rem p:text-10rem t:text-10vw top-[-3rem] l:top-[-4rem] p:top-[-2rem] t:top-[3vw]'>PeFUD</h1>
            <p className='w-100% flexRow absolute text-2.7rem l:text-2.3rem p:text-1.8rem t:text-2.5vw top-18rem l:top-16rem p:top-11rem t:top-15vw'>The first meme project on EON!</p>
          </div>
          <div className='flexRow w-100% t:flexCol'>
            <div className='cursor-pointer w-40% t:w-80% pb-48% t:pb-90% l:pb-40% p:pb-35% t:pb-30% p:ml-5rem relative' onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave} onTouchStart={handleTouchStart} ref={pefudHoverRef}>
              <div className={`bg-cover bg-center bg-no-repeat absolute bottom-5% left-5% w-100% t:left-1%`} style={{ backgroundImage: `${isOnHover === false && countHover < 20 ? 'url("/images/2.svg")' : isOnHover === true && countHover < 20 ? 'url("/images/4.svg")' : 'url("/images/5.svg")'}` }} ref={pefudRef}></div>
            </div>
            <div className='flexCol w-60% t:w-100% relative mt-3rem l:mt-5rem p:mt-6rem t:mt-4vw p:mb-4rem t:mb-4vw'>
              <div className='bg-contain bg-no-repeat bg-center w-30% h-15rem absolute top-[-10rem] ml-5rem t:hidden' style={{ backgroundImage: 'url("/images/3.svg")', rotate: '0deg' }}></div>
              <p className='text-3.5rem l:text-2.8rem p:text-2rem t:text-4vw'>FUD has always been a constant</p>
              <p className='text-3.5rem l:text-2.8rem p:text-2rem t:text-4vw'>presence in the crypto world.</p>
              <p className='text-3.5rem l:text-2.8rem p:text-2rem t:text-4vw'>Now, anticipate the birth of a new</p>
              <div className='flexRow t:mb-10vw'>
                <p className='text-3.5rem l:text-2.8rem p:text-2rem t:text-4vw pr-1rem l:pr-0.9rem p:pr-0.7rem t:pr-0.5rem'>FUD:</p>
                <p className='text-3.5rem l:text-2.8rem p:text-2rem t:text-4vw text-red'>PeFUD</p>
              </div>
              <div className='flexRow mt-3rem l:mt-2.8rem p:mt-2.3rem t:mt-2vw t:mb-8vw rotate-6 t:rotate-0 t:w-100% t:relative'>
                <button className='cursor-pointer border px-4rem l:px-3.5rem p:px-2rem t:px-3vw t:py-1.5vw h-7rem l:h-6rem p:h-5rem t:h-auto flexRow text-4rem l:text-3rem p:text-2rem t:text-6vw mr-5rem l:mr-4rem p:mr-3rem t:mr-0rem bg-cloud text-white border-black border-0.3rem p:border-0.2rem t:border-0.2rem t:absolute t:top-[-3vw]' onClick={handleScrollToWhoIsPefud}>
                  Just Do meme
                </button>
                <button className='cursor-pointer bg-cover bg-no-repeat bg-center w-7rem l:w-6rem p:w-5rem t:w-10vw h-7rem l:h-6rem p:h-5rem t:h-10vw mr-1.5rem l:mr-1rem p:mr-0.6rem t:mr-1.2vw flexRow t:mt-20vw' onClick={handleClickTwitter}>
                  {/* <i className='xi-twitter text-icon text-7rem l:text-6rem p:text-5rem t:text-10vw'></i> */}
                  <div className='w-75% h-70% bg-center bg-contain bg-no-repeat mt-5% rotate-[4deg] t:rotate-[0deg] mb-7%' style={{ backgroundImage: 'url("/images/twitter.png")' }}></div>
                </button>
                <button className='cursor-pointer bg-cover bg-no-repeat bg-center w-7rem l:w-6rem p:w-5rem t:w-10vw h-7rem l:h-6rem p:h-5rem t:h-10vw mr-1.5rem l:mr-1rem p:mr-0.5rem t:mr-1.2vw flexRow t:mt-20vw' onClick={handleClickTelegram}>
                  <i className='xi-telegram text-icon text-7rem l:text-6rem p:text-5rem t:text-10vw'></i>
                </button>
                <button className='cursor-pointer bg-cover bg-no-repeat bg-center w-7rem l:w-6rem p:w-5rem t:w-10vw h-7rem l:h-6rem p:h-5rem t:h-10vw flexRow t:mt-20vw' onClick={handleClickITree}>
                  {/* <i className='xi-instagram text-icon text-7rem l:text-6rem p:text-5rem t:text-10vw'></i> */}
                  <div className='w-85% h-80% bg-center bg-contain bg-no-repeat mt-5% rotate-[4deg] t:rotate-[0deg]' style={{ backgroundImage: 'url("/images/28.svg")' }}></div>
                </button>
              </div>
            </div>
          </div>
        </Section>
        <div className='bg-white overflow-hidden whitespace-nowrap'>
          <div className='whitespace-nowrap inline-block animate-[slide_15s_linear_infinite]'>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
          </div>
          <div className='whitespace-nowrap inline-block animate-[slide_15s_linear_infinite]'>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
          </div>
          <div className='whitespace-nowrap inline-block animate-[slide_15s_linear_infinite]'>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
            <div className='text-black text-3rem l:text-2.8rem p:text-2.5rem t:text-3vw px-1rem l:px-0.9rem p:px-0.6rem t:px-1vw inline'>PeFUD</div>
          </div>
        </div>
        <Section backgroundColor='#2e1e19'>
          <div className='flexRow relative t:mb-3vw'>
            <div className='w-20rem l:w-18rem p:w-10rem t:w-20vw h-10rem l:h-9rem p:h-5.5rem t:h-11vw bg-contain bg-no-repeat bg-center absolute left-[-18.5rem] l:left-[-16.5rem] p:left-[-10.5rem] t:left-[-21vw] t:top-[7.5vw]' style={{ backgroundImage: 'url("images/8.png")' }}></div>
            <h2 className='text-10rem l:text-9rem p:text-5.5rem t:text-10vw t:mt-6vw text-orange'>exchange</h2>
            <div className='w-20rem l:w-18rem p:w-10rem t:w-20vw h-10rem l:h-9rem p:h-5.5rem t:h-11vw bg-contain bg-no-repeat bg-center absolute right-[-16.5rem] l:right-[-14.5rem] p:right-[-9.7rem] t:right-[-18.5vw] t:top-[7.5vw] l:mt-1rem' style={{ backgroundImage: 'url("images/9.png")' }}></div>
          </div>
          <p className='text-2.4rem l:text-2rem p:text-1.5rem t:text-2.1vw text-white'>We're definitely aiming for a listing on the exchanges below, and we sincerely hope</p>
          <p className='text-2.4rem l:text-2rem p:text-1.5rem t:text-2.1vw text-white'>they say yes. Fingers crossed, toes crossed, even our pet goldfish is crossing its fins!</p>
          <div className='w-100% flexRow items-end t:relative'>
            <div className='w-20% l:w-17.5% p:w-17.5% bg-cover h-100% flexRow items-end pb-8rem t:hidden'>
              <div className='w-100% pb-150% l:pb-130% p:pb-120% bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: 'url("/images/2.svg")' }}>
                <div className='w-22% pb-65% bottom-45% left-28% absolute bg-no-repeat bg-left bg-contain d:animate-[down-tears-d_1.2s_ease-in-out_infinite] l:animate-[down-tears-l_1.2s_ease-in-out_infinite] p:animate-[down-tears-p_1.2s_ease-in-out_infinite] t:animate-[down-tears-t_1.2s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/10.png")' }}></div>
                <div className='w-30% pb-55% bottom-35% left-18% absolute bg-no-repeat bg-left bg-contain d:animate-[down-tears-d_1.2s_ease-in-out_infinite] l:animate-[down-tears-l_1.2s_ease-in-out_infinite] p:animate-[down-tears-p_1.2s_ease-in-out_infinite] t:animate-[down-tears-t_1.2s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/10.png")' }}></div>
                <div className='w-24% pb-35% bottom-28% left-29% absolute bg-no-repeat bg-left bg-contain d:animate-[down-tears-d_1.2s_ease-in-out_infinite] l:animate-[down-tears-l_1.2s_ease-in-out_infinite] p:animate-[down-tears-p_1.2s_ease-in-out_infinite] t:animate-[down-tears-t_1.2s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/10.png")' }}></div>
                <div className='w-30% pb-65% l:pb-55% p:pb-45% bg-no-repeat bg-right bg-cover absolute bottom-2rem left-25% animate-[shake-vertical-left-d_1s_ease-in-out_infinite] l:animate-[shake-vertical-left-l_1s_ease-in-out_infinite] p:animate-[shake-vertical-left-p_1s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/6.svg")' }}></div>
                <div className='w-30% pb-65% l:pb-55% p:pb-45% bg-no-repeat bg-left bg-cover absolute bottom-2rem right-15% animate-[shake-vertical-right-d_1s_ease-in-out_infinite] l:animate-[shake-vertical-right-l_1s_ease-in-out_infinite] p:animate-[shake-vertical-right-p_1s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/7.svg")' }}></div>
              </div>
            </div>
            <div className='w-60% l:w-65% p:w-65% t:w-100% h-63rem l:h-43rem p:h-34vw t:h-auto flexCol justify-between pt-7rem l:pt-5rem p:pt-4rem t:pt-6vw mb-3rem l:mb-2.5rem p:mb-3rem t:mb-10vw'>
              <div className='w-100% h-80% flexCol justify-start'>
                <div className='w-100% flexRow pb-2rem t:pb-0rem justify-start px-4rem l:px-3.5rem'>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% t:w-66.6% pb-7.5% t:pb-9% mr-3rem t:mr-2vw cursor-pointer' style={{ backgroundImage: 'url("images/27.png")' }} onClick={handleClickBinance}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% t:w-66.6% pb-7.5% t:pb-9% mr-3rem t:mr-2vw cursor-pointer' style={{ backgroundImage: 'url("images/20.png")' }} onClick={handleClickCoinbase}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% t:w-66.6% pb-7.5% t:pb-9% cursor-pointer' style={{ backgroundImage: 'url("images/21.png")' }} onClick={handleClickGemini}></div>
                </div>
                <div className='w-100% flexRow pb-2rem t:pb-0rem justify-start px-4rem l:px-3.5rem'>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% t:w-66.6% pb-7.5% t:pb-9% mr-3rem t:mr-2vw cursor-pointer' style={{ backgroundImage: 'url("images/22.png")' }} onClick={handleClickKraken}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% t:w-66.6% pb-7.5% t:pb-9% mr-3rem t:mr-2vw cursor-pointer' style={{ backgroundImage: 'url("images/23.png")' }} onClick={handleClickKucoin}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% t:w-66.6% pb-7.5% t:pb-9% cursor-pointer' style={{ backgroundImage: 'url("images/24.png")' }} onClick={handleClickCrypto}></div>
                </div>
                <div className='w-100% flexRow pb-2rem t:pb-0rem justify-start px-4rem l:px-3.5rem'>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% t:w-66.6% pb-7.5% t:pb-9% mr-3rem t:mr-2vw cursor-pointer' style={{ backgroundImage: 'url("images/25.png")' }} onClick={handleClickBybit}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% t:w-66.6% pb-7.5% t:pb-9% mr-3rem t:mr-2vw cursor-pointer' style={{ backgroundImage: 'url("images/26.png")' }} onClick={handleClickGateIO}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% t:w-66.6% pb-7.5% t:pb-9% t:pb-10vw'></div>
                </div>
              </div>
              <div className='flexRow border border-white text-orange text-2.2rem l:text-1.8rem p:text-1.4rem t:text-2.6vw px-2rem p:px-1.5rem t:px-3vw t:mt-6vw py-0.3rem rounded rounded-0.2rem'>We will continue to add exchanges where we want to be listed.</div>
            </div>
            <div className='w-20% l:w-17.5% p:w-17.5% bg-cover h-100% flexRow items-end pb-8rem t:hidden'>
              <div className='w-100% pb-150% l:pb-130% p:pb-120% bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: 'url("/images/5.svg")', transform: 'scaleX(-1)' }}>
                <div className='w-35% pb-65% bottom-40% left-19% absolute bg-no-repeat bg-left bg-contain d:animate-[down-tears-d_1.2s_ease-in-out_infinite] l:animate-[down-tears-l_1.2s_ease-in-out_infinite] p:animate-[down-tears-p_1.2s_ease-in-out_infinite] t:animate-[down-tears-t_1.2s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/10.png")' }}></div>
                <div className='w-30% pb-55% bottom-28% left-10% absolute bg-no-repeat bg-left bg-contain d:animate-[down-tears-d_1.2s_ease-in-out_infinite] l:animate-[down-tears-l_1.2s_ease-in-out_infinite] p:animate-[down-tears-p_1.2s_ease-in-out_infinite] t:animate-[down-tears-t_1.2s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/10.png")' }}></div>
                <div className='w-30% pb-65% l:pb-55% p:pb-45% bg-no-repeat bg-right bg-cover absolute bottom-2rem left-22% animate-[shake-vertical-left-d_1s_ease-in-out_infinite] l:animate-[shake-vertical-left-l_1s_ease-in-out_infinite] p:animate-[shake-vertical-left-p_1s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/17.svg")' }}></div>
                <div className='w-30% pb-65% l:pb-55% p:pb-45% bg-no-repeat bg-left bg-cover absolute bottom-2rem right-18% animate-[shake-vertical-right-d_1s_ease-in-out_infinite] l:animate-[shake-vertical-right-l_1s_ease-in-out_infinite] p:animate-[shake-vertical-right-p_1s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/18.svg")' }}></div>
              </div>
            </div>
          </div>
        </Section>
        <Section ref={whoIsPefudRef}>
          <div className='w-100% relative flexCol pt-7rem l:pt-6rem p:pt-3rem t:pt-15vw'>
            <h2 className='text-dark-gray flexRow text-15rem l:text-12.5rem p:text-6.5rem t:text-12vw z-100 leading-[6rem] l:leading-[4rem] p:leading-[2rem] t:leading-[1vw] l:mt-1rem p:mt-2rem t:mt-0vw'>Who is PeFUD</h2>
            <div className='bg-cover bg-no-repeat bg-top w-55rem l:w-50rem p:w-35rem t:w-50vw h-8rem l:h-7rem t:h-8vw ml-52rem l:ml-42rem p:ml-23rem t:ml-39vw' style={{ backgroundImage: 'url("/images/19.svg")' }}></div>
          </div>
          <button className='text-white bg-cloud text-4rem l:text-3rem p:text-2rem t:text-4vw mt-13rem l:mt-8rem p:mt-3.5rem t:mt-9vw px-4rem l:px-3rem p:px-2rem t:px-3vw py-1rem l:py-0.8rem p:py-0.5rem t:py-1vw border-black border-0.3rem p:border-0.2rem t:border-0.1rem'>Coming Soon</button>
          <div className='w-100% l:w-90rem p:w-75rem t:w-100% h-50rem l:h-45rem p:h-35rem t:h-59vw flexRow overflow-hidden'>
            <div className='w-30% h-50rem l:h-100% p:h-100% t:h-100% relative'>
              <div className='absolute text-3rem l:text-2.5rem p:text-2rem t:text-3.5vw text-brown top-9.5rem l:top-10.5rem p:top-8.5rem t:top-19vw left-30.4rem l:left-11.7rem p:left-11.4rem t:left-12.3vw z-300' style={{ rotate: '-14deg' }}>
                Fear
              </div>
              <div className='absolute bg-center bg-no-repeat bg-contain w-100rem l:w-85rem p:w-60rem t:w-90vw h-100rem l:h-85rem p:h-60rem t:h-90vw top-[-20rem] l:top-[-15rem] p:top-[-9rem] t:top-[-5vw] left-[-9rem] l:left-[-22rem] p:left-[-12rem] t:left-[-22vw] z-200' style={{ backgroundImage: 'url("/images/11.svg")' }}></div>
            </div>
            <div className='w-30% h-50rem l:h-100% p:h-100% t:h-100% relative'>
              <div className='absolute text-3rem l:text-2.5rem p:text-2rem t:text-3.5vw text-green top-9rem l:top-10rem p:top-10rem t:top-20.5vw left-14.5rem l:left-9rem p:left-6.7rem t:left-6vw' style={{ rotate: '4deg' }}>
                Uncertainty
              </div>
              <div className='absolute bg-center bg-no-repeat bg-contain w-65rem l:w-55rem p:w-40rem t:w-60vw h-65rem l:h-32rem p:h-65rem t:h-60vw top-[-0rem] l:top-[14rem] p:top-[-8rem] t:top-[14vw] left-[-10rem] l:left-[-13rem] p:left-[-9rem] t:left-[-15vw] z-100' style={{ backgroundImage: 'url("/images/4.svg")' }}></div>
            </div>
            <div className='w-30% h-50rem l:h-100% p:h-100% t:h-100% relative'>
              <div className='absolute text-3rem l:text-2.5rem p:text-2rem t:text-3.5vw text-coral top-5rem l:top-6.2rem p:top-6rem t:top-17vw left-[3.5rem] l:left-10.5rem p:left-5.2rem t:left-8.5vw' style={{ rotate: '2deg' }}>
                Doubt
              </div>
              <div className='absolute bg-center bg-no-repeat bg-contain w-100rem l:w-85rem p:w-60rem t:w-90vw h-100rem l:h-85rem p:h-60rem t:h-90vw top-[-20rem] l:top-[-14rem] p:top-[-8rem] t:top-[-3vw] left-[-44rem] l:left-[-30rem] p:left-[-23rem] t:left-[-33vw]' style={{ backgroundImage: 'url("/images/5.svg")' }}></div>
            </div>
          </div>
        </Section>
        {/* <Section backgroundColor='#2e1e19'>
          <h2 className='text-orange flexRow text-12rem l:text-9.5rem p:text-6.5rem t:text-12vw mt-2rem t:mt-7vw'>Tokenomics</h2>
          <div className='w-100% flexRow mt-5rem l:mt-3rem p:mt-2rem t:mt-5vw t:flexCol'>
            <div className='w-50% pb-50% relative flexRow mb-10rem l:mb-8rem p:mb-5rem t:mb-12vw t:w-100% t:pb-100%'>
              <div className='w-85% h-85% absolute top-8.5% left-8.5% rounded-50% aspect-square bg-conic-gradient'></div>
              <CircleShow />
              <div className='absolute bottom-[90%] left-[28%]'>
                <div className='text-[#ec9d52] text-3rem l:text-2.4rem p:text-1.8rem t:text-3.8vw'>Team</div>
                <div className='text-[#ec9d52] text-3rem l:text-2.4rem p:text-1.8rem t:text-3.8vw'>10%</div>
              </div>
              <div className='absolute top-[95%] left-[42%]'>
                <div className='text-[#f1d141] text-3rem l:text-2.4rem p:text-1.8rem t:text-3.8vw'>Top Secret</div>
                <div className='text-[#f1d141] text-3rem l:text-2.4rem p:text-1.8rem t:text-3.8vw'>90%</div>
              </div>
              <div className='absolute top-[23%] left-[2%] w-100% h-55% z-200 bg-center bg-contain bg-no-repeat' style={{ backgroundImage: 'url("/images/5.svg")' }}></div>
              <div className='absolute top-[33%] left-[28%] w-50% h-60% z-300 bg-center bg-contain bg-no-repeat rotate-3' style={{ backgroundImage: 'url("/images/14.svg")' }}></div>
            </div>
            <div className='w-50% h-100% flexCol justify-start t:w-100% t:p-2vw'>
              <div className='w-100% h-100% flexRow justify-start'>
                <div className='flexRow justify-start text-white text-2.4rem l:text-1.9rem p:text-1.4rem t:text-3.6vw pr-1.5rem l:pr-1.2rem t:pr-1.8vw'>Total Supply:</div>
                <div className='text-orange text-2.4rem l:text-1.9rem p:text-1.4rem t:text-3.6vw'>1,000,000,000,000</div>
              </div>
              <div className='w-100% h-100% flexRow justify-start mb-3rem l:mb-2rem t:mb-5vw'>
                <div className='flexRow justify-start text-white text-2.4rem l:text-1.9rem p:text-1.4rem t:text-3.6vw pr-1rem l:pr-0.9rem t:pr-1.4vw'>Token Address:</div>
                <div className='text-orange text-2.4rem l:text-1.9rem p:text-1.4rem t:text-3.6vw'>0x901n4k112983kln31lk2n313k223nl</div>
              </div>
              <div className='w-100% h-100% p-2rem l:p-1.8rem p:p-1.4rem t:p-2vw flexCol bg-light-gray rounded rounded-2rem l:rounded-1.8rem p:rounded-1.4rem t:rounded-1.3vw'>
                <p className='text-white text-2rem l:text-1.55rem p:text-1.2rem t:text-2.9vw'>Only 10% of the total tokens are allocated to the team.</p>
                <p className='text-white text-2rem l:text-1.55rem p:text-1.2rem t:text-2.9vw'>The rest of the allocation details must remain top secret.</p>
                <p className='text-white text-2rem l:text-1.55rem p:text-1.2rem t:text-2.9vw'>But one thing is certain:</p>
                <p className='text-white text-2rem l:text-1.55rem p:text-1.2rem t:text-2.9vw'>we are absolutely not a scam.</p>
                <p className='text-white text-2rem l:text-1.55rem p:text-1.2rem t:text-2.9vw'>We won't do any kind of rug pull.</p>
                <p className='text-white text-2rem l:text-1.55rem p:text-1.2rem t:text-2.9vw'>Please trust us.</p>
              </div>
              <p className='w-100% flexRow text-orange text-2.7rem t:text-5vw mt-2.4rem l:mt-1.5rem p:mt-1rem t:mt-4vw'>We are not Scam</p>
              <div className='relative w-100% flexRow pb-35% bg-gray mt-2rem t:mt-4vw t:mb-5vw'></div>
            </div>
          </div>
        </Section> */}
        <Section backgroundColor='#f1d141'>
          <div className='w-100% h-100% flexRow d:pt-2rem l:pt-1.5rem p:pt-1rem t:pt-10vw'>
            <div className='w-100% h-100% flexCol'>
              <h1 className='text-dark-gray w-100% flexRow text-10.5rem l:text-8rem p:text-5rem t:text-8vw mb-5.5rem l:mb-4.5rem p:mb-4rem t:mb-4vw'>PeFUD Changes My Life</h1>
              <div className='w-100% pb-0.3% bg-black'></div>
              <div className='w-100% h-auto bg-coral flexRow'>
                <div className='w-0.3% pb-23.8% bg-dark-gray'></div>
                <div className='bg-left bg-cover bg-no-repeat relative pb-23.8% w-14.4% bg-black' style={{ backgroundImage: 'url("images/61.png")' }}>
                  <div className='absolute bottom-[-7rem] l:bottom-[-6rem] p:bottom-[-5rem] t:bottom-[-5vw] text-1.9rem l:text-1.7rem p:text-1.2rem t:text-1.6vw w-100% flexRow'>Before PeFUD</div>
                </div>
                <div className='w-0.3% pb-23.8% bg-dark-gray'></div>
                <div className='bg-left bg-cover bg-no-repeat relative pb-23.8% w-15.5% bg-black' style={{ backgroundImage: 'url("images/62.png")' }}>
                  <div className='absolute bottom-[-7rem] l:bottom-[-6rem] p:bottom-[-5rem] t:bottom-[-5vw] text-1.9rem l:text-1.7rem p:text-1.2rem t:text-1.6vw w-100% flexRow'>8h work</div>
                </div>
                <div className='w-0.3% pb-23.8% bg-dark-gray'></div>
                <div className='bg-left bg-cover bg-no-repeat relative pb-23.8% w-18.6% bg-black' style={{ backgroundImage: 'url("images/63.png")' }}>
                  <div className='absolute bottom-[-7rem] l:bottom-[-6rem] p:bottom-[-5rem] t:bottom-[-5vw] text-1.9rem l:text-1.7rem p:text-1.2rem t:text-1.6vw w-100% flexRow'>8h sleep</div>
                </div>
                <div className='w-0.3% pb-23.8% bg-dark-gray'></div>
                <div className='bg-left bg-cover bg-no-repeat relative pb-23.8% w-17% bg-black' style={{ backgroundImage: 'url("images/64.png")' }}>
                  <div className='absolute bottom-[-7rem] l:bottom-[-6rem] p:bottom-[-5rem] t:bottom-[-5vw] text-1.9rem l:text-1.7rem p:text-1.2rem t:text-1.6vw w-100% flexRow'>8h losing money</div>
                </div>
                <div className='w-0.3% pb-23.8% bg-dark-gray'></div>
                <div className='bg-left bg-cover bg-no-repeat relative pb-23.8% w-22.5% bg-black' style={{ backgroundImage: 'url("images/65.png")' }}>
                  <div className='absolute bottom-[-7rem] l:bottom-[-6rem] p:bottom-[-5rem] t:bottom-[-5vw] text-1.9rem l:text-1.7rem p:text-1.2rem t:text-1.6vw w-100% flexRow'>Meet PeFUD</div>
                </div>
                <div className='w-0.3% pb-23.8% bg-dark-gray'></div>
                <div className='bg-left bg-cover bg-no-repeat relative pb-23.8% w-14.4%' style={{ backgroundImage: 'url("images/66.png")' }}>
                  <div className='absolute bottom-[-7rem] l:bottom-[-6rem] p:bottom-[-5rem] t:bottom-[-5vw] text-1.9rem l:text-1.7rem p:text-1.2rem t:text-1.6vw w-100% flexRow'>After PeFUD</div>
                </div>
                <div className='w-0.3% pb-23.8% bg-dark-gray'></div>
              </div>
              <div className='w-100% pb-0.3% bg-black mb-14rem l:mb-13rem p:mb-9rem t:mb-10vw'></div>
              <p className='flexRow text-black text-2.5rem l:text-1.8rem p:text-1.4rem t:text-1.9vw'>"Before I met PeFUD, I used to work for 8 hours, sleep for 8 hours, and lose money for 8 hours.</p>
              <p className='flexRow text-black text-2.5rem l:text-1.8rem p:text-1.4rem t:text-1.9vw'>But after Meet PeFUD, My life changed. Are you ready for a change too?"</p>
              <button className='text-white bg-cloud text-4rem l:text-3rem p:text-2rem t:text-4vw mt-13rem l:mt-8rem p:mt-5.5rem t:mt-9vw px-4rem l:px-3rem p:px-2rem t:px-3vw py-1rem l:py-0.8rem p:py-0.5rem t:py-1vw border-black border-0.3rem p:border-0.2rem t:border-0.1rem mb-20rem l:mb-10vw p:mb-10vw t:mb-10vw'>Coming Soon</button>
            </div>
          </div>
        </Section>
        {/* <Section>
          <div className='w-100% h-100% flexCol'>
            <h2 className='flexRow text-12rem l:text-9.5rem p:text-6.5rem t:text-11vw mt-2rem t:mt-6vw'>Coming Soon</h2>
            <div className='w-100% pb-65% bg-gray mt-5rem l:mt-4rem p:mt-3rem t:mt-6.5vw'></div>
          </div>
        </Section> */}
        <Footer>
          <div className='flexRow w-100%'>
            <div className='w-13% pb-7% bg-contain bg-no-repeat bg-left mr-1%' style={{ backgroundImage: 'url("/images/logo-pefud.png")' }}></div>
            <div className='text-1.6rem mb-2% l:text-1.5rem p:text-1.3rem t:text-1.3vw'>CopyRight(C) NEVERED. All rights reserved.</div>
          </div>
        </Footer>
      </Container>
    </>
  );
};

export default Main;
