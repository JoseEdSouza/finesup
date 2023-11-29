import { FixedTransaction } from "./models/FixedTransaction"
import { Transaction } from "./models/Transaction"

type Nullable<T> = T | null

type DecodedToken = {
    user_id: number,
    user_email: string,
    user_name: string,
    expiry: number
}

type TransactionType = Transaction | FixedTransaction
export type {Nullable,DecodedToken, TransactionType}