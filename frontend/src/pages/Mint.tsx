import React, { useState, useEffect } from 'react';
import Container from '../layouts/Container';
import Section from '../layouts/Section';
import { ethers, toBeHex } from 'ethers';
import { createRippleEffect } from '../utils/createRippleEffect';
import axios from 'axios';

type TimeLeft = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

const calculateTimeLeft = (): TimeLeft => {
  const difference = +new Date('2024-07-31T00:00:00') - +new Date();
  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const Mint = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [quantity, setQuantity] = useState<number>(1);
  const [mintAmount, _setMintAmount] = useState(130);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const totalAbleMintingAmount = 5000;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isTimeUp = !timeLeft.days && !timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds;

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 2) {
      setQuantity(quantity + 1);
    }
  };

  const handleClickMint = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    createRippleEffect(event);
  };

  const handleClickConnect = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    createRippleEffect(event);

    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
        const signer = await provider.getSigner();
        const walletAddress = await signer.getAddress();
        setAddress(walletAddress);

        const response = await axios.post('http://localhost:3000/api/auth/request-message', { walletAddress });
        const { message, nonce } = response.data;
        const signature = await signer.signMessage(message);

        console.log(signature);

        const loginResponse = await axios.post('http://localhost:3000/api/auth/login', { walletAddress, signature, nonce });
        const { token } = loginResponse.data;
        localStorage.setItem('token', token);

        const chainId = parseInt((await signer.provider.getNetwork()).chainId.toString());

        const eonChainId = 7332 || 1663;

        if (chainId !== eonChainId) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: toBeHex(eonChainId) }]
            });
          } catch (switchError: any) {
            if (switchError.code === 4902) {
              console.error('This network is not available in your MetaMask, please add it manually');
            } else {
              console.error(switchError);
            }
          }
        }

        const account = await provider.send('eth_requestAccounts', []);
        setIsConnected(true);
        console.log(walletAddress, 'add');
        console.log(chainId, 'id');
        console.log(account, 'acc');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleClickDisconnect = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    createRippleEffect(event);

    if (window.ethereum) {
      try {
        const result = await window.ethereum.request({
          method: 'wallet_revokePermissions',
          params: [
            {
              eth_accounts: {}
            }
          ]
        });
        setProvider(null);
        setIsConnected(false);
        console.log('Permissions revoked', result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Container>
        <Section>
          <div className='flex flex-col justify-center items-center w-full h-screen bg-orange-500 px-[8rem]'>
            <div className='flex justify-end w-100% py-3rem'>
              {!isConnected ? (
                <button className='text-white text-2rem px-8 py-2 bg-[#2e1e19] rounded-[4rem] relative overflow-hidden box-shadow-button' onClick={handleClickConnect}>
                  Connect Wallet
                </button>
              ) : (
                <button className='text-white text-2rem px-8 py-2 bg-[#2e1e19] rounded-[4rem] relative overflow-hidden box-shadow-button' onClick={handleClickDisconnect}>
                  Disconnect Wallet
                </button>
              )}
            </div>
            <p className='text-10rem text-#2e1e19'>
              Free Mint is <span className={`px-2 py-1 rounded text-7rem ${isTimeUp ? ' text-red' : ' text-green'}`}>{isTimeUp ? 'END' : 'Live'}</span>
            </p>
            <p className='mb-2 text-white text-3rem'>
              Mint end in: <span className='font-bold text-2rem text-red'>{`${timeLeft.days || 0}d: ${timeLeft.hours || 0}h: ${timeLeft.minutes || 0}m: ${timeLeft.seconds || 0}s`}</span>
            </p>
            <div className='w-full flex max-w-4xl bg-[#2e1e19] text-white rounded-[2rem] box-shadow-custom'>
              <div className='flex justify-center items-center bg-[#d69f7e] w-1/2 rounded-l-[2rem]'>
                <div className='bg-center bg-no-repeat bg-contain w-full h-60rem' style={{ backgroundImage: 'url("/images/28.svg")' }}></div>
              </div>
              <div className='flex flex-col justify-center items-center text-center w-1/2 pl-8 py-8'>
                <p className='text-5rem l:text-2.8rem p:text-2rem t:text-4vw text-orange mb-4rem mt-3.5rem'>PeFUD</p>
                <div className='flex items-center mb-10 w-80% justify-between'>
                  <button className='text-white px-4 py-2 text-4rem' onClick={handleDecrement}>
                    -
                  </button>
                  <input type='text' value={quantity} className='w-24 text-4rem text-center bg-transparent border-none outline-none text-white' readOnly />
                  <button className='text-white px-4 py-2 text-4rem' onClick={handleIncrement}>
                    +
                  </button>
                </div>

                <p className='text-2rem text-white px-2 py-1 rounded mb-3rem mt-3rem w-82% flexRow justify-end'>Max Mint Amount: 2</p>
                <div className='w-80% flexRow h-1.7rem mb-6.3rem bg-gray rounded-1.7rem relative'>
                  <div className='absolute bottom-[-3.3rem] right-[0.2rem] text-1.8rem text-white'>{`${mintAmount} / ${totalAbleMintingAmount}`}</div>
                  <div className='rounded-1.7rem absolute top-[0rem] left-[0rem] h-100% bg-orange' style={{ width: mintAmount >= 34 ? `${(mintAmount / totalAbleMintingAmount) * 100}%` : mintAmount == 0 ? `${(mintAmount / totalAbleMintingAmount) * 100}%` : `${(119 / totalAbleMintingAmount) * 100}%` }}></div>
                </div>
                <div className='mb-3.5rem w-80%'>
                  <p className='text-3rem text-white flex justify-between items-center border-t border-b pt-0.5rem pb-0.5rem border-white'>
                    Total <span className='font-bold text-2rem text-white'>0 ZEN + gas</span>
                  </p>
                </div>

                {isTimeUp ? (
                  <p className='text-red text-3rem font-bold'>Sold Out!</p>
                ) : (
                  <button className='text-white text-3rem px-8 py-2 border-0.1rem border-white rounded-[2rem] relative overflow-hidden w-80% mb-5rem' onClick={handleClickMint}>
                    Mint Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default Mint;
