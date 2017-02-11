import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http'
import { Observable, Subject } from 'rxjs'
import { TypeUser, IMenus, IUser } from '../interfaces'
import { AuthService } from './auth.service'
import { API_ENDPOINT, DEFAULT_HEADERS } from '../app/app.config'

let isOnline = true
window.addEventListener('offline', () => isOnline = false)
window.addEventListener('online', () => isOnline = true)

@Injectable()
export class ApiService {

  private header: Headers = DEFAULT_HEADERS
  private apiPrefix: string = 'api/v1'

  constructor(private http: Http, private auth: AuthService) {
    this.auth.session
      .subscribe(token => {
        if (token) {
          this.header.set('Authorization', token)
        }
      })
  }

  /**
   * Requisição dos menus da sidebar que são dinâmicos (A mesma sidebar para plataforma e admin).
   */
  menus(type: TypeUser): Observable<IMenus> {
    let from: string
    switch (type) {
      case TypeUser.Administrator:
        from = 'admin'
        break
      default:
        from = 'plataforma'
        break
    }
    let url = `mocks/menu/${from}.json`

    const request$ = this.http.get(url, this.header).map(this.toJson)

    // Tratamento de erro
    let subscription = request$.subscribe(() => {
      subscription.unsubscribe()
    }, this.handlerError)

    return request$
  }

  /**
   * Chamada de api para atualizar senha do usuário
   * @param id {string} - Id do usuário
   * @param atualPassword {string} - Senha atual do usuário
   * @param newPassword {string} - Nova senha do usuário
   * @return {Observable<IUser>} - Observable com os dados do usuário exceto a senha
   */
  updatePassword(id: string, atualPassword: string, newPassword: string): Observable<IUser> {
    const body = {
      password: atualPassword,
      newPassword: newPassword
    }

    const observeable: Observable<IUser> = this.http.put(this.normalizeUri(`/users/${id}`), body, { headers: this.header })
      .catch(this.handlerError)
      .map(this.toJson)

    let sub = observeable.subscribe(user => {

      this.auth.logout()
      this.auth.login(user.email, newPassword)

      sub.unsubscribe()
    })

    return observeable
  }

  /**
   * Chamada de api para atualizar perfil do usuário
   * @param id {string} - Id do usuário
   * @param password {string} - Senha do usuário para fazer logout e login após atualizar
   * @param updateObj {name?: string, telephone?: string, email?: string} - Objeto com as keys que irão ser atualizadas
   * @return {Observable<IUser>} - Observable com os novos dados do usuário exceto a senha
   */
  updateProfile(id: string, password: string, updateObj: { name?: string, telephone?: string, email?: string }): Observable<IUser> {
    const body = {
      name: updateObj.name,
      email: updateObj.email,
      telephone: updateObj.telephone
    }

    const subject: Subject<IUser> = new Subject<IUser>()

    const observeable: Observable<IUser> = this.http.put(this.normalizeUri(`/users/${id}`), body, { headers: this.header })
      .catch(this.handlerError)
      .map(this.toJson)

    let sub = observeable.subscribe(user => {
      this.auth.logout()
      this.auth.login(user.email, password)
        .then(() => {
          subject.next(user)
          subject.complete()
        })
        .catch(() => {
          subject.error({
            error: 'Senha inválida!'
          })
          subject.complete()
        })
      sub.unsubscribe()
    }, err => {
      subject.error(err)
      subject.complete()
    })

    return subject.asObservable()
  }

  /**
   * Normaliza uma url de requisição para api
   *  ex: /users/login => /api/v1/users/login
   * @param url: string - Rota da api para fazer a requisição
   */
  private normalizeUri(url: string): string {
    // Normalizando url sem '/'
    url = url[0] === '/' ? url.substr(1) : url
    // Transformando prefixo e url em array
    let _prefix: Array<string> = (this.apiPrefix[0] === '/' ? this.apiPrefix.substr(1) : this.apiPrefix).split('/')
    let _url: Array<string> = url.split('/')
    // Retornando array para string formatando como path válido de api
    return API_ENDPOINT + (!_prefix.join('/').length ? '' : '/' + _prefix.join('/')) + '/' + _url.join('/')
  }

  /**
   * Pega o json que a api respondeu e transforma em um objeto javascript válido
   * @param res: Response - Resposta do servidor
   */
  private toJson(res: Response): any {
    return res.json()
  }

  /**
   * Tratamento de erro retornado pela api
   * @param err: Error - Erro retornado pela api
   */
  private handlerError(err: Response) {
    const body = err.json()

    if (!isOnline) {
      return Promise.reject({ error: 'Você está offline! Por favor inicie uma conexão com a internet.' })
    }

    if (body.error) {
      switch (body.error.statusCode || body.error.status) {
        case 401:
          this.auth.logout()
          window.location.reload(true)
          break
        default:
          break
      }
    }
    return Promise.reject(body)
  }

}
