import { Router } from 'express';

export const productsRoutes = Router();

productsRoutes.post('/product');
productsRoutes.get('/products');