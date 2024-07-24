import express, { Router } from 'express';
import { get_bones_amount } from '../controllers/donation_controller';

export const donation_route: Router = express.Router();

donation_route.get('/bones_amount', get_bones_amount);
