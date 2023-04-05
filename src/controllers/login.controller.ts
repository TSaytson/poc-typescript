import { Request, Response } from 'express';
import { User } from '../protocols/entities.js';
import { loginService } from '../services/login.service.js'

async function signUp(req: Request, res: Response) {
    const { name, email, password } =
        req.body as User;
    
    await loginService.
        signUp({ name, email, password });
    
    return res.status(201).send('User registred');
}

async function signIn(req: Request, res: Response) {
    const { email, password } = req.body as User;

    const token = await loginService.
        signIn({ email, password });

    return res.status(200).
        send({message:'Login successful', token })
}

export const loginController = {
    signUp,
    signIn
}