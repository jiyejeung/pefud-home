import { useState } from 'react';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Section from '../layouts/Section';

const Main = () => {
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [stage, setStage] = useState(1);

  const [isShow, setIsShow] = useState(false);

  const [game, state] = useState('');
  const [coinName, setCoinName] = useState('');

  const handleMouseEnter = () => {
    setIsShow(true);
  };
  const handleMouseLeave = () => {
    setIsShow(false);
  };

  // npm install express typeorm typescript @types/express @types/node ts-node reflect-metadata body-parser dotenv ethers cors

  return (
    <>
      <Section backgroundColor='#161a1e'>
        <div className='bg-[#161a1e] w-[110rem] l:w-[80rem] p:w-[70rem] h-65rem l:h-[55rem] p:h-[40rem] relative border border-0.1rem border-t-[#636b76] border-l-[#636b76] border-r-[#636b76]'>
          <div className='w-100% h-10% flexRow justify-between border border-0.1rem border-b-[#636b76]'>
            <div className='w-30% h-100% flexRow justify-start'>
              <div className='h-100% flexRow px-1.5rem l:px-1rem'>
                <div className='w-3rem h-3rem l:w-2rem l:h-2rem p:w-1.5rem p:h-1.5rem p:pb-0 rounded-0.5rem l:rounded-0.4rem p:rounded-0.3rem border-[#636b76] border'></div>
              </div>
              <div className='w-65% h-100% flexCol'>
                <div className='w-100% h-50% flexRow items-end justify-start'>
                  <div className='text-2.5rem l:text-1.4rem p:text-[1.3rem] leading-[2.8rem] p:leading-[1.4rem] text-white mr-0.5rem l:mr-0.6rem p:mr-0.3rem font-roboto font-[700]'>ZEN/USDT</div>
                  <div className='text-1.2rem l:text-0.9rem p:text-[0.6rem] text-light-gray font-roboto border-b-[0.1rem] mb-0.5rem l:mb-[0.4rem] p:mb-[0.3rem] leading-[1.4rem] l:leading-[1rem] p:leading-[0.8rem]'>ZEN Price</div>
                </div>
                <div className='w-100% h-40% flexRow justify-start pl-0rem p:pt-0.1rem'>
                  <div className='text-1.25rem l:text-[0.95rem] p:text-[0.7rem] text-[#d8a80e] bg-[#2e2a21] px-0.7rem l:px-0.4rem p:px-[0.3rem] pb-0.1rem l:pb-[0rem] p:pb-[0re,] pt-0.15rem l:pt-[0.1rem] p:pt-[0.1rem] font-roboto rounded-l-0.3rem'>POW</div>
                  <div className='text-1.25rem l:text-[0.95rem] p:text-[0.7rem] text-[#d8a80e] bg-[#2e2a21] px-0.7rem l:px-0.4rem p:px-[0.3rem] pb-0.1rem l:pb-[0rem] p:pb-[0re,] pt-0.15rem l:pt-[0.1rem] p:pt-[0.1rem] font-roboto'>Vol</div>
                  <div className='text-1.25rem l:text-[0.95rem] p:text-[0.7rem] text-[#d8a80e] bg-[#2e2a21] px-0.7rem l:px-0.4rem p:px-[0.3rem] pb-0.1rem l:pb-[0rem] p:pb-[0re,] pt-0.15rem l:pt-[0.1rem] p:pt-[0.1rem] font-roboto rounded-r-0.3rem p:flexRow'>
                    Price Prote...
                    <div className='w-1rem l:w-0.8rem p:w-[0.7rem] pb-1rem l:pb-0.8rem p:pb-[0.7rem] bg-contain bg-center bg-no-repeat inline-block ml-0.9rem l:ml-0.5rem p:ml-0.4rem' style={{ backgroundImage: 'url("/images/right-arrow.png")' }}></div>
                  </div>
                </div>
              </div>
              <div className='w-30% h-100% flexCol'>
                <div className='font-roboto text-green text-2.1rem l:text-[1.5rem] p:text-[1.2rem] w-100% pl-0.2rem h-55% flexRow items-end justify-start leading-[1.3rem] l:leading-[1.3rem] p:leading-[1rem] pb-0.8rem l:pb-[0.4rem] p:pb-[0.3rem]'>194.72</div>
                <div className='font-roboto text-white text-1.5rem l:text-[1rem] p:text-[0.75rem] w-100% pl-0.7rem l:pl-[0.5rem] p:pl-[0.3rem] h-45% flexRow items-start justify-start'>$194.72</div>
              </div>
            </div>
            <div className='w-50% h-100% flexRow justify-start bg-[#161a1e] ml-0.5rem l:ml-[0.7rem] p:ml-[0.4rem]'>
              <div className='h-100% mr-2% flexCol items-start'>
                <div className='text-[#636b76] text-[1.4rem] l:text-[1.1rem] p:text-[0.85rem] flexRow items-end font-roboto h-55% font-[600]'>24h Change</div>
                <div className='text-[1.3rem] l:text-[1rem] p:text-[0.8rem] font-[500] font-roboto h-45% text-red'>-890.10 -1.28%</div>
              </div>
              <div className='h-100% mr-2% flexCol items-start'>
                <div className='text-[#636b76] text-[1.4rem] l:text-[1.1rem] p:text-[0.85rem] flexRow items-end font-roboto h-55% font-[600]'>24h High</div>
                <div className='text-white text-[1.3rem] l:text-[1rem] p:text-[0.8rem] font-[500] h-45% font-roboto'>65,111,29</div>
              </div>
              <div className='h-100% mr-2% flexCol items-start'>
                <div className='text-[#636b76] text-[1.4rem] l:text-[1.1rem] p:text-[0.85rem] flexRow items-end font-roboto h-55% font-[600]'>24h Low</div>
                <div className='text-white text-[1.3rem] l:text-[1rem] p:text-[0.8rem] font-[500] h-45% font-roboto'>63,238.48</div>
              </div>
              <div className='h-100% mr-2% flexCol items-start'>
                <div className='text-[#636b76] text-[1.4rem] l:text-[1.1rem] p:text-[0.85rem] flexRow items-end font-roboto h-55% font-[600]'>24h Volume(BTC)</div>
                <div className='text-white text-[1.3rem] l:text-[1rem] p:text-[0.8rem] font-[500] h-45% font-roboto'>23,300.79</div>
              </div>
              <div className='h-100% mr-2% flexCol items-start'>
                <div className='text-[#636b76] text-[1.4rem] l:text-[1.1rem] p:text-[0.85rem] flexRow items-end font-roboto h-55% font-[600]'>24h Volume(USDT)</div>
                <div className='text-white text-[1.3rem] l:text-[1rem] p:text-[0.8rem] font-[500] h-45% font-roboto'>1,491,056,298.83</div>
              </div>
            </div>
            <div className='w-22% h-100% flexRow justify-end bg-[#161a1e]'>
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
          <div className='w-100% h-5% bg-[#161a1e] flexRow justify-start border border-0.1rem border-b-[#636b76]'>
            <div className='text-white flexRow h-100% px-1.5rem l:px-1.3rem p:px-1rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>Chart</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>Info</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>Trading Data</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>Trading Analysis</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>Square</div>
          </div>
          <div className='w-100% h-5% bg-[#161a1e] flexRow justify-start border border-0.1rem border-b-[#636b76]'>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-1.3rem p:px-[1rem] font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>Time</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>1s</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>15m</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>1H</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>4H</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>1D</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>1W</div>
            <div className='text-[#636b76] flexRow h-100% px-1.5rem l:px-0rem l:pr-1.3rem p:px-0rem p:pr-1.2rem font-[600] text-[1.5rem] l:text-[1.1rem] p:text-[0.8rem] font-roboto cursor-pointer'>5m</div>
          </div>
          <div className='w-100% h-55% bg-[#161a1e] overflow-hidden relative flexRow justify-start p-1.5rem l:px-[1rem] p:px-[1rem] border border-0.1rem border-b-[#636b76] pt-28rem l:pt-23rem p:pt-18rem'>
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
              <div className='w-0.1rem h-[150%] top-[-50%] left-50% translate-x-[-50%] bg-red absolute'></div>
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
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-4.2% bg-green mr-0.3rem p:mr-[0.25rem] mb-[20.5%] relative'>
              <div className='w-0.1rem h-100% top-[-4%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-11.5% bg-green mr-0.3rem p:mr-[0.25rem] mb-[36.3%] relative'>
              <div className='w-0.1rem h-100% top-[-14%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-9.2% bg-red mr-0.3rem p:mr-[0.25rem] mb-[38.6%] relative'>
              <div className='w-0.1rem h-110% top-[3%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-7.4% bg-red mr-0.3rem p:mr-[0.25rem] mb-[22.0%] relative'>
              <div className='w-0.1rem h-140% top-[-3%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-5.5% bg-red mr-0.3rem p:mr-[0.25rem] mb-[9%] relative'>
              <div className='w-0.1rem h-160% top-[4%] left-50% translate-x-[-50%] bg-red absolute'></div>
            </div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] pb-1.7% bg-green mr-0.3rem p:mr-[0.25rem] mb-[5.2%] relative'>
              <div className='w-0.1rem h-150% top-[-35%] left-50% translate-x-[-50%] bg-green absolute'></div>
            </div>
            {/* <div className='absolute bottom-[35%] p:bottom-[25%] left-0 w-100% h-[0.1rem] bg-red'></div>
            <div className='absolute bottom-[35%] p:bottom-[25%] right-[2%] text-red text-3rem l:text-[1.8rem] p:text-[1.3rem] font-[800] font-roboto'>RED LINE</div> */}
          </div>
          <div className='w-100% h-20% bg-[#161a1e] border border-0.1rem items-end border-b-[#636b76] flexRow relative justify-start px-1.5rem l:px-1rem p:px-1rem'>
            {/* <div className='absolute bottom-[50%] translate-y-[50%] right-[2%] flexRow'>
              <button className='px-4rem l:px-[2.5rem] p:px-[1.5rem] pt-0.8rem pb-0.8rem rounded-0.7rem l:rounded-0.4rem p:rounded-0.2rem text-2rem l:text-[1.5rem] p:text-[1.2rem] cursor-pointer font-roboto font-[800] text-white bg-[#2dbd85] z-100 mr-2rem'>Buy BTC</button>
              <button className='px-4rem l:px-[2.5rem] p:px-[1.5rem] pt-0.8rem pb-0.8rem rounded-0.7rem l:rounded-0.4rem p:rounded-0.2rem text-2rem l:text-[1.5rem] p:text-[1.2rem] cursor-pointer font-roboto font-[800] text-white bg-[#e9445a] z-100'>Sell BTC</button>
            </div> */}

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
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-11% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-6.5% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-5% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-8% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-7% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-17% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-11% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-7% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-21% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-25% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-22% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-31% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-34% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-16% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-10.5% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-7.5% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-21.5% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-7.5% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-25% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-5% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-21% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-18% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-15% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-31% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-15% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-17.5% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-20% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-25% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-5% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-21% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-15% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-21% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-37% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-10% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-6.5% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-15.5% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-42.5% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-31.5% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-25.5% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-22% bg-red mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-5% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
            <div className='w-1.2rem l:w-[0.65rem] p:w-[0.55rem] h-0% bg-green mr-0.3rem p:mr-[0.25rem] relative'></div>
          </div>
          <div className='w-100% h-5% bg-[#161a1e] border border-0.1rem border-b-[#636b76] relative flexRow justify-start px-1.5rem l:px-1.5rem p:px-1rem'>
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
        <div className='bg-[#1E2025] w-[110rem] l:w-[80rem] p:w-[70rem] relative border-l-0.1rem border-r-0.1rem border-b-0.1rem border-[#636b76] flexRow py-1.5rem l:py-1rem px-1.5rem l:px-1rem p:px-1rem'>
          <div className='w-50% h-[5rem] l:h-[3rem] p:h-[2.5rem] flexRow justify-between px-1.5rem l:px-1rem p:px-1rem bg-[#292D35] rounded-1rem'>
            <div className='text-[#848E9C] text-[1.6rem] l:text-1.3rem p:text-[0.9rem] font-roboto font-[800]'>Amount</div>
            <div className='flexRow'>
              <div className='text-white text-[1.6rem] l:text-[1.3rem] p:text-[0.9rem] pr-[0.5rem] l:pr-[0.4rem] p:pr-[0.3rem] font-roboto font-[800]'>0</div>
              <div className='text-white text-[1.6rem] l:text-[1.3rem] p:text-[0.9rem] font-roboto font-[800]'>ZEN</div>
            </div>
          </div>
          <div className='w-50% flexRow justify-between rounded-1rem l:rounded-0.7rem ml-[1.5rem] l:ml-[1rem] p:ml-[1rem]'>
            <button className='w-50% h-[5rem] l:h-[3rem] p:h-[2.5rem] rounded-0.7rem l:rounded-0.4rem p:rounded-0.2rem text-1.8rem l:text-[1.3rem] p:text-[1rem] cursor-pointer font-roboto font-[800] text-white bg-[#2dbd85] mr-1.5rem l:mr-1rem'>Buy ZEN</button>
            <button className='w-50% h-[5rem] l:h-[3rem] p:h-[2.5rem] rounded-0.7rem l:rounded-0.4rem p:rounded-0.2rem text-1.8rem l:text-[1.3rem] p:text-[1rem] cursor-pointer font-roboto font-[800] text-white bg-[#e9445a] relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Sell ZEN
              {isShow === true ? <div className='absolute bottom-[50%] translate-y-[50%] left-[50%] translate-x-[-55%] text-white z-200 bg-center bg-contain bg-no-repeat w-10rem h-10rem l:w-7rem l:h-7rem' style={{ backgroundImage: 'url("/images/no-sell.png")' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div> : <></>}
            </button>
          </div>
        </div>
        {/* <div className='absolute bottom-[-7rem] right-[0] flexRow'>
          
        </div> */}
      </Section>
      <Footer>
        <div></div>
      </Footer>
    </>
  );
};

export default Main;
