import { useEffect, useState } from 'react';
import Container from '../layouts/Container';
// import Footer from '../layouts/Footer';
import Section from '../layouts/Section';

const Main = () => {
  // const slide = 'animate-[shake-vertical-pefud_1s]';

  const [bounceHandler, setBounceHandler] = useState(false);

  const [countHover, setCountHover] = useState(0);
  const [isOnHover, setIsOnHover] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBounceHandler(true);
    }, 1300);
  }, []);

  const handleMouseEnter = () => {
    setCountHover((prev) => prev + 1);
    setIsOnHover(true);
  };

  const handleMouseLeave = () => {
    setIsOnHover(false);
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
          <div className='relative h-15rem w-100% d:bg-red l:bg-gray p:bg-yellow t:bg-green m:bg-blue'>
            <h1 className='text-dark-gray w-100% flexRow absolute text-17rem l:text-15rem p:text-10rem top-[-3rem] l:top-[-4rem] p:top-[-2rem]'>PeFUD</h1>
            <p className='w-100% flexRow absolute text-2.7rem l:text-2.3rem p:text-1.8rem top-18rem l:top-16rem p:top-11rem'>The first meme project on EON!</p>
          </div>
          <div className='flexRow w-100%'>
            <div className='cursor-pointer bg-cover bg-no-repeat bg-center w-40% pb-48% l:pb-40% p:pb-35% p:ml-5rem relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className={`bg-cover bg-center bg-no-repeat absolute bottom-5% left-5% ${bounceHandler ? 'animate-[shake-vertical-pefud_3s_ease-in-out_infinite]' : 'animate-[bounced_1s]'} ${isOnHover === false && countHover < 20 ? 'w-100% h-90%' : isOnHover === true && countHover < 20 ? 'w-100% h-60%' : 'animate-[smooth-show_1.2s] w-100% h-90%'}`} style={{ backgroundImage: `${isOnHover === false && countHover < 20 ? 'url("/images/2.svg")' : isOnHover === true && countHover < 20 ? 'url("/images/4.svg")' : 'url("/images/5.svg")'}` }}></div>
            </div>
            <div className='flexCol w-60% relative mt-3rem l:mt-5rem p:mt-6rem p:mb-4rem'>
              <div className='bg-contain bg-no-repeat bg-center w-30% h-15rem absolute top-[-10rem] ml-5rem' style={{ backgroundImage: 'url("/images/3.svg")', rotate: '0deg' }}></div>
              <p className='text-3.5rem l:text-2.8rem p:text-2rem'>FUD has always been a constant</p>
              <p className='text-3.5rem l:text-2.8rem p:text-2rem'>presence in the crypto world.</p>
              <p className='text-3.5rem l:text-2.8rem p:text-2rem'>Now, anticipate the birth of a new</p>
              <div className='flexRow'>
                <p className='text-3.5rem l:text-2.8rem p:text-2rem pr-1rem l:pr-0.9rem p:pr-0.7rem'>FUD:</p>
                <p className='text-3.5rem l:text-2.8rem p:text-2rem text-red'>PEFUD</p>
              </div>
              <div className='flexRow mt-3rem l:mt-2.8rem p:mt-2.3rem rotate-6'>
                <button className='cursor-pointer border px-4rem l:px-3.5rem p:px-2rem h-7rem l:h-6rem p:h-5rem flexRow text-4rem l:text-3rem p:text-2rem mr-5rem l:mr-4rem p:mr-3rem bg-cloud text-white border-black border-0.3rem p:border-0.2rem'>Just Do meme</button>
                <button className='cursor-pointer bg-cover bg-no-repeat bg-center w-7rem l:w-6rem p:w-5rem h-7rem l:h-6rem p:h-5rem mr-1.5rem l:mr-1rem p:mr-0.6rem flexRow'>
                  <i className='xi-twitter text-icon text-7rem l:text-6rem p:text-5rem'></i>
                </button>
                <button className='cursor-pointer bg-cover bg-no-repeat bg-center w-7rem l:w-6rem p:w-5rem h-7rem l:h-6rem p:h-5rem mr-1.5rem l:mr-1rem p:mr-0.5rem flexRow'>
                  <i className='xi-telegram text-icon text-7rem l:text-6rem p:text-5rem'></i>
                </button>
                <button className='cursor-pointer bg-cover bg-no-repeat bg-center w-7rem l:w-6rem p:w-5rem h-7rem l:h-6rem p:h-5rem flexRow'>
                  <i className='xi-instagram text-icon text-7rem l:text-6rem p:text-5rem'></i>
                </button>
              </div>
            </div>
          </div>
        </Section>
        <Section backgroundColor='#2e1e19'>
          <div className='flexRow relative'>
            <div className='w-20rem l:w-18rem p:w-10rem h-10rem l:h-9rem p:h-5.5rem bg-contain bg-no-repeat bg-center absolute left-[-18.5rem] l:left-[-16.5rem] p:left-[-10.5rem]' style={{ backgroundImage: 'url("images/8.png")' }}></div>
            <h2 className='text-10rem l:text-9rem p:text-5.5rem text-orange'>exchange</h2>
            <div className='w-20rem l:w-18rem p:w-10rem h-10rem l:h-9rem p:h-5.5rem bg-contain bg-no-repeat bg-center absolute right-[-16.5rem] l:right-[-14.5rem] p:right-[-9.7rem] l:mt-1rem' style={{ backgroundImage: 'url("images/9.png")' }}></div>
          </div>
          <p className='text-2.4rem l:text-2rem p:text-1.5rem text-white'>We're definitely aiming for a listing on the exchanges below, and we sincerely hope</p>
          <p className='text-2.4rem l:text-2rem p:text-1.5rem text-white'>they say yes. Fingers crossed, toes crossed, even our pet goldfish is crossing its fins!</p>
          <div className='w-100% flexRow items-end'>
            <div className='w-20% l:w-17.5% p:w-17.5% bg-cover h-100% flexRow items-end pb-8rem'>
              <div className='w-100% pb-150% l:pb-130% p:pb-120% bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: 'url("/images/2.svg")' }}>
                <div className='w-30% pb-65% l:pb-55% p:pb-45% bg-no-repeat bg-right bg-cover absolute bottom-2rem left-25% animate-[shake-vertical-left-d_1s_ease-in-out_infinite] l:animate-[shake-vertical-left-l_1s_ease-in-out_infinite] p:animate-[shake-vertical-left-p_1s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/6.svg")' }}></div>
                <div className='w-30% pb-65% l:pb-55% p:pb-45% bg-no-repeat bg-left bg-cover absolute bottom-2rem right-15% animate-[shake-vertical-right-d_1s_ease-in-out_infinite] l:animate-[shake-vertical-right-l_1s_ease-in-out_infinite] p:animate-[shake-vertical-right-p_1s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/7.svg")' }}></div>
              </div>
            </div>
            <div className='w-60% l:w-65% p:w-65% h-63rem l:h-43rem p:h-34vw flexCol justify-between pt-7rem l:pt-5rem p:pt-4rem mb-3rem l:mb-2.5rem p:mb-3rem'>
              <div className='w-100% h-80% flexCol justify-start'>
                <div className='w-100% flexRow pb-2rem justify-start px-4rem l:px-3.5rem'>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-7% mr-3rem' style={{ backgroundImage: 'url("images/20.svg")' }}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-8% mr-3rem' style={{ backgroundImage: 'url("images/21.svg")' }}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-6%' style={{ backgroundImage: 'url("images/22.svg")' }}></div>
                </div>
                <div className='w-100% flexRow pb-2rem justify-start px-4rem l:px-3.5rem'>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-5% mr-3rem' style={{ backgroundImage: 'url("images/23.svg")' }}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-11% mr-3rem' style={{ backgroundImage: 'url("images/24.svg")' }}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-7%' style={{ backgroundImage: 'url("images/25.svg")' }}></div>
                </div>
                <div className='w-100% flexRow pb-2rem justify-start px-4rem l:px-3.5rem'>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-11% mr-3rem' style={{ backgroundImage: 'url("images/26.svg")' }}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-6% mr-3rem' style={{ backgroundImage: 'url("images/27.svg")' }}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-9%'></div>
                </div>
              </div>
              <div className='flexRow border border-white text-orange text-2.2rem l:text-1.8rem p:text-1.4rem px-2rem p:px-1.5rem py-0.3rem rounded rounded-0.2rem'>We will continue to add exchanges where we want to be listed.</div>
            </div>
            <div className='w-20% l:w-17.5% p:w-17.5% bg-cover h-100% flexRow items-end pb-8rem'>
              <div className='w-100% pb-150% l:pb-130% p:pb-120% bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: 'url("/images/5.svg")', transform: 'scaleX(-1)' }}>
                <div className='w-30% pb-65% l:pb-55% p:pb-45% bg-no-repeat bg-right bg-cover absolute bottom-2rem left-22% animate-[shake-vertical-left-d_1s_ease-in-out_infinite] l:animate-[shake-vertical-left-l_1s_ease-in-out_infinite] p:animate-[shake-vertical-left-p_1s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/17.svg")' }}></div>
                <div className='w-30% pb-65% l:pb-55% p:pb-45% bg-no-repeat bg-left bg-cover absolute bottom-2rem right-18% animate-[shake-vertical-right-d_1s_ease-in-out_infinite] l:animate-[shake-vertical-right-l_1s_ease-in-out_infinite] p:animate-[shake-vertical-right-p_1s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/18.svg")' }}></div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className='w-100% relative flexCol pt-7rem l:pt-6rem p:pt-3rem'>
            <h2 className='text-dark-gray flexRow text-15rem l:text-12.5rem p:text-6.5rem z-100 leading-[6rem] l:leading-[4rem] p:leading-[2rem] l:mt-1rem p:mt-2rem d:bg-red l:bg-gray p:bg-yellow t:bg-green m:bg-blue'>Who is PeFud</h2>
            <div className='bg-cover bg-no-repeat bg-top w-55rem l:w-50rem p:w-35rem h-8rem l:h-7rem ml-52rem l:ml-42rem p:ml-23rem' style={{ backgroundImage: 'url("/images/19.svg")' }}></div>
          </div>
          <button className='text-white bg-cloud text-4rem l:text-3rem p:text-2rem mt-13rem l:mt-8rem p:mt-3.5rem px-4rem l:px-3rem p:px-2rem py-1rem l:py-0.8rem p:py-0.5rem border-black border-0.3rem p:border-0.2rem'>Coming Soon</button>
          <div className='w-100% l:w-90rem p:w-75rem h-50rem l:h-45rem p:h-35rem flexRow overflow-hidden'>
            <div className='w-30% border h-50rem l:h-100% p:h-100% relative'>
              <div className='absolute text-3rem l:text-2.5rem p:text-2rem text-brown top-9.5rem l:top-10.5rem p:top-8.5rem left-30.4rem l:left-11.7rem p:left-11.4rem z-300' style={{ rotate: '-14deg' }}>
                Fear
              </div>
              <div className='absolute bg-center bg-no-repeat bg-contain w-100rem l:w-85rem p:w-60rem h-100rem l:h-85rem p:h-60rem top-[-11rem] l:top-[-15rem] p:top-[-9rem] left-[-9rem] l:left-[-22rem] p:left-[-12rem] z-200' style={{ backgroundImage: 'url("/images/11.svg")' }}></div>
            </div>
            <div className='w-30% border h-50rem l:h-100% p:h-100% relative'>
              <div className='absolute text-3rem l:text-2.5rem p:text-2rem text-green top-9rem l:top-10rem p:top-10rem left-14.5rem l:left-9rem p:left-6.7rem' style={{ rotate: '4deg' }}>
                Uncertainty
              </div>
              <div className='absolute bg-center bg-no-repeat bg-contain w-65rem l:w-55rem p:w-40rem h-65rem l:h-32rem p:w-40rem top-[-0rem] l:top-[14rem] p:top-[-8rem] left-[-10rem] l:left-[-13rem] p:left-[-9rem] z-100' style={{ backgroundImage: 'url("/images/4.svg")' }}></div>
            </div>
            <div className='w-30% border h-50rem l:h-100% p:h-100% relative'>
              <div className='absolute text-3rem l:text-2.5rem p:text-2rem text-coral top-5rem l:top-6.2rem p:top-6rem left-[3.5rem] l:left-10.5rem p:left-5.2rem' style={{ rotate: '2deg' }}>
                Doubt
              </div>
              <div className='absolute bg-center bg-no-repeat bg-contain w-100rem l:w-85rem p:w-60rem h-100rem l:h-85rem p:h-60rem top-[-20rem] l:top-[-14rem] p:top-[-8rem] left-[-44rem] l:left-[-30rem] p:left-[-23rem]' style={{ backgroundImage: 'url("/images/5.svg")' }}></div>
            </div>
          </div>
        </Section>
        <Section>
          <h2 className='text-dark-gray flexRow text-15rem l:text-12.5rem p:text-6.5rem'>Tokenomics</h2>
          <div className='w-100% flexRow'>
            <div>graph box</div>
            <div></div>
          </div>
        </Section>
        {/* <Footer /> */}
      </Container>
    </>
  );
};

export default Main;
