import React, { useState, useEffect } from 'react';
import Container from '../layouts/Container';
import Section from '../layouts/Section';

type TimeLeft = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

const Mint = () => {
  // 목표 날짜와 시간 - 현재 날짜와 시간 계산으로 남은 시간을 밀리초 단위로 구한다.
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2024-07-31T00:00:00') - +new Date();
    let timeLeft: TimeLeft = {};

    // difference > 0 목표 날짜가 현재보다 미래에 있다는 뜻 남은 시간이 있을 경우
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    // 계산된 남은 시간을 반환
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [quantity, setQuantity] = useState<number>(1);
  const [mintAmount, _setMintAmount] = useState(130);
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

  const handleClickMint = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');

    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'ripple';

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const handleClickConnect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');

    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'ripple';

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <>
      <Container>
        <Section>
          <div className='flex flex-col justify-center items-center w-full h-screen bg-orange-500 px-[8rem]'>
            <div className='flex justify-end w-100% py-3rem'>
              <button className='text-white text-2rem px-8 py-2 bg-[#2e1e19] rounded-[4rem] relative overflow-hidden box-shadow-button' onClick={handleClickConnect}>
                Connect Wallet
              </button>
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