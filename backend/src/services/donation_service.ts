import { Request, Response } from 'express';
import { User } from '../entities/user_entity';

export const get_bones_amount_service = async (req: Request, res: Response) => {
  const { walletAddress } = req.params;

  const user = await User.findOne({ where: { walletAddress } });

  if (user) {
    return user.bonesAmount;
  }

  return '0';
};
