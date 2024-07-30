import { ReactTyped } from 'react-typed';
import DonationHeader from '../layouts/DonationHeader';

const Donation = () => {
  return (
    <>
      <DonationHeader></DonationHeader>
      <section className='w-100% pt-[11.6rem] d:bg-transparent l:bg-coral p:bg-yellow t:bg-green flexRow '>
        <article className='max-w-[120rem] px-[2rem] w-100% flexCol'>
          <h2 className='text-[14rem] leading-[14rem] font-impact my-[3rem] font-[900] text-red tracking-[0rem] z-100 [text-shadow:0px_4px_4px_#000000] [-webkit-text-stroke:10px_#000000]'>TAKE YOUR</h2>
          <h2 className='text-[14rem] leading-[10rem] font-impact font-[900] text-red tracking-[0rem] z-100 [text-shadow:0px_4px_4px_#000000] [-webkit-text-stroke:10px_#000000]'>BONES</h2>
          <div className='w-100% h-[55rem] relative'>
            <div className='absolute top-[16rem] left-[10rem] z-50'>
              <p className='text-[3rem] font-roboto tracking-[0rem] leading-[4rem] font-[800]'>FIRST BIG MEMECOIN</p>
              <p className='text-[3rem] font-roboto tracking-[0rem] leading-[4rem] font-[800]'>ON HORIZEN</p>
              <p className='text-[3rem] font-roboto tracking-[0rem] leading-[4rem] font-[800]'>DONATE STARTS ON</p>
              <p className='text-[3rem] font-roboto tracking-[0rem] leading-[4rem] font-[800] text-red'>JULY 21ST, 5PM UTC</p>
            </div>
            <div className='w-[70rem] h-[70rem] top-[-12rem] left-[60%] translate-x-[-50%] bg-center bg-no-repeat bg-contain absolute animate-[bounce-ball_1.5s_linear_infinite] z-40' style={{ backgroundImage: 'url("images/bone.png")' }}></div>
            <div className='absolute top-[41rem] left-[60%] translate-x-[-50%] w-[38rem] h-[8rem] bg-[#444] rounded-[50%] animate-[bounce-shadow_1.5s_linear_infinite]'></div>
          </div>
        </article>
      </section>
      <section className='w-100% flexRow bg-dark-gray pt-8rem pb-10rem'>
        <article className='max-w-[120rem] flexCol w-100%'>
          <div className='flexCol w-100%'>
            <h2 className='text-[10rem] font-oswald leading-[10rem] font-[800] text-red animate-[toggle-text-yellow_1s_infinite]'>BY DONATING</h2>
            <h2 className='text-[10rem] font-oswald leading-[10rem] font-[800] text-red animate-[toggle-text-yellow_1s_infinite] pb-[15rem]'>GET YOUR BONES IN TIME</h2>
          </div>
          <p className='text-[3rem] font-roboto leading-[3rem] font-[800] text-white pb-[1.5rem]'>PeFUD is the first big meme coin on Horizen.</p>
          <p className='text-[3rem] font-roboto leading-[3rem] font-[800] text-white'>And bones represents the ultimate value of PeFUD's bones.</p>
        </article>
      </section>
      {/* first */}
      {/* <section className='w-100% flexRow pt-8rem pb-4rem'>
        <article className='max-w-[120rem] flexRow w-100%'>
          <div className='w-[40rem] h-[68rem] bg-coral'></div>
          <div className='w-[40rem] bg-dark-gray rounded-[0.5rem] flexCol pt-[3rem] px-[2rem] justify-start h-[68rem]'>
            <h3 className='text-white font-roboto font-[800] text-[5rem] leading-[5rem] mb-[1.5rem]'>DONATE</h3>
            <p className='text-white font-roboto font-[800] text-[2.5rem] leading-[2.5rem] mb-[1rem]'>DONATE END</p>
            <div className='w-100% flexRow mb-[2rem]'>
              <div className='flexRow font-roboto font-[800] text-[2.3rem] leading-[2.3rem] w-[7rem] py-[0.9rem] bg-white rounded-[0.5rem] mr-[0.8rem]'>20d</div>
              <div className='flexRow font-roboto font-[800] text-[2.3rem] leading-[2.3rem] w-[7rem] py-[0.9rem] bg-white rounded-[0.5rem] mr-[0.8rem]'>10h</div>
              <div className='flexRow font-roboto font-[800] text-[2.3rem] leading-[2.3rem] w-[7rem] py-[0.9rem] bg-white rounded-[0.5rem] mr-[0.8rem]'>10m</div>
              <div className='flexRow font-roboto font-[800] text-[2.3rem] leading-[2.3rem] w-[7rem] py-[0.9rem] bg-white rounded-[0.5rem]'>10s</div>
            </div>
            <p className='text-white font-roboto font-[800] text-[2.5rem] leading-[2.5rem] mb-[1rem]'>Until Next Price Increased</p>
            <div className='w-100% flexRow mb-[3rem]'>
              <div className='flexRow font-roboto font-[800] text-[2.3rem] leading-[2.3rem] w-[7rem] py-[0.9rem] bg-white rounded-[0.5rem] mr-[0.8rem]'>18m</div>
              <div className='flexRow font-roboto font-[800] text-[2.3rem] leading-[2.3rem] w-[7rem] py-[0.9rem] bg-white rounded-[0.5rem]'>10s</div>
            </div>
            <div className='w-100% h-[1.8rem] bg-gray rounded-[1.8rem] flexRow justify-start mb-[2rem]'>
              <div className='bg-orange w-[1.8rem] h-[1.8rem] rounded-[1.8rem]'></div>
            </div>
            <p className='text-white text-[3rem] font-roboto font-[800] mb-[2.5rem]'>1 ZEN = 1000 BONES</p>
            <div className='flexRow w-100% mb-[2rem]'>
              <div className='w-[15rem] flexCol'>
                <div className='w-100% flexRow h-[3rem] mb-[1rem]'>
                  <div className='w-[3rem] h-[3rem] bg-coral bg-center bg-contain bg-no-repeat mr-[0.5rem]'></div>
                  <div className='text-[2.5rem] leading-[2.5rem] text-white font-[800] font-roboto'>ZEN</div>
                </div>
                <input className='text-[3rem] font-[800] font-roboto flexRow w-100% h-[4rem] rounded-[0.5rem] text-center' type='number' />
              </div>
              <div className='w-[5rem]'>
                <div className='h-4rem'></div>
                <div className='h-4rem w-100% bg-coral'></div>
              </div>
              <div className='w-[15rem] flexCol'>
                <div className='w-100% flexRow h-[3rem] mb-[1rem]'>
                  <div className='w-[3rem] h-[3rem] bg-coral bg-center bg-contain bg-no-repeat mr-[0.5rem]'></div>
                  <div className='text-[2.5rem] leading-[2.5rem] text-white font-[800] font-roboto'>BONES</div>
                </div>
                <input className='text-[3rem] font-[800] font-roboto flexRow w-100% h-[4rem] rounded-[0.5rem] text-center' type='number' />
              </div>
            </div>
            <p className='text-white text-[2rem] font-roboto font-[500]'>BONES are just points,</p>
            <p className='text-white text-[2rem] font-roboto font-[500] mb-[3rem]'>not coins or tokens.</p>
            <button className='px-[3rem] rounded-[0.5rem] pb-[1rem] pt-[1.1rem] font-roboto text-[2.7rem] leading-[3rem] text-white font-[800] bg-[#faa322] mb-[4rem]'>DONATE NOW</button>
          </div>
          <div className='w-[40rem] h-[68rem] bg-coral'></div>
        </article>
      </section> */}
      {/* first */}
      {/* second */}
      {/* <section className='w-100% flexCol pt-[8rem] pb-[8rem] bg-white'>
        <article className='max-w-[120rem] flexCol w-100% bg-dark-gray px-[3rem]'>
          <h2 className='text-white font-roboto text-[7rem] font-[800] mt-[3rem]'>DONATE</h2>
          <div className='w-100% flexRow mb-[2rem]'>
            <p className='text-white font-roboto text-[2.5rem] font-[800] mr-[1rem]'>DONATE END</p>
            <p className='text-white font-roboto text-[2.5rem] font-[800]'>20:</p>
            <p className='text-white font-roboto text-[2.5rem] font-[800]'>10:</p>
            <p className='text-white font-roboto text-[2.5rem] font-[800]'>10:</p>
            <p className='text-white font-roboto text-[2.5rem] font-[800]'>10</p>
          </div>
          <div className='w-100% h-[2.1rem] bg-gray rounded-[2.1rem] flexRow justify-start mb-[3rem]'>
            <div className='bg-orange w-[4.2rem] h-[2.1rem] rounded-[2.1rem]'></div>
          </div>
          <div className='w-100% flexRow items-end mb-[3rem]'>
            <p className='text-white font-roboto text-[3.5rem] leading-[3.5rem] font-[800] mr-2rem'>1 ZEN = 1000 BONES</p>
            <p className='text-white font-roboto text-[1.8rem] leading-[1.8rem] font-[400] mr-[0.6rem] pb-[0.3rem]'>Until next price increased:</p>
            <p className='text-white font-roboto text-[1.8rem] leading-[1.8rem] font-[400] pb-[0.2rem]'>18m 10s</p>
          </div>
          <div className='w-100% flexRow mb-[2rem]'>
            <div className='flexRow h-[3rem] mr-[2rem]'>
              <div className='w-[3rem] h-[3rem] bg-coral bg-center bg-contain bg-no-repeat mr-[0.5rem]'></div>
              <div className='text-[2.5rem] leading-[2.5rem] text-white font-[800] font-roboto'>ZEN</div>
            </div>
            <input className='text-[3rem] font-[800] font-roboto flexRow w-[20rem] h-[4rem] rounded-[0.5rem] text-center mr-[2rem]' type='number' />
            <div className='flexRow h-[3rem] mr-[2rem]'>
              <div className='w-[3rem] h-[3rem] bg-coral bg-center bg-contain bg-no-repeat mr-[0.5rem]'></div>
              <div className='text-[2.5rem] leading-[2.5rem] text-white font-[800] font-roboto'>BONES</div>
            </div>
            <input className='text-[3rem] font-[800] font-roboto flexRow w-[20rem] h-[4rem] rounded-[0.5rem] text-center mr-[2rem]' type='number' />
            <button className='px-[3rem] rounded-[0.5rem] pb-[1rem] pt-[1.1rem] font-roboto text-[2.7rem] leading-[3rem] text-white font-[800] bg-[#faa322]'>DONATE NOW</button>
          </div>
          <p className='text-white font-roboto text-[2rem] font-[800] mb-[2.5rem] mb-[5rem]'>BONES are just points, not coins or tokens.</p>
        </article>
        <article className='mt-[2rem] max-w-[120rem] flexCol w-100% bg-white border-t border-l'>
          <div className='w-100% h-[3.5rem] flexRow'>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800] bg-red text-white'>DONATE ZEN</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800] bg-red text-white'>ZEN: BONES RATIO</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800] bg-red text-white'>DONATE ZEN</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800] bg-red text-white'>ZEN: BONES RATIO</div>
          </div>
          <div className='w-100% h-[3.5rem] flexRow'>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>1 ~ 10</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>1:1000</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>11 ~ 20</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>1:1010</div>
          </div>
          <div className='w-100% h-[3.5rem] flexRow'>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>21 ~ 30</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>1:1020</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>31 ~ 40</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>1:1030</div>
          </div>
          <div className='w-100% h-[3.5rem] flexRow'>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>41 ~ 50</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>1:1040</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>51 ~ 60</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>1:1050</div>
          </div>
          <div className='w-100% h-[3.5rem] flexRow'>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>61 ~ 70</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>1:1060</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>71 ~ 80</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>1:1070</div>
          </div>
          <div className='w-100% h-[3.5rem] flexRow'>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>81 ~ 90</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>1:1080</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>91 ~ 100</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>1:1090</div>
          </div>
          <div className='w-100% h-[3.5rem] flexRow'>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>101 ~</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'>1:1100</div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'></div>
            <div className='w-[25%] h-[100%] border-r border-b flexRow text-[2.5rem] font-roboto font-[800]'></div>
          </div>
        </article>
      </section> */}
      {/* second */}
      {/* third */}
      {/* <section className='w-100% flexCol pt-[8rem] pb-[8rem] bg-white'>
        <article className='max-w-[120rem] flexCol w-100% bg-dark-gray px-[3rem]'>
          <h2 className='text-white font-roboto text-[7rem] font-[800] mt-[3rem]'>DONATE</h2>
          <div className='w-100% flexRow mb-[2rem]'>
            <p className='text-white font-roboto text-[2.5rem] font-[800] mr-[1rem]'>DONATE END</p>
            <p className='text-white font-roboto text-[2.5rem] font-[800]'>20:</p>
            <p className='text-white font-roboto text-[2.5rem] font-[800]'>10:</p>
            <p className='text-white font-roboto text-[2.5rem] font-[800]'>10:</p>
            <p className='text-white font-roboto text-[2.5rem] font-[800]'>10</p>
          </div>
          <div className='w-100% h-[2.1rem] bg-gray rounded-[2.1rem] flexRow justify-start mb-[3rem]'>
            <div className='bg-orange w-[4.2rem] h-[2.1rem] rounded-[2.1rem]'></div>
          </div>
          <div className='w-100% flexRow items-end mb-[3rem]'>
            <p className='text-white font-roboto text-[3.5rem] leading-[3.5rem] font-[800] mr-2rem'>1 ZEN = 1000 BONES</p>
            <p className='text-white font-roboto text-[1.8rem] leading-[1.8rem] font-[400] mr-[0.6rem] pb-[0.3rem]'>Until next price increased:</p>
            <p className='text-white font-roboto text-[1.8rem] leading-[1.8rem] font-[400] pb-[0.2rem]'>18m 10s</p>
          </div>
          <div className='w-100% flexRow mb-[2rem]'>
            <div className='flexRow h-[3rem] mr-[2rem]'>
              <div className='w-[3rem] h-[3rem] bg-coral bg-center bg-contain bg-no-repeat mr-[0.5rem]'></div>
              <div className='text-[2.5rem] leading-[2.5rem] text-white font-[800] font-roboto'>ZEN</div>
            </div>
            <input className='text-[3rem] font-[800] font-roboto flexRow w-[20rem] h-[4rem] rounded-[0.5rem] text-center mr-[2rem]' type='number' />
            <div className='flexRow h-[3rem] mr-[2rem]'>
              <div className='w-[3rem] h-[3rem] bg-coral bg-center bg-contain bg-no-repeat mr-[0.5rem]'></div>
              <div className='text-[2.5rem] leading-[2.5rem] text-white font-[800] font-roboto'>BONES</div>
            </div>
            <input className='text-[3rem] font-[800] font-roboto flexRow w-[20rem] h-[4rem] rounded-[0.5rem] text-center mr-[2rem]' type='number' />
            <button className='px-[3rem] rounded-[0.5rem] pb-[1rem] pt-[1.1rem] font-roboto text-[2.7rem] leading-[3rem] text-white font-[800] bg-[#faa322]'>DONATE NOW</button>
          </div>
          <p className='text-white font-roboto text-[2rem] font-[800] mb-[2.5rem] mb-[5rem]'>BONES are just points, not coins or tokens.</p>
        </article>
        <article className='mt-[2rem] max-w-[120rem] flexCol w-100% bg-white border-t border-l'>
          <div className='w-100% h-[3rem] flexRow'>
            <div className='w-[50%] h-[100%] border-r border-b flexRow text-[2rem] leading-[2rem] font-roboto font-[800] bg-red text-white'>DONATE ZEN</div>
            <div className='w-[50%] h-[100%] border-r border-b flexRow text-[2rem] leading-[2rem] font-roboto font-[800] bg-red text-white'>ZEN: BONES RATIO</div>
          </div>
          <div className='w-100% h-[3rem] flexRow'>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1 ~ 10</div>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1:1000</div>
          </div>
          <div className='w-100% h-[3rem] flexRow'>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>11 ~ 20</div>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1:1010</div>
          </div>
          <div className='w-100% h-[3rem] flexRow'>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>21 ~ 30</div>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1:1020</div>
          </div>
          <div className='w-100% h-[3rem] flexRow'>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>31 ~ 40</div>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1:1030</div>
          </div>
          <div className='w-100% h-[3rem] flexRow'>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>41 ~ 50</div>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1:1040</div>
          </div>
          <div className='w-100% h-[3rem] flexRow'>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>51 ~ 60</div>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1:1050</div>
          </div>
          <div className='w-100% h-[3rem] flexRow'>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>61 ~ 70</div>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1:1060</div>
          </div>
          <div className='w-100% h-[3rem] flexRow'>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>71 ~ 80</div>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1:1070</div>
          </div>
          <div className='w-100% h-[3rem] flexRow'>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>81 ~ 90</div>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1:1080</div>
          </div>
          <div className='w-100% h-[3rem] flexRow'>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>91 ~ 100</div>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1:1090</div>
          </div>
          <div className='w-100% h-[3rem] flexRow'>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>101 ~</div>
            <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1:1100</div>
          </div>
        </article>
      </section> */}
      {/* third */}
      {/* fourth */}
      <section className='w-100% flexCol pt-[8rem] bg-white'>
        <article className='max-w-[120rem] flexCol w-100% bg-dark-gray px-[3rem]'>
          <h2 className='text-white font-roboto text-[7rem] font-[800] mt-[3rem]'>DONATE</h2>
          <div className='w-100% flexRow mb-[2rem]'>
            <p className='text-white font-roboto text-[2.5rem] font-[800] mr-[1rem]'>DONATE END</p>
            <p className='text-white font-roboto text-[2.5rem] font-[800]'>20:</p>
            <p className='text-white font-roboto text-[2.5rem] font-[800]'>10:</p>
            <p className='text-white font-roboto text-[2.5rem] font-[800]'>10:</p>
            <p className='text-white font-roboto text-[2.5rem] font-[800]'>10</p>
          </div>
          <div className='w-100% h-[2.1rem] bg-gray rounded-[2.1rem] flexRow justify-start mb-[3rem]'>
            <div className='bg-orange w-[4.2rem] h-[2.1rem] rounded-[2.1rem]'></div>
          </div>
          <div className='w-100% flexRow items-end mb-[3rem]'>
            <p className='text-white font-roboto text-[3.5rem] leading-[3.5rem] font-[800] mr-2rem'>1 ZEN = 1000 BONES</p>
            <p className='text-white font-roboto text-[1.8rem] leading-[1.8rem] font-[400] mr-[0.6rem] pb-[0.3rem]'>Until next price increased:</p>
            <p className='text-white font-roboto text-[1.8rem] leading-[1.8rem] font-[400] pb-[0.2rem]'>18m 10s</p>
          </div>
          <div className='w-100% flexRow mb-[2rem]'>
            <div className='flexRow h-[3rem] mr-[2rem]'>
              <div className='w-[3rem] h-[3rem] bg-coral bg-center bg-contain bg-no-repeat mr-[0.5rem]'></div>
              <div className='text-[2.5rem] leading-[2.5rem] text-white font-[800] font-roboto'>ZEN</div>
            </div>
            <input className='text-[3rem] font-[800] font-roboto flexRow w-[20rem] h-[4rem] rounded-[0.5rem] text-center mr-[2rem]' type='number' />
            <div className='flexRow h-[3rem] mr-[2rem]'>
              <div className='w-[3rem] h-[3rem] bg-coral bg-center bg-contain bg-no-repeat mr-[0.5rem]'></div>
              <div className='text-[2.5rem] leading-[2.5rem] text-white font-[800] font-roboto'>BONES</div>
            </div>
            <input className='text-[3rem] font-[800] font-roboto flexRow w-[20rem] h-[4rem] rounded-[0.5rem] text-center mr-[2rem]' type='number' />
            <button className='px-[3rem] rounded-[0.5rem] pb-[1rem] pt-[1.1rem] font-roboto text-[2.7rem] leading-[3rem] text-white font-[800] bg-[#faa322]'>DONATE NOW</button>
          </div>
          <p className='text-white font-roboto text-[2rem] font-[800] mb-[2.5rem] mb-[5rem]'>BONES are just points, not coins or tokens.</p>
        </article>
      </section>
      <section className='w-100% flexRow bg-white pt-[2rem] pb-[9rem]'>
        <article className='max-w-[120rem] flexRow w-100%'>
          <div className='w-[50%] flexCol bg-white border-t border-l'>
            <div className='w-100% h-[3rem] flexRow'>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] bg-red text-white'>DONATE ZEN</div>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] bg-red text-white'>ZEN: BONES RATIO</div>
            </div>
            <div className='w-100% h-[3rem] flexRow'>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1 ~ 10</div>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1: 1000</div>
            </div>
            <div className='w-100% h-[3rem] flexRow'>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>11 ~ 20</div>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1: 1010</div>
            </div>
            <div className='w-100% h-[3rem] flexRow'>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>21 ~ 30</div>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1: 1020</div>
            </div>
            <div className='w-100% h-[3rem] flexRow'>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>31 ~ 40</div>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1: 1030</div>
            </div>
            <div className='w-100% h-[3rem] flexRow'>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>41 ~ 50</div>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1: 1040</div>
            </div>
            <div className='w-100% h-[3rem] flexRow'>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>51 ~ 60</div>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1: 1050</div>
            </div>
            <div className='w-100% h-[3rem] flexRow'>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>61 ~ 70</div>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1: 1060</div>
            </div>
            <div className='w-100% h-[3rem] flexRow'>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>71 ~ 80</div>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1: 1070</div>
            </div>
            <div className='w-100% h-[3rem] flexRow'>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>81 ~ 90</div>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1: 1080</div>
            </div>
            <div className='w-100% h-[3rem] flexRow'>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>91 ~ 100</div>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1: 1090</div>
            </div>
            <div className='w-100% h-[3rem] flexRow'>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>101 ~</div>
              <div className='w-[50%] h-[100%] border-r border-b border-black flexRow text-[2rem] leading-[2rem] font-roboto font-[800] text-red'>1: 1100</div>
            </div>
          </div>
          <div className='w-[50%] h-[36.1rem] bg-coral'></div>
        </article>
      </section>
      {/* fourth */}
      {/* <section className='w-100% flexRow bg-dark-gray'>
        <article className='max-w-[120rem] flexCol w-100%'>
          <h3 className='text-[10rem] text-red font-oswald font-[800] [-webkit-text-stroke:2px_#ffffff] tracking-[-0.3rem] pt-10rem pb-11rem'>HOW TO DONATE?</h3>
        </article>
      </section> */}
      <section className='w-100% flexRow bg-dark-gray'>
        <article className='max-w-[120rem] flexCol w-100% h-[30rem]'>
          <ReactTyped strings={['HOW TO DONATE?']} typeSpeed={50} backSpeed={50} backDelay={1500} showCursor={false} loop={true} style={{ fontSize: '10rem', color: '#ec3b23', fontFamily: 'Oswald', fontWeight: '800', WebkitTextStroke: '2px #fff', letterSpacing: '-0.3rem', paddingTop: '10rem', paddingBottom: '11rem' }} />
        </article>
      </section>
      {/* first */}
      {/* <section className='w-100% flexCol pt-4rem'>
        <article className='max-w-[120rem] w-100% flexRow'>
          <div className='px-[2rem] py-[2rem] w-[28.5rem] h-[23rem] bg-[#FAA323] rounded-[0.5rem] mr-2rem'>
            <p className='font-roboto text-white font-[800] text-[2rem] mb-[2rem] leading-[2rem]'>PREPARE A WALLET</p>
            <p className='font-roboto text-[1.3rem] leading-[1.8rem]'>The potential BONES holder should have a EON chain wallet to operate with NFT and cryptocurrencies. Metamask works perfectly fine.</p>
          </div>
          <div className='px-[2rem] py-[2rem] w-[28.5rem] h-[23rem] bg-[#FAA323] rounded-[0.5rem] mr-2rem'>
            <p className='font-roboto text-white font-[800] text-[2rem] mb-[2rem] leading-[2rem]'>BUY ZEN</p>
            <p className='font-roboto text-[1.3rem] leading-[1.8rem]'>To participate you need to have $ZEN on your wallet. You can buy ZEN on CEX like Binance... etc and send it to your wallet.</p>
          </div>
          <div className='px-[2rem] py-[2rem] w-[28.5rem] h-[23rem] bg-[#FAA323] rounded-[0.5rem] mr-2rem'>
            <p className='font-roboto text-white font-[800] text-[2rem] mb-[2rem] leading-[2rem]'>GET BONES</p>
            <p className='font-roboto text-[1.3rem] leading-[1.8rem]'>After that, Enter 1 ZEN or more in the donate window above and click the donate button to donate. Depending on the amount of ZEN you donate, you can get BONES and if you donate a lot of ZEN at once, you can get additional BONES.</p>
          </div>
          <div className='px-[2rem] py-[2rem] w-[28.5rem] h-[23rem] bg-[#FAA323] rounded-[0.5rem]'>
            <p className='font-roboto text-white font-[800] text-[2rem] mb-[2rem] leading-[2rem]'>GET NFT & ENJOY GAME</p>
            <p className='font-roboto text-[1.3rem] leading-[1.8rem]'>You can get NFTs with BONES, which are points earned through donations. Only people with NFTs can play games that increase the number of BONES.</p>
            <p className='font-roboto text-[1.3rem] leading-[1.8rem] mt-[1rem]'>And the most important thing is that the amount of $PeFUD paid out is determined by the amount of BONES held.</p>
          </div>
        </article>
        <article className='max-w-[120rem] flexCol w-100%'>
          <p className='w-100% font-roboto text-[1.8rem] font-[800] flexRow mt-[2rem]'>Any transactions with donations will be deemed lost and nonrefundable.</p>
          <h3 className='font-roboto w-100% text-[5rem] font-[800] flexRow mt-[5rem] mb-[2rem]'>DISTRIBUTION</h3>
          <p className='w-100% text-[1.5rem] flexRow font-roboto font-[700]'>BONES distribution begins 30 minutes after the announcement, and donors who send Zen first will have higher priority in the distribution process.</p>
          <p className='w-100% text-[1.5rem] flexRow font-roboto font-[700] pb-[4rem]'>Deployment will be public or private and may take several hours depending on server speed.</p>
        </article>
      </section> */}
      {/* first */}
      {/* second */}
      <section className='w-100% flexCol pt-4rem'>
        <article className='max-w-[120rem] w-100% flexRow'>
          <div className='px-[2rem] py-[2rem] w-[28.5rem] h-[23rem] bg-black rounded-[0.5rem] mr-2rem'>
            <p className='font-roboto text-red font-[800] text-[2rem] mb-[2rem] leading-[2rem]'>PREPARE A WALLET</p>
            <p className='font-roboto text-[1.3rem] leading-[1.8rem] text-white font-[400]'>The potential BONES holder should have a EON chain wallet to operate with NFT and cryptocurrencies. Metamask works perfectly fine.</p>
          </div>
          <div className='px-[2rem] py-[2rem] w-[28.5rem] h-[23rem] bg-black rounded-[0.5rem] mr-2rem'>
            <p className='font-roboto text-red font-[800] text-[2rem] mb-[2rem] leading-[2rem]'>BUY ZEN</p>
            <p className='font-roboto text-[1.3rem] leading-[1.8rem] text-white font-[400]'>To participate you need to have $ZEN on your wallet. You can buy ZEN on CEX like Binance... etc and send it to your wallet.</p>
          </div>
          <div className='px-[2rem] py-[2rem] w-[28.5rem] h-[23rem] bg-black rounded-[0.5rem] mr-2rem'>
            <p className='font-roboto text-red font-[800] text-[2rem] mb-[2rem] leading-[2rem]'>GET BONES</p>
            <p className='font-roboto text-[1.3rem] leading-[1.8rem] text-white font-[400]'>After that, Enter 1 ZEN or more in the donate window above and click the donate button to donate. Depending on the amount of ZEN you donate, you can get BONES and if you donate a lot of ZEN at once, you can get additional BONES.</p>
          </div>
          <div className='px-[2rem] py-[2rem] w-[28.5rem] h-[23rem] bg-black rounded-[0.5rem]'>
            <p className='font-roboto text-red font-[800] text-[2rem] mb-[2rem] leading-[2rem]'>GET NFT & ENJOY GAME</p>
            <p className='font-roboto text-[1.3rem] leading-[1.8rem] text-white font-[400]'>You can get NFTs with BONES, which are points earned through donations. Only people with NFTs can play games that increase the number of BONES.</p>
            <p className='font-roboto text-[1.3rem] leading-[1.8rem] text-white font-[400] mt-[1rem]'>And the most important thing is that the amount of $PeFUD paid out is determined by the amount of BONES held.</p>
          </div>
        </article>
        <article className='max-w-[120rem] flexCol w-100%'>
          <p className='w-100% font-roboto text-[1.8rem] font-[800] flexRow mt-[2rem]'>Any transactions with donations will be deemed lost and nonrefundable.</p>
          <h3 className='font-roboto w-100% text-[5rem] font-[800] flexRow mt-[5rem] mb-[2rem]'>DISTRIBUTION</h3>
          <p className='w-100% text-[1.5rem] flexRow font-roboto font-[700]'>BONES distribution begins 30 minutes after the announcement, and donors who send Zen first will have higher priority in the distribution process.</p>
          <p className='w-100% text-[1.5rem] flexRow font-roboto font-[700] pb-[4rem]'>Deployment will be public or private and may take several hours depending on server speed.</p>
        </article>
      </section>
      {/* second */}
    </>
  );
};

export default Donation;
