import { Request, Response } from 'express';
import { User } from '../entities/user_entity';

export const post_validate_bonesAmount_service = async (req: Request, res: Response) => {
  const { walletAddress } = req.body;

  try {
    const user = await User.findOne({ where: { walletAddress } });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        bonesAmount: '0',
      });
    }

    if (user.bonesAmount < '100') {
      return res.status(200).json({
        message: 'Minting not allowed. Bones amount is less than 100.',
        bonesAmount: user.bonesAmount,
      });
    } else if (user.bonesAmount < '200') {
      return res.status(200).json({
        message: 'Only 1 minting allowed. Bones amount is less than 200.',
        bonesAmount: user.bonesAmount,
      });
    } else {
      return res.status(200).json({
        message: '2 mintings allowed. Bones amount is 200 or more.',
        bonesAmount: user.bonesAmount,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const post_bonesAmount_update = async (req: Request, res: Response) => {
  const { walletAddress, bonesAmount } = req.body;

  try {
    const user = await User.findOne({ where: { walletAddress } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const currentBonesAmount = parseFloat(user.bonesAmount);
    const newBonesAmount = currentBonesAmount - parseFloat(bonesAmount);

    if (newBonesAmount < 0) {
      return res.status(400).json({ message: 'Insufficient bones amount' });
    }

    user.bonesAmount = newBonesAmount.toString();
    await user.save();

    return res.status(200).json({ bonesAmount: user.bonesAmount });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
