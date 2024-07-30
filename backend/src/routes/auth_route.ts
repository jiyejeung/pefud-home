import express, { Router } from 'express';
import { request_message, login } from '../controllers/auth_controller';

export const auth_route: Router = express.Router();

/**
 * @swagger
 * /api/auth/request-message:
 *   post:
 *     summary: Request a message to sign
 *     parameters:
 *       - in: body
 *         name: walletAddress
 *         schema:
 *           type: object
 *           required:
 *             - walletAddress
 *           properties:
 *             walletAddress:
 *               type: string
 *         required: true
 *         description: Wallet address of the user
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
auth_route.post('/request-message', request_message);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login with wallet address and signature
 *     parameters:
 *       - in: body
 *         name: login
 *         schema:
 *           type: object
 *           required:
 *             - walletAddress
 *             - signature
 *             - nonce
 *           properties:
 *             walletAddress:
 *               type: string
 *             signature:
 *               type: string
 *             nonce:
 *               type: string
 *         required: true
 *         description: Wallet address, signature, and nonce
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
auth_route.post('/login', login);
