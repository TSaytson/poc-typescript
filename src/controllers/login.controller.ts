import { Request, Response } from 'express';
import { User } from '../protocols/user';
import { loginService } from '../services/login.service.js'

async function signUp(req: Request, res: Response) {
    const { name, email, password } =
        req.body as User;
    
    await loginService.
        signUp({ name, email, password });
    
    return res.status(201).send('User registred');
}

async function signIn(req: Request, res: Response) {
    
}

export const loginController = {
    signUp,
    signIn
}