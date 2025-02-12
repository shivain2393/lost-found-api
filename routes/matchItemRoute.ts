import { Router } from 'express';
import { getMatchingItems } from '../controllers/matchItemsController.ts';

const router = Router();

router.get("/", getMatchingItems);

export default router;