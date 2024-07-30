import { Request, Response } from 'express';
import { post_validate_bonesAmount_service, post_bonesAmount_update } from '../services/minting_service';

/**
 * @swagger
 * tags:
 *   name: Minting
 *   description: Minting management
 */

/**
 * @swagger
 * /api/minting/validate:
 *   post:
 *     summary: Validate bones amount for minting
 *     tags: [Minting]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               walletAddress:
 *                 type: string
 *     responses:
 *       200:
 *         description: Validation result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 bonesAmount:
 *                   type: string
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
export const post_validate_bonesAmount = async (req: Request, res: Response) => {
  try {
    await post_validate_bonesAmount_service(req, res);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

/**
 * @swagger
 * /api/minting/update_bonesAmount:
 *   post:
 *     summary: Update bones amount
 *     tags: [Minting]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               walletAddress:
 *                 type: string
 *               bonesAmount:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated bones amount
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bonesAmount:
 *                   type: string
 *       404:
 *         description: User not found
 *       400:
 *         description: Insufficient bones amount
 *       500:
 *         description: Internal server error
 */
export const post_update_bonesAmount = async (req: Request, res: Response) => {
  try {
    await post_bonesAmount_update(req, res);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
