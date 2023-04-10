import z from 'zod';

export const signUpSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(4),
    confirmPassword: z.string()
}).refine((data) =>
    data.password === data.confirmPassword, {
        message: "Senhas diferentes"
    });

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4)
});

export type User = Omit<z.infer<typeof signUpSchema >, "confirmPassword" >

export type UserEntity = User & {
    id: number
}

export type SUser = z.infer<typeof signInSchema>