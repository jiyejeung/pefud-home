import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../stores/store';
import { checkInstalledMetaMask, eonChainNetWorkInfo, requestPermissionAddresses } from '../services';
import { setChainId, setPermissionAddresses, setWalletAddress } from '../stores/walletSlice';

type PropsType = {
  children: ReactNode;
  backgroundColor?: string;
  // ref?: React.RefObject<HTMLElement>;
};

const Header = ({ children, backgroundColor = '' }: PropsType) => {
  const { chainId, walletAddress, permissionAddresses } = useSelector((state: RootState) => state.wallet);
  const dispatch: AppDispatch = useDispatch();

  const init = async () => {
    if (window.ethereum) {
      const permissionAddresses = await window.ethereum.request({ method: 'eth_accounts' });
      const chainId = parseInt(await window.ethereum.request({ method: 'net_version' }));
      const walletAddress = permissionAddresses[0] ?? '';

      dispatch(setPermissionAddresses(permissionAddresses));
      dispatch(setWalletAddress(walletAddress));
      dispatch(setChainId(chainId));
    }
  };

  const handleClickConnectWallet = async () => {
    if (checkInstalledMetaMask() === true) {
      const { permissionAddresses, walletAddress, chainId } = await requestPermissionAddresses();

      dispatch(setPermissionAddresses(permissionAddresses));
      dispatch(setWalletAddress(walletAddress));
      dispatch(setChainId(chainId));
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

  const handleAccountsChanged = (accounts: string[]) => {
    if (accounts.length > 0) {
      const newAddress = accounts[0];

      dispatch(setWalletAddress(newAddress));
      dispatch(setPermissionAddresses(accounts));

      console.log('Account changed:', accounts);
    } else {
      dispatch(setWalletAddress(''));
      console.log('No accounts available');
    }
  };

  const handleChainChanged = (chainId: string) => {
    dispatch(setChainId(parseInt(chainId, 16)));
    console.log('Chain changed:', parseInt(chainId, 16));
  };

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
      <header className='w-100% flexRow px-4rem l:px-3rem p:px-2rem t:px-1rem m:px-2vw py-2rem l:py-1.5rem p:py-1rem t:py-0.5rem m:py-1vw border d:bg-red l:bg-coral p:bg-yellow t:bg-green m:bg-blue' style={{ backgroundColor }}>
        <nav className='max-w-145rem w-100% flexRow justify-between border border'>{children}</nav>
      </header>
    </>
  );
};

export default Header;
