import z from 'zod';

export const productSchema = z.object({
    name: z.string().min(4),
    validity: z.date(),
    amount: z.number().positive(),
    price: z.number().positive()
})