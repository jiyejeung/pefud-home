/**
 d  desktop : { min: '1025px' },
 p  tablet-portrait mode : { min: '768px', max: '1024px' },
 t  tablet : { min: '481px', max: '767px' },
 m  mobile : { max: '480px' },
 */

import FirstContentContainer from '../components/FirstContentContainer';
import SecondContentContainer from '../components/SecondContentContainer';
import ThirdContentContainer from '../components/ThirdContentContainer';
import FourthContentContainer from '../components/FourthContentContainer';

import Navigation from '../components/Navigation';
import FifthContentContainer from '../components/FifthContentContainer';

const Home = () => {
  return (
    <>
      <div className='w-100vw h-100% fixed top-0 left-0 bg-center bg-cover m:bg-baseBackground_01 t:bg-baseBackground_02 p:bg-baseBackground_03 d:bg-baseBackground_04 overflow-y-scroll'>
        <Navigation />
        <FirstContentContainer />
        <SecondContentContainer />
        <ThirdContentContainer />
        <FourthContentContainer />
        <FifthContentContainer />
        <div className='w-100% border border-white flexRow px-4rem p:px-2.5rem t:px-1.5rem m:px-1rem'>
          <div className='max-w-128rem border border-white w-100% h-100rem '></div>
        </div>
      </div>
    </>
  );
};

export default Home;
