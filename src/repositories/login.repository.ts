import { db } from '../config/database.js'
import { User } from '../protocols/entities.js'

function insertUser(
    { name, email, password }: User) {
    return db.query(`INSERT INTO users 
    (name, email, password)
    VALUES ($1, $2, $3);`, [name, email, password])
}

function findByEmail(email: string) {
    return db.query(`SELECT * FROM users
    WHERE email=$1;`, [email])
}

export const loginRepository = {
    insertUser,
    findByEmail
}