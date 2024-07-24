import { Request, Response } from 'express';
import { get_bones_amount_service } from '../services/donation_service';

export const get_bones_amount = async (req: Request, res: Response) => {
  try {
    const result = await get_bones_amount_service(req, res);

    res.status(200).json(result);
  } catch (err: any) {
    res.status(401);

    console.log(err);
  }
};
