import z from 'zod';

export const productSchema = z.object({
    name: z.string().min(4),
    validity: z.string().transform((dateString, ctx) => {
        const date = new Date(dateString);
        const { success } = z.date().safeParse(date)
        if (dateString.length !== 10 || !success) {
            ctx.addIssue({
                code: z.ZodIssueCode.invalid_date,
                message: 'Invalid date'
            })
        }
        return date;
    }),
    amount: z.number().positive(),
    price: z.number().positive()
})

export type Product = z.infer<typeof productSchema>

export type ProductEntity = Product & {
    id:number
}