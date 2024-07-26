import { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../stores/store';
import { checkInstalledMetaMask, eonChainNetWorkInfo, requestBonePoints, requestPermissionAddresses } from '../services';
import { setBonePoints, setChainId, setPermissionAddresses, setWalletAddress } from '../stores/walletSlice';

type PropsType = {
  backgroundColor?: string;
  // ref?: React.RefObject<HTMLElement>;
};

const DonationHeader = ({ backgroundColor = '' }: PropsType) => {
  const { chainId, walletAddress, permissionAddresses, bonePoints } = useSelector((state: RootState) => state.wallet);
  const dispatch: AppDispatch = useDispatch();

  const [showLogout, setShowLogout] = useState(false);

  const init = async () => {
    if (window.ethereum) {
      const permissionAddresses = await window.ethereum.request({ method: 'eth_accounts' });
      const chainId = parseInt(await window.ethereum.request({ method: 'net_version' }));
      const walletAddress = permissionAddresses[0] ?? '';
      const { bonePoints } = await requestBonePoints(walletAddress);

      dispatch(setPermissionAddresses(permissionAddresses));
      dispatch(setWalletAddress(walletAddress));
      dispatch(setChainId(chainId));
      dispatch(setBonePoints(bonePoints));
    }
  };

  const handleClickConnectWallet = async () => {
    if (checkInstalledMetaMask() === true) {
      const { permissionAddresses, walletAddress, chainId } = await requestPermissionAddresses();

      const { bonePoints } = await requestBonePoints(walletAddress);

      dispatch(setPermissionAddresses(permissionAddresses));
      dispatch(setWalletAddress(walletAddress));
      dispatch(setChainId(chainId));
      dispatch(setBonePoints(bonePoints));
    } else {
      window.open('https://metamask.io/download.html', '_blank');
    }
  };

  const handleClickDisconnectWallet = async () => {
    await window.ethereum.request({ method: 'wallet_revokePermissions', params: [{ eth_accounts: {} }] });
  };

  const handleClickConnectEonNetwork = async () => {
    await window.ethereum.request({ method: 'wallet_addEthereumChain', params: [eonChainNetWorkInfo] });
  };

  const handleAccountsChanged = async (accounts: string[]) => {
    if (accounts.length > 0) {
      const newAddress = accounts[0];

      const { bonePoints } = await requestBonePoints(newAddress);

      dispatch(setWalletAddress(newAddress));
      dispatch(setPermissionAddresses(accounts));
      dispatch(setBonePoints(bonePoints));

      console.log('Account changed:', accounts);
    } else {
      dispatch(setWalletAddress(''));
      dispatch(setPermissionAddresses([]));
      dispatch(setBonePoints('0'));
      dispatch(setChainId(-1));
      console.log('No accounts available');
    }
  };

  const handleChainChanged = (chainId: string) => {
    dispatch(setChainId(parseInt(chainId, 16)));
    console.log('Chain changed:', parseInt(chainId, 16));
  };

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (checkInstalledMetaMask() === true) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      return () => {
        if (window.ethereum) {
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
          window.ethereum.removeListener('chainChanged', handleChainChanged);
        }
      };
    }
  }, [dispatch]);

  /*
      m : { max: '480px' },
      t : { min: '481px', max: '767px' },
      p : { min: '768px', max: '1024px' },
      l : { min: '1025px', max: '1280px' },
      d : { min: '1280px' },
  */

  return (
    <>
      <header className={`w-100% flexRow px-[4rem] l:px-[3rem] p:px-[2rem] t:px-[2vw] backdrop-blur-sm d:bg-transparent l:bg-coral p:bg-yellow t:bg-green fixed transition-all-300 z-200 ${scrolled ? 'py-[0.7rem] l:py-[0.5rem] p:py-[0.3rem] t:py-[0.5vw]' : 'py-[1.5rem] l:py-[1rem] p:py-[0.7rem] t:py-[1vw]'}`} style={{ backgroundColor }}>
        <nav className='max-w-[120rem] w-100% rounded-[1rem] py-[1.5rem] px-[2rem] flexRow justify-between border bg-white'>
          <div className='flexCol items-start'>
            <div className='text-[3rem] leading-[3rem] pb-[0.5rem] text-red font-oswald font-[800] [text-shadow:0px_4px_4px_#000000] [-webkit-text-stroke:1.5px_#000000]'>DONATE</div>
            <div className='text-[1.5rem] leading-[1.8rem] pl-[0.1rem] font-impact font-[800]'>for PeFUD</div>
          </div>
          <div className='flexRow'>
            <button className='h-[4.5rem] text-[2rem] leading-[2rem] pt-[0rem] font-impact font-[800] border rounded-[0.8rem] px-[2rem] cursor-pointer' onClick={handleClickConnectWallet}>
              Connect Wallet
            </button>
            <button className='h-[4.5rem] border rounded-[0.8rem] px-[2rem] flexRow overflow-hidden cursor-pointer' onClick={handleClickConnectEonNetwork}>
              <div className='rounded-50% mb-[0.1rem] w-[2rem] h-[2rem] mr-[1.2rem] bg-red mt-[0.1rem] animate-[light_1s_ease-out_infinite]'></div>
              <div className='text-[2rem] leading-[2rem] pt-[0rem] font-impact font-[800]'>Switch EON Network</div>
            </button>
            <div className='h-[4.5rem] border rounded-[0.8rem] flexRow overflow-hidden pr-[2rem] pl-[1rem] mr-[2rem]'>
              <div className=' w-[4rem] h-[4rem] bg-center bg-no-repeat bg-contain mr-[0.6rem] mt-[0rem]' style={{ backgroundImage: 'url("/images/bone.png")' }}></div>
              <div className='text-[2rem] leading-[2rem] pt-[0rem] mr-[0.5rem] font-impact font-[800]'>Bone Points:</div>
              <div className='text-[2rem] leading-[2rem] pt-[0rem] font-impact font-[800]'>0</div>
            </div>
            {/* <div className='w-[5rem] h-[4.5rem] pl-[0.1rem] flexRow rounded-[0.8rem] relative border cursor-pointer'>
              <div className='w-[2.5rem] h-[2.5rem] bg-center bg-contain bg-no-repeat' style={{ backgroundImage: 'url("/images/hamburger.png")' }}></div>
              <div className='pt-[0.2rem] absolute bottom-[-4.9rem] right-[0rem] h-[4.5rem] w-[27.7rem]  border text-[2rem] leading-[2rem] font-[800] font-impact rounded-[0.8rem] flexRow pb-[0rem] bg-white'>Disconnect Wallet</div>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default DonationHeader;
