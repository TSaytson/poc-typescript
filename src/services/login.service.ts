import { errors } from "../errors/errors.js";
import { User } from "../protocols/user.js";
import { loginRepository } from '../repositories/login.repository.js'

async function signUp(
    { name, email, password } : User) {
    const { rowCount: userFound } =
        await loginRepository.findByEmail(email);

    if (userFound)
        throw errors.emailConflict();

    await loginRepository.
        insertUser({ name, email, password });
}

export const loginService = {
    signUp
}