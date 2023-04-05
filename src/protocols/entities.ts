export type User = {
    name?: string,
    email: string,
    password: string
}

export type Error = {
    name: string,
    message: string,
    status: number
}