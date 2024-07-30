import { Request, Response } from 'express';
import { get_bones_amount_service, post_donation_service } from '../services/donation_service';

/**
 * @swagger
 * tags:
 *   name: Donation
 *   description: Donation management
 */

/**
 * @swagger
 * /api/donation/bones_amount/{walletAddress}:
 *   get:
 *     summary: Get bones amount
 *     tags: [Donation]
 *     parameters:
 *       - in: path
 *         name: walletAddress
 *         schema:
 *           type: string
 *         required: true
 *         description: Wallet address of the user
 *     responses:
 *       200:
 *         description: Successfully retrieved bones amount
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bonesAmount:
 *                   type: number
 *       404:
 *         description: User not found
 */
export const get_bones_amount = async (req: Request, res: Response) => {
  try {
    await get_bones_amount_service(req, res);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * @swagger
 * /api/donation/donation:
 *   post:
 *     summary: Make a donation
 *     tags: [Donation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               walletAddress:
 *                 type: string
 *               zenAmount:
 *                 type: number
 *               bonesAmount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successfully made a donation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bonesAmount:
 *                   type: number
 *       400:
 *         description: Missing required parameters
 *       500:
 *         description: Internal server error
 */
export const post_donation = async (req: Request, res: Response) => {
  try {
    await post_donation_service(req, res);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
