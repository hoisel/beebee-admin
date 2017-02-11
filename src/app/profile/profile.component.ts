import { Component, OnInit } from '@angular/core'
import { ProgressService, ApiService, UserService } from '../../providers'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string = this.user.name
  cpf: string = this.user.numDocFed
  cel: string = this.user.telephone
  email: string = this.user.email
  password: string = null
  atualPass: string = null
  newPass: string = null
  repeatPass: string = null
  alert: { [key: string]: { class: string, text: string } } = {
    'password': { class: null, text: null },
    'profile': { class: null, text: null },
    'notificacoes': { class: null, text: null }
  }

  constructor(private user: UserService, private api: ApiService, private progress: ProgressService) { }

  ngOnInit() {
  }

  /**
   * Função para atualizar senha
   * Executada ao submit do formulário de atualização de senha
   * @param e: {Event} - Evento do formulário
   */
  updatePassword(e: Event): void {
    e.preventDefault()
    if (!this.validatePassword()) { return }
    this.progress.start()
    const observableReq = this.api.updatePassword(this.user.id, this.atualPass, this.newPass)
    let sub = observableReq
      .subscribe(user => {
        this.alert['password'].class = 'alert alert-success'
        this.alert['password'].text = 'Senha atualizada com sucesso!'
      }, err => {
        this.alert['password'].class = 'alert alert-danger'
        this.alert['password'].text = err.error || err.message || 'Ocorreu um erro inesperado! Por favor tente novamente mais tarde.'
      })
    sub.add(() => {
      this.progress.finish()
      sub.unsubscribe()
    })
  }

  /**
   * Função para informações do perfil
   * Executada ao submit do formulário do perfil
   * @param e: {Event} - Evento do formulário
   */
  updateProfile(e: Event): void {
    e.preventDefault()

    if (!this.validateProfile()) { return }

    // Para atualizar o perfil precisa confirmar a senha
    if (!this.password) {
      $('#modalPassword').modal('show')
      return
    }

    this.progress.start()
    const observableReq = this.api.updateProfile(this.user.id, this.password, {
      name: this.name,
      telephone: this.cel,
      email: this.email
    })

    let sub = observableReq.subscribe(user => {
      this.alert['profile'].class = 'alert alert-success'
      this.alert['profile'].text = 'Dados alterados com sucesso!'
    }, err => {
      this.alert['profile'].class = 'alert alert-danger'
      this.alert['profile'].text = err.error || err.message || 'Ocorreu um erro inesperado! Por favor tente novamente mais tarde.'
    })

    sub.add(() => {
      this.progress.finish()
      sub.unsubscribe()
      this.password = null
    })
  }

  /**
   * Limpar o alerta das caixas de atualizações
   */
  clearAlert(from: string): void {
    this.alert[from] = { class: null, text: null }
  }

  /**
   * Função para preferências de notificações
   * Executada ao submit do formulário de preferências de notificações
   * @param e: {Event} - Evento do formulário
   */
  notificacoes(e: Event): void {
    e.preventDefault()
    this.clearAlert('notificacoes')
    this.progress.start()
    setTimeout(() => {
      this.alert['notificacoes'].text = 'Alterado com sucesso!'
      this.alert['notificacoes'].class = 'alert alert-success'
      this.progress.finish()
    }, 1000)
  }

  /**
   * Validar a atualização de senha
   * @return {boolean} - Se os dados para atualizar senha estão válidos
   */
  private validatePassword(): boolean {
    const isValid = this.newPass === this.repeatPass
    if (!isValid) {
      this.alert['password'].class = 'alert alert-danger'
      this.alert['password'].text = 'Você digitou a repetição da senha diferênte.'
    } else {
      this.clearAlert('password')
    }
    return isValid
  }

  /**
   * Validar a atualização dos dados de perfil do usuário
   * @return {boolean} - Se os dados para atualizar senha estão válidos
   */
  private validateProfile(): boolean {
    if (!this.name && !this.cel && !this.email) {
      this.alert['profile'].class = 'alert alert-danger'
      this.alert['profile'].text = 'Por favor insira os dados a serem atualizados!'
      return false
    }
    if (this.name === this.user.name && this.cel === this.user.telephone && this.email === this.user.email) {
      this.alert['profile'].class = 'alert alert-warning'
      this.alert['profile'].text = 'Nenhum dado é diferente do atual para atualizar.'
      return false
    }
    this.clearAlert('profile')
    return true
  }

}
