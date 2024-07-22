import { useState } from 'react';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Section from '../layouts/Section';

const Main = () => {
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [stage, setStage] = useState(1);

  const [game, state] = useState('');
  const [coinName, setCoinName] = useState('');

  return (
    <>
      <Header>
        <div></div>
      </Header>
      <Section backgroundColor='#161a1e'>
        <div className='bg-[#161a1e] w-[120rem] l:w-[80rem] p:w-[70rem] h-70rem l:h-[55rem] p:h-[30rem] relative border border-0.1rem border-t-[#636b76] border-l-[#636b76]'>
          <div className='w-100% h-10% flexRow justify-between border border-0.1rem border-r-[#636b76] border-b-[#636b76]'>
            <div className='w-30% h-100% flexRow justify-start'>
              <div className='w-15% h-100% flexRow p:hidden'>
                <div className='w-50% pb-50% rounded-0.5rem l:rounded-0.4rem p:rounded-0.3rem border-[#636b76] border'></div>
              </div>
              <div className='w-55% h-100% flexCol'>
                <div className='w-100% h-50% flexRow items-end'>
                  <div className='text-2.5rem l:text-1.4rem p:text-[1.3rem] p:leading-[1.4rem] text-white mr-0.5rem l:mr-0.4rem p:mr-0.3rem font-roboto font-[700]'>BTC/USDT</div>
                  <div className='text-1.2rem l:text-0.9rem p:text-[0.6rem] text-light-gray font-roboto border-b-[0.1rem] mb-0.8rem l:mb-[0.4rem] p:mb-[0.3rem] leading-[1.5rem] l:leading-[1rem] p:leading-[0.8rem]'>Bitcoin Price</div>
                </div>
                <div className='w-100% h-40% flexRow justify-start pl-0.8rem l:pl-0.4rem p:pl-0.7rem p:pt-0.1rem'>
                  <div className='text-1.25rem l:text-[0.95rem] p:text-[0.7rem] text-[#d8a80e] bg-[#2e2a21] px-0.7rem l:px-0.4rem p:px-[0.3rem] pb-0.1rem l:pb-[0rem] p:pb-[0re,] pt-0.15rem l:pt-[0rem] p:pt-[0.1rem] font-roboto rounded-l-0.3rem'>POW</div>
                  <div className='text-1.25rem l:text-[0.95rem] p:text-[0.7rem] text-[#d8a80e] bg-[#2e2a21] px-0.7rem l:px-0.4rem p:px-[0.3rem] pb-0.1rem l:pb-[0rem] p:pb-[0re,] pt-0.15rem l:pt-[0rem] p:pt-[0.1rem] font-roboto'>Vol</div>
                  <div className='text-1.25rem l:text-[0.95rem] p:text-[0.7rem] text-[#d8a80e] bg-[#2e2a21] px-0.7rem l:px-0.4rem p:px-[0.3rem] pb-0.1rem l:pb-[0rem] p:pb-[0re,] pt-0.15rem l:pt-[0rem] p:pt-[0.1rem] font-roboto rounded-r-0.3rem p:flexRow'>
                    Price Prote...
                    <div className='w-1rem l:w-0.8rem p:w-[0.7rem] pb-1rem l:pb-0.8rem p:pb-[0.7rem] bg-contain bg-center bg-no-repeat inline-block ml-0.7rem l:ml-0.5rem p:ml-0.4rem' style={{ backgroundImage: 'url("/images/right-arrow.png")' }}></div>
                  </div>
                </div>
              </div>
              <div className='w-30% h-100% flexCol'>
                <div className='font-roboto text-green text-2.1rem l:text-[1.5rem] p:text-[1.2rem] w-100% pl-0.2rem h-55% flexRow items-end justify-start leading-[2rem] l:leading-[1.3rem] p:leading-[1rem] pb-0.8rem l:pb-[0.4rem] p:pb-[0.3rem]'>63,829.99</div>
                <div className='font-roboto text-white text-1.5rem l:text-[1rem] p:text-[0.75rem] w-100% pl-0.7rem l:pl-[0.5rem] p:pl-[0.3rem] h-45% flexRow items-start justify-start'>$63,829.99</div>
              </div>
            </div>
            <div className='w-50% h-100% flexRow justify-start bg-[#161a1e] ml-0.5rem l:ml-[0.7rem] p:ml-[0.4rem]'>
              <div className='h-100% mr-2% flexCol items-start'>
                <div className='text-[#636b76] text-[1.5rem] l:text-[1.1rem] p:text-[0.85rem] flexRow items-end font-roboto h-55% font-[600]'>24h Change</div>
                <div className='text-[1.45rem] l:text-[1rem] p:text-[0.8rem] font-[500] font-roboto h-45% text-red'>-890.10 -1.28%</div>
              </div>
              <div className='h-100% mr-2% flexCol items-start'>
                <div className='text-[#636b76] text-[1.5rem] l:text-[1.1rem] p:text-[0.85rem] flexRow items-end font-roboto h-55% font-[600]'>24h High</div>
                <div className='text-white text-[1.45rem] l:text-[1rem] p:text-[0.8rem] font-[500] h-45% font-roboto'>65,111,29</div>
              </div>
              <div className='h-100% mr-2% flexCol items-start'>
                <div className='text-[#636b76] text-[1.5rem] l:text-[1.1rem] p:text-[0.85rem] flexRow items-end font-roboto h-55% font-[600]'>24h Low</div>
                <div className='text-white text-[1.45rem] l:text-[1rem] p:text-[0.8rem] font-[500] h-45% font-roboto'>63,238.48</div>
              </div>
              <div className='h-100% mr-2% flexCol items-start'>
                <div className='text-[#636b76] text-[1.5rem] l:text-[1.1rem] p:text-[0.85rem] flexRow items-end font-roboto h-55% font-[600]'>24h Volume(BTC)</div>
                <div className='text-white text-[1.45rem] l:text-[1rem] p:text-[0.8rem] font-[500] h-45% font-roboto'>23,300.79</div>
              </div>
              <div className='h-100% mr-2% flexCol items-start'>
                <div className='text-[#636b76] text-[1.5rem] l:text-[1.1rem] p:text-[0.85rem] flexRow items-end font-roboto h-55% font-[600]'>24h Volume(USDT)</div>
                <div className='text-white text-[1.45rem] l:text-[1rem] p:text-[0.8rem] font-[500] h-45% font-roboto'>1,491,056,298.83</div>
              </div>
            </div>
            <div className='w-20% h-100% flexRow justify-end bg-[#161a1e]'>
              <div className='h-100% flexRow mr-1.5rem l:mr-[1rem] p:mr-0.8rem'>
                <div className='w-2rem l:w-[1rem] p:w-[0.8rem] pb-2rem l:pb-[1rem] p:pb-[0.8rem] mr-0.3rem bg-center bg-no-repeat bg-contain bg-coral'></div>
                <div className='text-white font-roboto font-[600] text-[1.3rem] l:text-[0.9rem] p:text-[0.7rem]'>Spot Tutorial</div>
              </div>
              <div className='h-100% flexRow mr-1rem p:mr-1rem'>
                <div className='w-2rem l:w-[1rem] p:w-[0.8rem] pb-2rem l:pb-[1rem] p:pb-[0.8rem] mr-0.3rem bg-center bg-no-repeat bg-contain bg-coral'></div>
                <div className='text-white font-roboto font-[600] text-[1.3rem] l:text-[0.9rem] p:text-[0.7rem]'>Spot Guidance</div>
              </div>
            </div>
          </div>
          {/* <div className='w-100% h-7% flexRow justify-between z-100 font-bold'>
            <div className='text-3rem text-white'>Stage: {stage}</div>
            <div className='text-3rem text-white'>Score: {score}</div>
          </div> */}
          <div className='w-100% h-5% bg-[#161a1e] flexRow justify-start border border-0.1rem border-r-[#636b76] border-b-[#636b76]'>
            <div className='text-white flexRow h-100% px-1.5rem l:px-1.3rem p:px-1rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>Chart</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>Info</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>Trading Data</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>Trading Analysis</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>Square</div>
          </div>
          <div className='w-100% h-5% bg-[#161a1e] flexRow justify-start border border-0.1rem border-r-[#636b76] border-b-[#636b76]'>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-1.3rem p:px-[1rem] font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>Time</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>1s</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>15m</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>1H</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>4H</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>1D</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>1W</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>5m</div>
          </div>
          <div className='w-100% h-55% bg-[#161a1e] overflow-hidden relative flexRow justify-start p-1.5rem l:px-[1rem] p:px-[1rem] border border-0.1rem border-r-[#636b76] border-b-[#636b76] pt-3rem p:pt-5rem'>
            <div className='absolute top-[0rem] left-[0rem] w-100% h-100% flexRow justify-start pl-3.5rem l:pl-[3.2rem] p:pl-[2rem]'>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.3rem] p:mr-[9.5rem]'></div>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.3rem] p:mr-[9.5rem]'></div>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.3rem] p:mr-[9.5rem]'></div>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.3rem] p:mr-[9.5rem]'></div>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.3rem] p:mr-[9.5rem]'></div>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.4rem] p:mr-[9.5rem]'></div>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.4rem] l:hidden p:hidden'></div>
              <div className='w-0.1rem h-100% bg-[#636b76]'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-4% bg-green mr-0.3rem p:mr-[0.25rem] relative'>
              <div className='w-0.1rem h-100% top-[-30%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-3% bg-red mr-0.3rem p:mr-[0.25rem] mb-[6.9%] relative'>
              <div className='w-0.1rem h-200% top-[-20%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-2% bg-green mr-0.3rem p:mr-[0.25rem] mb-[6%] relative'>
              <div className='w-0.1rem h-200% top-[-10%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-2.3% bg-green mr-0.3rem p:mr-[0.25rem] mb-[10.4%] relative'>
              <div className='w-0.1rem h-[300%] top-[-50%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-3.5% bg-red mr-0.3rem p:mr-[0.25rem] mb-[9.2%] relative'>
              <div className='w-0.1rem h-140% top-[-15%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-5.5% bg-green mr-0.3rem p:mr-[0.25rem] mb-[11.2%] relative'>
              <div className='w-0.1rem h-140% top-[-20%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-2.5% bg-green mr-0.3rem p:mr-[0.25rem] mb-[19.3%] relative'>
              <div className='w-0.1rem h-140% top-[-3%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-3.7% bg-red mr-0.3rem p:mr-[0.25rem] mb-[18.1%] relative'>
              <div className='w-0.1rem h-140% top-[-10%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-4.8% bg-red mr-0.3rem p:mr-[0.25rem] mb-[9.5%] relative'>
              <div className='w-0.1rem h-140% top-[-40%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-3.2% bg-red mr-0.3rem p:mr-[0.25rem] mb-[1.5%] relative'>
              <div className='w-0.1rem h-[300%] top-[-50%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-5.5% bg-green mr-0.3rem p:mr-[0.25rem] mb-[3.8%] relative'>
              <div className='w-0.1rem h-140% top-[-30%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-6.1% bg-green mr-0.3rem p:mr-[0.25rem] mb-[15.5%] relative'>
              <div className='w-0.1rem h-140% top-[-40%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-3% bg-green mr-0.3rem p:mr-[0.25rem] mb-[24.6%] relative'>
              <div className='w-0.1rem h-140% top-[-30%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-2.1% bg-red mr-0.3rem p:mr-[0.25rem] mb-[25.5%] relative'>
              <div className='w-0.1rem h-140% top-[-32%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-2.4% bg-red mr-0.3rem p:mr-[0.25rem] mb-[21%] relative'>
              <div className='w-0.1rem h-140% top-[-40%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-4% bg-green mr-0.3rem p:mr-[0.25rem] mb-[22.6%] relative'>
              <div className='w-0.1rem h-140% top-[-34%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-6.5% bg-red mr-0.3rem p:mr-[0.25rem] mb-[20.1%] relative'>
              <div className='w-0.1rem h-140% top-[-23%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-1.7% bg-green mr-0.3rem p:mr-[0.25rem] mb-[15.3%] relative'>
              <div className='w-0.1rem h-140% top-[-15%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-4.7% bg-green mr-0.3rem p:mr-[0.25rem] mb-[21.8%] relative'>
              <div className='w-0.1rem h-140% top-[-22%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-1.2% bg-green mr-0.3rem p:mr-[0.25rem] mb-[27.8%] relative'>
              <div className='w-0.1rem h-140% top-[-34%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-1.8% bg-green mr-0.3rem p:mr-[0.25rem] mb-[30.8%] relative'>
              <div className='w-0.1rem h-140% top-[-34%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-4.2% bg-red mr-0.3rem p:mr-[0.25rem] mb-[28.4%] relative'>
              <div className='w-0.1rem h-140% top-[3%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-3.4% bg-red mr-0.3rem p:mr-[0.25rem] mb-[20.8%] relative'>
              <div className='w-0.1rem h-140% top-[-3%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-6.4% bg-red mr-0.3rem p:mr-[0.25rem] mb-[10.9%] relative'>
              <div className='w-0.1rem h-140% top-[44%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-3.7% bg-green mr-0.3rem p:mr-[0.25rem] mb-[8.3%] relative'>
              <div className='w-0.1rem h-140% top-[-35%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            {/*  */}
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-4.7% bg-green mr-0.3rem p:mr-[0.25rem] mb-[16.7%] relative'>
              <div className='w-0.1rem h-140% top-[-3%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-5.5% bg-green mr-0.3rem p:mr-[0.25rem] mb-[26.9%] relative'>
              <div className='w-0.1rem h-140% top-[-22%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-3% bg-red mr-0.3rem p:mr-[0.25rem] mb-[29.4%] relative'>
              <div className='w-0.1rem h-[300%] top-[-34%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-2.2% bg-green mr-0.3rem p:mr-[0.25rem] mb-[28.7%] relative'>
              <div className='w-0.1rem h-100% top-[2%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-4.7% bg-red mr-0.3rem p:mr-[0.25rem] mb-[26.2%] relative'>
              <div className='w-0.1rem h-140% top-[3%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-6.5% bg-red mr-0.3rem p:mr-[0.25rem] mb-[15%] relative'>
              <div className='w-0.1rem h-100% top-[-3%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-6.3% bg-green mr-0.3rem p:mr-[0.25rem] mb-[14.9%] relative'>
              <div className='w-0.1rem h-140% top-[24%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-7% bg-red mr-0.3rem p:mr-[0.25rem] mb-[14.2%] relative'>
              <div className='w-0.1rem h-200% top-[-15%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            {/*  */}
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-3% bg-green mr-0.3rem p:mr-[0.25rem] mb-[10.2%] relative'>
              <div className='w-0.1rem h-140% top-[-15%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-1.5% bg-green mr-0.3rem p:mr-[0.25rem] mb-[14.7%] relative'>
              <div className='w-0.1rem h-100% top-[-22%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-1.2% bg-green mr-0.3rem p:mr-[0.25rem] mb-[17.6%] relative'>
              <div className='w-0.1rem h-100% top-[-4%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-1.5% bg-green mr-0.3rem p:mr-[0.25rem] mb-[20.4%] relative'>
              <div className='w-0.1rem h-100% top-[-14%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-3.2% bg-red mr-0.3rem p:mr-[0.25rem] mb-[18.7%] relative'>
              <div className='w-0.1rem h-110% top-[3%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-3.4% bg-red mr-0.3rem p:mr-[0.25rem] mb-[12.1%] relative'>
              <div className='w-0.1rem h-140% top-[-3%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-5.5% bg-red mr-0.3rem p:mr-[0.25rem] mb-[3.1%] relative'>
              <div className='w-0.1rem h-160% top-[4%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-2.7% bg-green mr-0.3rem p:mr-[0.25rem] mb-[0.3%] relative'>
              <div className='w-0.1rem h-150% top-[-35%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='absolute bottom-[35%] p:bottom-[25%] left-0 w-100% h-[0.1rem] bg-red'></div>
            <div className='absolute bottom-[35%] p:bottom-[25%] right-[2%] text-red text-3rem l:text-[1.8rem] p:text-[1.3rem] font-[800] font-roboto'>RED LINE</div>
            <button className='absolute bottom-[20%] l:bottom-[10%] p:bottom-[5%] left-[50%] translate-x-[-50%] px-3.5rem l:px-[2.5rem] p:px-[1.5rem] pt-0.2rem rounded-0.7rem l:rounded-0.4rem p:rounded-0.2rem text-4rem l:text-[2.2rem] p:text-[1.6rem] border cursor-pointer font-roboto font-[800] text-white'>BUY</button>
          </div>
          <div className='w-100% h-20% bg-[#161a1e] border border-0.1rem border-r-[#636b76] items-end border-b-[#636b76] flexRow relative justify-start px-1.5rem l:px-1.5rem p:px-11rem'>
            <div className='absolute top-[0rem] left-[0rem] w-100% h-100% flexRow justify-start pl-3.5rem l:pl-[3.2rem] p:pl-[2rem]'>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.3rem] p:mr-[9.5rem]'></div>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.3rem] p:mr-[9.5rem]'></div>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.3rem] p:mr-[9.5rem]'></div>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.3rem] p:mr-[9.5rem]'></div>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.3rem] p:mr-[9.5rem]'></div>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.4rem] p:mr-[9.5rem]'></div>
              <div className='w-0.1rem h-100% bg-[#636b76] mr-[14.91rem] l:mr-[11.4rem] l:hidden p:hidden'></div>
              <div className='w-0.1rem h-100% bg-[#636b76]'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-10% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
          </div>
          <div className='w-100% h-5% bg-[#161a1e] border border-0.1rem border-r-[#636b76] border-b-[#636b76] relative flexRow justify-start px-1.5rem l:px-1.5rem p:px-1rem'>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'>
              <div className='h-100% flexRow mr-4rem text-white font-roboto text-[1.3rem] l:text-[1rem] p:text-[0.8rem] absolute top-[0] left-[-0.5rem] p:left-[-0.7rem]'>00:00</div>
            </div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'>
              <div className='h-100% flexRow mr-4rem text-white font-roboto text-[1.3rem] l:text-[1rem] p:text-[0.8rem] absolute top-[0] left-[-0.5rem] p:left-[-0.7rem]'>01:00</div>
            </div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'>
              <div className='h-100% flexRow mr-4rem text-white font-roboto text-[1.3rem] l:text-[1rem] p:text-[0.8rem] absolute top-[0] left-[-0.5rem] p:left-[-0.7rem]'>02:00</div>
            </div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'>
              <div className='h-100% flexRow mr-4rem text-white font-roboto text-[1.3rem] l:text-[1rem] p:text-[0.8rem] absolute top-[0] left-[-0.5rem] p:left-[-0.7rem]'>03:00</div>
            </div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'></div>
            <div className='w-[1.25rem] l:w-[0.95rem] p:w-[0.8rem] relative'>
              <div className='h-100% flexRow mr-4rem text-white font-roboto text-[1.3rem] l:text-[1rem] p:text-[0.8rem] absolute top-[0] left-[-0.5rem] p:left-[-0.7rem]'>04:00</div>
            </div>
          </div>
        </div>
      </Section>
      <Footer>
        <div></div>
      </Footer>
    </>
  );
};

export default Main;
