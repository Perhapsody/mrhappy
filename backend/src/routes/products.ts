import express from 'express';
import { fetchProductData } from '../services/erpService.js';

const router = express.Router();

router.get('/', async (_, res) => {
  const products = await fetchProductData();
  res.json(products);
});

export default router;
