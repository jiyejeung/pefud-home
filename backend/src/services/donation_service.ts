import { Request, Response } from 'express';
import { User } from '../entities/user_entity';
import { AppDataSource } from '../database/db';

export const get_bones_amount_service = async (req: Request, res: Response) => {
  const { walletAddress } = req.params;

  try {
    const user = await User.findOne({ where: { walletAddress } });

    if (user) {
      return res.status(200).json({ bonesAmount: user.bonesAmount });
    }

    return res.status(404).json({ bonesAmount: '0', message: 'User not found' });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const post_donation_service = async (req: Request, res: Response) => {
  const { walletAddress, zenAmount, bonesAmount } = req.body;

  if (!walletAddress || !zenAmount || !bonesAmount) {
    return res.status(400).json({ message: 'Missing required parameters' });
  }

  try {
    const userRepository = AppDataSource.getRepository(User);
    let user = await userRepository.findOneBy({ walletAddress });

    if (user) {
      // 기존 유저의 경우 업데이트
      user.zenAmount += parseFloat(zenAmount);
      user.bonesAmount += parseFloat(bonesAmount);
    } else {
      // 신규 유저의 경우 생성
      user = new User();
      user.walletAddress = walletAddress;
      user.zenAmount = zenAmount;
      user.bonesAmount = bonesAmount;
    }
    await userRepository.save(user);

    return res.status(200).json({ bonesAmount: user.bonesAmount });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
