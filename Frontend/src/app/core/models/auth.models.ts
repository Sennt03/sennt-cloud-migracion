import { LsUser } from "./user.models"

export interface LsLogin{
    email: string,
    password: string
}

export interface LsResAuth{
    user: LsUser,
    token: string
}