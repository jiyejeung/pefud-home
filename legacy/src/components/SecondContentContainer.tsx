const SecondContentContainer = () => {
  return (
    <>
      <div className='w-100% flexRow px-4rem p:px-2.5rem t:px-1.5rem m:px-1rem'>
        <div className='max-w-128rem w-100% flexCol'>
          <div className='flexRow p-1rem cursor-pointer border border-white px-2rem rounded-1rem mt-10rem'>
            <div className='w-3rem h-3rem bg-cover' style={{ backgroundImage: 'url("/images/copy.png")' }}></div>
            <div className='text-white text-2rem pt-0.4rem pl-0.3rem'>0x532f27101965dd16442E59d40670FaF5eBB142E4</div>
          </div>
          <div className='flexRow mt-5rem border border-white rounded-3rem p-1rem px-3rem cursor-pointer'>
            <div className='w-2.3rem h-2.3rem bg-cover' style={{ backgroundImage: 'url("/images/link.png")' }}></div>
            <div className='text-2.3rem text-white font-bold pt-0.4rem pl-0.5rem'>Buy On SpookySwap</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondContentContainer;
