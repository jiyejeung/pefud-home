import { Request, Response } from 'express';
import { requestMessageService, loginService } from '../services/auth_service';

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication management
 */

/**
 * @swagger
 * /api/auth/request-message:
 *   post:
 *     summary: Request a message to sign
 *     tags: [Auth]
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
 *         description: Successfully retrieved message and nonce
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 nonce:
 *                   type: string
 */
export const request_message = async (req: Request, res: Response) => {
  try {
    const { walletAddress } = req.body;
    const response = await requestMessageService(walletAddress);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login with wallet address and signature
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               walletAddress:
 *                 type: string
 *               signature:
 *                 type: string
 *               nonce:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid signature or nonce
 */
export const login = async (req: Request, res: Response) => {
  try {
    const { walletAddress, signature, nonce } = req.body;
    const response = await loginService(walletAddress, signature, nonce);
    res.json(response);
  } catch (error: any) {
    console.error(error);
    res.status(401).json({ error: error.message });
  }
};
