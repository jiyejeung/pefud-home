import express, { Router } from 'express';
import { get_bones_amount, post_donation } from '../controllers/donation_controller';
import { authenticateToken } from '../middlewares/auth_middleware';

export const donation_route: Router = express.Router();

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
donation_route.get('/bones_amount', authenticateToken, get_bones_amount);

/**
 * @swagger
 * /api/donation/donation:
 *   post:
 *     summary: Make a donation
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
donation_route.post('/donation', authenticateToken, post_donation);
