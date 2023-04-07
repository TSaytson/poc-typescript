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

export type Product = {
    name: string,
    validity: Date,
    amount: number,
    price: number
}