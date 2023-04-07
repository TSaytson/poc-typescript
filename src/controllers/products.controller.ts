import { Request, Response } from 'express';
import { productsService } from '../services/products.service.js'

async function getProducts(req: Request,
    res: Response) {
    
    const products =
        await productsService.getProducts();
    
    return res.status(200).send({ products });
}

async function registerProduct(req: Request,
    res: Response) {
    
}

async function updateProduct(req: Request,
    res: Response) {

}

async function deleteProduct(req: Request,
    res: Response) {

}

export const productsController = {
    getProducts,
    registerProduct,
    updateProduct,
    deleteProduct
}