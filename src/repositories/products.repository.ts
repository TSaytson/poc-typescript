import { db } from "../config/database.js";
import { Product } from '../protocols/entities.js'

function selectAllProducts() {
    return db.query(`SELECT * FROM products;`);
}

function insertProduct(
    { name, validity, amount, price }: Product) {
    
    return db.query(`INSERT INTO products 
    (name, validity, amount, price)
    VALUES ($1, $2, $3, $4);`,
        [name, validity, amount, price]);
    
}

function updateProduct(
    { name, validity, amount, price }: Product,
    productId:number) {
    
    return db.query(`UPDATE products 
    SET name=$1, validity=$2, amount=$3, price=$4
    WHERE id=$5;`,
        [name, validity, amount, price, productId]);
    
}
    
function deleteProduct(productId:number) {
    return db.query(`DELETE FROM products 
    WHERE id=$1;`, [productId]);
}

export const productsRepository = {
    selectAllProducts,
    insertProduct,
    updateProduct,
    deleteProduct
}