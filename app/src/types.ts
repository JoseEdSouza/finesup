type Nullable<T> = T | null

type DecodedToken = {
    user_id: number,
    user_email: string,
    user_name: string,
    expiry: number
}

export type {Nullable,DecodedToken}