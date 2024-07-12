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
  return (
    <>
      <Container>
        <Section>
          <div className='relative h-15rem w-100%'>
            <h1 className='text-dark-gray w-100% flexRow absolute text-17rem top-[-3rem]'>PeFUD</h1>
            <p className='w-100% flexRow absolute text-2.7rem top-18rem'>The first meme project on EON!</p>
          </div>
          <div className='flexRow w-100%'>
            <div className='cursor-pointer bg-cover bg-no-repeat bg-center w-40% pb-48% relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className={`bg-cover bg-center bg-no-repeat absolute bottom-5% left-5% ${bounceHandler ? 'animate-[shake-vertical-pefud_3s_ease-in-out_infinite]' : 'animate-[bounced_1s]'} ${isOnHover === false && countHover < 20 ? 'w-100% h-90%' : isOnHover === true && countHover < 20 ? 'w-100% h-60%' : 'animate-[smooth-show_1.2s] w-100% h-90%'}`} style={{ backgroundImage: `${isOnHover === false && countHover < 20 ? 'url("/images/2.svg")' : isOnHover === true && countHover < 20 ? 'url("/images/4.svg")' : 'url("/images/5.svg")'}` }}></div>
            </div>
            <div className='flexCol w-60% relative mt-3rem'>
              <div className='bg-contain bg-no-repeat bg-center w-30% h-15rem absolute top-[-10rem] ml-5rem' style={{ backgroundImage: 'url("/images/3.svg")', rotate: '0deg' }}></div>
              <p className='text-3.5rem'>FUD has always been a constant</p>
              <p className='text-3.5rem'>presence in the crypto world.</p>
              <p className='text-3.5rem'>Now, anticipate the birth of a new</p>
              <div className='flexRow'>
                <p className='text-3.5rem pr-1rem'>FUD:</p>
                <p className='text-3.5rem text-red'>PEFUD</p>
              </div>
              <div className='flexRow mt-3rem rotate-6'>
                <button className='cursor-pointer border h-7rem px-4rem flexRow text-4rem mr-5rem bg-cloud text-white border-black border-0.3rem'>Just Do meme</button>
                <button className='cursor-pointer bg-cover bg-no-repeat bg-center w-7rem h-7rem mr-1.5rem flexRow'>
                  <i className='xi-twitter' style={{ fontSize: '7rem', color: '#3f3f3f' }}></i>
                </button>
                <button className='cursor-pointer bg-cover bg-no-repeat bg-center w-7rem h-7rem mr-1.5rem flexRow'>
                  <i className='xi-telegram' style={{ fontSize: '7rem', color: '#3f3f3f' }}></i>
                </button>
                <button className='cursor-pointer bg-cover bg-no-repeat bg-center w-7rem h-7rem mr-1.5rem flexRow'>
                  <i className='xi-instagram' style={{ fontSize: '7rem', color: '#3f3f3f' }}></i>
                </button>
              </div>
            </div>
          </div>
        </Section>
        <Section backgroundColor='#2e1e19'>
          <div className='flexRow relative'>
            <div className='w-20rem h-10rem bg-contain bg-no-repeat bg-center absolute left-[-18.5rem]' style={{ backgroundImage: 'url("images/8.png")' }}></div>
            <h2 className='text-10rem text-orange'>exchange</h2>
            <div className='w-20rem h-10rem bg-contain bg-no-repeat bg-center absolute right-[-16.5rem]' style={{ backgroundImage: 'url("images/9.png")' }}></div>
          </div>
          <p className='text-2.4rem text-white'>We're definitely aiming for a listing on the exchanges below, and we sincerely hope</p>
          <p className='text-2.4rem text-white'>they say yes. Fingers crossed, toes crossed, even our pet goldfish is crossing its fins!</p>
          <div className='w-100% flexRow items-end'>
            <div className='w-20% bg-cover h-100% flexRow items-end pb-8rem'>
              <div className='w-100% pb-150% bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: 'url("/images/2.svg")' }}>
                <div className='w-30% pb-65% bg-no-repeat bg-right bg-cover absolute bottom-2rem left-25% animate-[shake-vertical-left_1s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/6.svg")' }}></div>
                <div className='w-30% pb-65% bg-no-repeat bg-left bg-cover absolute bottom-2rem right-15% animate-[shake-vertical-right_1s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/7.svg")' }}></div>
              </div>
            </div>
            <div className='w-60% h-63rem flexCol justify-between pt-7rem mb-3rem'>
              <div className='w-100% h-80% flexCol justify-start'>
                <div className='w-100% flexRow pb-2rem justify-start'>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-7% mr-3rem' style={{ backgroundImage: 'url("images/20.svg")' }}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-8% mr-3rem' style={{ backgroundImage: 'url("images/21.svg")' }}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-6%' style={{ backgroundImage: 'url("images/22.svg")' }}></div>
                </div>
                <div className='w-100% flexRow pb-2rem justify-start'>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-5% mr-3rem' style={{ backgroundImage: 'url("images/23.svg")' }}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-11% mr-3rem' style={{ backgroundImage: 'url("images/24.svg")' }}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-7%' style={{ backgroundImage: 'url("images/25.svg")' }}></div>
                </div>
                <div className='w-100% flexRow pb-2rem justify-start'>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-11% mr-3rem' style={{ backgroundImage: 'url("images/26.svg")' }}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-6% mr-3rem' style={{ backgroundImage: 'url("images/27.svg")' }}></div>
                  <div className='bg-cover bg-no-repeat bg-top w-33.3% pb-9%'></div>
                </div>
              </div>
              <div className='flexRow border border-white text-orange text-2.2rem px-2rem py-0.3rem rounded rounded-0.2rem'>We will continue to add exchanges where we want to be listed.</div>
            </div>
            <div className='w-20% bg-cover h-100% flexRow items-end pb-8rem'>
              <div className='w-100% pb-150% bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: 'url("/images/5.svg")', transform: 'scaleX(-1)' }}>
                <div className='w-30% pb-65% bg-no-repeat bg-right bg-cover absolute bottom-2rem left-22% animate-[shake-vertical-left_1s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/17.svg")' }}></div>
                <div className='w-30% pb-65% bg-no-repeat bg-left bg-cover absolute bottom-2rem right-18% animate-[shake-vertical-right_1s_ease-in-out_infinite]' style={{ backgroundImage: 'url("/images/18.svg")' }}></div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className='w-100% relative flexCol pt-7rem'>
            <h2 className='text-dark-gray flexRow text-15rem z-100 leading-[6rem]'>Who is PeFud</h2>
            <div className='bg-cover bg-no-repeat bg-top w-55rem h-8rem ml-52rem' style={{ backgroundImage: 'url("/images/19.svg")' }}></div>
          </div>
          <button className='text-white bg-cloud text-4rem mt-13rem px-4rem py-1rem border-black border-0.3rem'>Coming Soon</button>
          {/*  */}
          <div className='w-100% h-50rem flexRow overflow-hidden'>
            <div className='w-30% h-50rem relative'>
              <div className='absolute text-3rem text-brown top-9.5rem left-30.4rem' style={{ rotate: '-14deg' }}>
                Fear
              </div>
              <div className='absolute bg-center bg-no-repeat bg-contain top-[-20rem] left-[-9rem] w-100rem h-100rem z-200' style={{ backgroundImage: 'url("/images/11.svg")' }}></div>
            </div>
            <div className='w-30% h-50rem relative'>
              <div className='absolute text-3rem text-green top-9rem left-14rem' style={{ rotate: '4deg' }}>
                Uncertainty
              </div>
              <div className='absolute bg-center bg-no-repeat bg-contain w-65rem h-65rem top-[0rem] left-[-12rem] z-100' style={{ backgroundImage: 'url("/images/4.svg")' }}></div>
            </div>
            <div className='w-30% h-50rem relative'>
              <div className='absolute text-3rem text-coral top-5rem left-[3.5rem]' style={{ rotate: '2deg' }}>
                Doubt
              </div>
              <div className='absolute bg-center bg-no-repeat bg-contain w-100rem h-100rem top-[-20rem] left-[-44rem]' style={{ backgroundImage: 'url("/images/5.svg")' }}></div>
            </div>
          </div>
        </Section>
        <Section>
          <h2 className='text-dark-gray flexRow text-15rem'>Tokenomics</h2>
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
