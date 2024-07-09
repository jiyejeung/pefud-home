const FourthContentContainer = () => {
  return (
    <>
      <div className='w-100% flexRow px-4rem p:px-2.5rem t:px-1.5rem m:px-1rem'>
        <div className='max-w-128rem w-100% flexCol'>
          <div className='flexRow text-white font-bold text-5rem pt-10rem'>Featured On</div>
          <div className='flexRow w-100% mt-2rem border border-white py-2rem rounded-1rem px-4rem pt-2.5rem'>
            <div className='cursor-pointer w-45rem h-7rem bg-contain bg-no-repeat mr-4rem' style={{ backgroundImage: 'url("/images/featuredOn_01.png")' }}></div>
            <div className='cursor-pointer w-13rem h-7rem bg-contain bg-no-repeat mr-4rem' style={{ backgroundImage: 'url("/images/featuredOn_02.png")' }}></div>
            <div className='cursor-pointer w-27rem h-7rem bg-contain bg-no-repeat' style={{ backgroundImage: 'url("/images/featuredOn_03.png")' }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthContentContainer;
