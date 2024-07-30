import express, { Router } from 'express';
import { post_validate_bonesAmount, post_update_bonesAmount } from '../controllers/minting_controller';
import { get_bones_amount } from '../controllers/donation_controller';
import { authenticateToken } from '../middlewares/auth_middleware';

export const minting_route: Router = express.Router();

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
minting_route.post('/validate', authenticateToken, post_validate_bonesAmount);

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
minting_route.post('/update_bonesAmount', post_update_bonesAmount);

/**
 * @swagger
 * /api/minting/bones_amount:
 *   get:
 *     summary: Get bones amount
 *     tags: [Minting]
 *     parameters:
 *       - in: query
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
 *                   type: string
 *       404:
 *         description: User not found
 */
minting_route.get('/bones_amount', authenticateToken, get_bones_amount);
