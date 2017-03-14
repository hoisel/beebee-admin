import { Component, OnInit } from '@angular/core'

@Component( {
  templateUrl: './customer-service.component.html',
  styleUrls: [ './customer-service.component.css' ]
})
export class CustomerServiceComponent implements OnInit {

  public assunto: string = null
  public numeroPedido: string = null
  public mensagem: string = null
  public email: string = 'sac@beebee.com.br'
  public hotline: string = '0800 833 8331'

  /**
   *
   *
   *
   * @memberOf CustomerServiceComponent
   */
  public ngOnInit () {
    $( 'html, body' ).animate( { scrollTop: 0 }, 500 )
  }

  /**
   *
   *
   * @param {Event} e
   *
   * @memberOf CustomerServiceComponent
   */
  public submit ( e: Event ): void {
    e.preventDefault()
    console.log( this.assunto, this.numeroPedido, this.mensagem )
  }
}

