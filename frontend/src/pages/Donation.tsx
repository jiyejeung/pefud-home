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
      <section className='w-100% flexCol pt-4rem'>
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
      </section>
      <section className='w-100% flexRow bg-dark-gray'>
        <article className='max-w-[120rem] flexCol w-100%'>
          <h3 className='text-[10rem] text-red font-oswald font-[800] [-webkit-text-stroke:2px_#ffffff] tracking-[-0.3rem] pt-10rem pb-11rem'>WHAT IF I DONATE A LOT?</h3>
        </article>
      </section>
      <section className='w-100% flexRow'>
        <article className='max-w-[120rem] w-100% flexCol'>
          <h3 className='text-[6rem] font-roboto font-[800] pt-4rem pb-3.5rem'>DONATE TABLE</h3>
          <div></div>
          <p>The rate decreases by 0.1% every hour from the initially set value.</p>
        </article>
      </section>
    </>
  );
};

export default Donation;
