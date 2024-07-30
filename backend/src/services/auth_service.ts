import { ethers } from 'ethers';
import { AppDataSource } from '../database/db';
import { User } from '../entities/user_entity';
import dotenv from 'dotenv';
import { generateTokens } from '../services/token_service';

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error('JWT_SECRET_KEY is not defined in the environment variables.');
}

let nonceStore: { [walletAddress: string]: string } = {};

export const requestMessageService = async (walletAddress: string) => {
  const nonce = Math.floor(Math.random() * 1000000).toString();
  nonceStore[walletAddress] = nonce;
  const message = `Sign this message to login: ${walletAddress} with nonce: ${nonce}`;
  return { message, nonce };
};

export const loginService = async (walletAddress: string, signature: string, nonce: string) => {
  if (nonceStore[walletAddress] !== nonce) {
    throw new Error('Invalid nonce');
  }

  const message = `Sign this message to login: ${walletAddress} with nonce: ${nonce}`;
  const recoveredAddress = ethers.verifyMessage(message, signature);

  if (recoveredAddress.toLowerCase() === walletAddress.toLowerCase()) {
    const tokens = generateTokens(walletAddress);

    const userRepository = AppDataSource.getRepository(User);
    let user = await userRepository.findOneBy({ walletAddress });
    if (!user) {
      user = new User();
      user.walletAddress = walletAddress;
      await userRepository.save(user);
    }

    delete nonceStore[walletAddress];
    return tokens;
  } else {
    throw new Error('Invalid signature');
  }
};
