export interface IAuthUser {
    name: string
    email: string
}

export interface IAuth {
    token: string
    users: Array<IAuthUser>
}

export enum TypeAuthKeys {
    token,
    users
}
