import joi from 'joi';

export const productSchema = joi.object({
    name: joi.string().min(4),
    validity: joi.date(),
    amount: joi.number().positive(),
    price: joi.number().positive()
})