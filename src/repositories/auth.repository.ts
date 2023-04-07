import { QueryResult, QueryResultRow } from "pg";
import { Session } from "../protocols";
import { db } from "../config/database.js";

function createSession(
    userId: number, token: string):
    Promise<QueryResult<QueryResultRow>> {
    
    return db.query(`INSERT INTO sessions
    (user_id, token) VALUES ($1, $2);`,
        [userId, token]);
}

function findByUserId(userId: number):
Promise<QueryResult<Session>>    {

    return db.query(`SELECT * FROM sessions
    WHERE user_id=$1;`, [userId]);
}

export const authRepository = {
    createSession,
    findByUserId
}