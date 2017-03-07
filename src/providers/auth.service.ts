import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { BehaviorSubject } from 'rxjs'
import { IAuth, IAuthUser, TypeAuthKeys, TypeUser } from '../interfaces'
import { API_ENDPOINT, DEFAULT_HEADERS } from '../app/app.config'
import * as decode from 'jwt-decode'

@Injectable()
export class AuthService {

  private token$: BehaviorSubject<string> = new BehaviorSubject<string>(this.get(TypeAuthKeys.token))
  private loggedIn: boolean = !!this.get(TypeAuthKeys.token)

  // Url que tentou ser acessada sem sessão ativa
  redirectLogin: Array<string> = ['plataforma']

  constructor (private http: Http) {
    if (this.isLoggedIn) {
      this.token$.next(this.get(TypeAuthKeys.token))
    }
  }

  /**
   * Retorna se tem usuário logado ou não.
   */
  get isLoggedIn(): boolean { return this.loggedIn }

  /**
   * Retorna um subject com o token.
   * Não pode ser escrito, apenas lido!
   */
  get session(): BehaviorSubject<string> { return this.token$ }

  /**
   * Requisição de login para a api
   * @param username: string - nome de usuário
   * @param password: string - senha do usuário
   */
  login (cpf: string, password: string): Promise<boolean> {
    const body = { cpf: cpf, password: password }
    return this.http.post(`${API_ENDPOINT}/login`, body, { headers: DEFAULT_HEADERS })
      .map(res => res.json())
      .catch(err => {
        return Promise.reject(err)
      })
      .toPromise()
      .then((token: string) => {
        let user = decode(token)
        // Redireciona para o painel admin caso seja um
        if (user.tpUsuario === TypeUser.Administrator) {
          // TODO: Descomentar isso assim que for criado o painel adm
          // this.redirectLogin = ['admin']
        }
        // Sucesso na tentativa de login
        this.set(TypeAuthKeys.token, token)
        this.loggedIn = true
        return true
      })
  }

  /**
   * Destroi a sessão do usuário atual.
   */
  logout (): void {
    this.set(TypeAuthKeys.token, null)
    this.loggedIn = false
  }

  /**
   * Obtém um dado relativo à autenticação armazenado no navegador
   * @param key: TypeAuthKeys - Chave do dado que se quer
   */
  get (key: TypeAuthKeys): any {
    const auth: IAuth = JSON.parse(localStorage.getItem('auth'))
    if (!auth) { return null }

    switch (key) {
      case TypeAuthKeys.token:
        return auth.token
      case TypeAuthKeys.users:
        return auth.users
      default:
        return null
    }
  }

  /**
   * Armazena um dado, relativo à autenticação, no navegador
   * @param key: TypeAuthKeys - Chave do dado
   * @param data: string|IAuthUsers - Dado que se quer guardar (string para 'token' e IAuthUsers para 'users')
   */
  set (key: TypeAuthKeys, data: string | IAuthUser): void {
    let auth: IAuth = JSON.parse(localStorage.getItem('auth')) || { token: null, users: [] }

    switch (key) {
      case TypeAuthKeys.token:
        auth.token = data as string
        this.token$.next(auth.token)
        break
      case TypeAuthKeys.users:
        let has = false
        let index = -1

        auth.users.some((user, i) => {
          if (user.name === (data as IAuthUser).name && (data as IAuthUser).email === user.email) {
            has = true
            index = i
          }
          return has
        })

        if (has) {
          auth.users[index] = data as IAuthUser
        } else {
          auth.users.push(data as IAuthUser)
        }

        break
    }

    localStorage.setItem('auth', JSON.stringify(auth))
  }

}
