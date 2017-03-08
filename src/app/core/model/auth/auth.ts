import { IAuthUser } from './auth-user'

export interface IAuth {
  token: string
  users: IAuthUser[]
}
