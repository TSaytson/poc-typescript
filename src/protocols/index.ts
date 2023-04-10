export type AtLeast<T, K extends keyof T> =
    Partial<T> & Pick<T,K>

export type Session = {
    id: number,
    user_id: number,
    token: string
}

export interface IError extends Error {
    status: number
}
