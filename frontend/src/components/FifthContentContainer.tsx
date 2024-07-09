const FifthContentContainer = () => {
  return (
    <>
      <div className='w-100% flexRow px-4rem p:px-2.5rem t:px-1.5rem m:px-1rem'>
        <div className='max-w-128rem w-100% flexCol border border-white'>
          <div className='flexRow text-white font-bold text-5rem mt-10rem mb-2rem'>TOKENOMICS</div>
          <div className='w-100% flexCol'>
            <div className='w-100% flexRow justify-between pb-1rem'>
              <div className='text-2.5rem text-white font-bold'>Airdrop 90%</div>
              <div className='text-2.5rem text-white font-bold'>Donation 10%</div>
            </div>
            <div className='w-100% border-white border flexRow rounded-2.5rem justify-start bg-gray'>
              <div className='w-90% h-2.5rem rounded-2.5rem bg-coral'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthContentContainer;
