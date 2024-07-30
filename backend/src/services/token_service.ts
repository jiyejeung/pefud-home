import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;

if (!SECRET_KEY || !REFRESH_SECRET_KEY) {
  throw new Error('JWT_SECRET_KEY or REFRESH_SECRET_KEY is not defined in the environment variables.');
}

export const generateTokens = (walletAddress: string) => {
  const token = jwt.sign({ walletAddress }, SECRET_KEY, { expiresIn: '1h' });
  const refreshToken = jwt.sign({ walletAddress }, REFRESH_SECRET_KEY, { expiresIn: '7d' });
  return { token, refreshToken };
};
