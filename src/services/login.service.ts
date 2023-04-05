import { loginErrors } from "../errors/login.errors.js";
import { User } from "../protocols/entities.js";
import { loginRepository } from '../repositories/login.repository.js'
import { authRepository } from "../repositories/auth.repository.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function signUp(
    { name, email, password }: User) {

    const { rowCount: userFound } =
        await loginRepository.findByEmail(email);

    if (userFound)
        throw loginErrors.emailConflict();

    const hash = await bcrypt.hash(password, 10);

    await loginRepository.
        insertUser({ name, email, password: hash });
}

async function signIn({ email, password }: User) {
    const { rows: [user] } =
        await loginRepository.findByEmail(email);

    if (!user)
        throw loginErrors.unprocessableEntity();

    if (user && bcrypt.
        compareSync(password, user.password)) {
        
        const { rows: [session] } =
            await authRepository.
                findByUserId(user.id);
        
        if (session)
            return session.token;
        
        const token = jwt.sign({
            id: user.id,
            email: user.email
        }, process.env.SECRET_JWT || 'secret');

        await authRepository.
            createSession(user.id, token);
        
        return token;
    } else {
        throw loginErrors.unprocessableEntity();
    }
}


export const loginService = {
    signUp,
    signIn
}