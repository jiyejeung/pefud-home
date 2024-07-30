import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { generateTokens } from '../services/token_service';

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;

// 키가 설정되지 않았을 경우 오류 발생
if (!SECRET_KEY || !REFRESH_SECRET_KEY) {
  throw new Error('JWT_SECRET_KEY or REFRESH_SECRET_KEY is not defined in the environment variables.');
}

// JWT token 검증
export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  const refreshToken = req.headers['x-refresh-token'] as string;

  // token 이 없을 경우 401
  if (token == null) return res.sendStatus(401);

  // JWT token 검증
  jwt.verify(token, SECRET_KEY, async (err, user) => {
    if (err) {
      // 토큰이 만료되고, 리프레시 토큰이 있는 경우
      if (err.name === 'TokenExpiredError' && refreshToken) {
        // 리프레시 토큰 검증
        jwt.verify(refreshToken, REFRESH_SECRET_KEY, async (refreshErr, refreshUser) => {
          // 리프레시 토큰 검증 실패 401
          if (refreshErr) return res.sendStatus(401);

          // 리프레시 토큰에서 walletAddress 추출
          const walletAddress = (refreshUser as JwtPayload).walletAddress;
          // 새 JWT token, refresh token 생성
          const newTokens = generateTokens(walletAddress);

          // 새로 생성된 토큰을 응답 헤더에 설정
          res.setHeader('x-access-token', newTokens.token);
          res.setHeader('x-refresh-token', newTokens.refreshToken);

          if (walletAddress === req.query.walletAddress) {
            next();
          } else {
            return res.sendStatus(403);
          }
        });
      } else {
        return res.sendStatus(403);
      }
    } else {
      const walletAddress = (user as JwtPayload).walletAddress;

      if (walletAddress === req.query.walletAddress) {
        next();
      } else {
        return res.sendStatus(403);
      }
    }
  });
};
