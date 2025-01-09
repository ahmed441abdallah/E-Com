import express from 'express';
import { addProduct, getAllProducts } from '../modules/product/productsController.js';
const router = express.Router();
router.get('/', getAllProducts);
router.post('/', addProduct);
export default router;