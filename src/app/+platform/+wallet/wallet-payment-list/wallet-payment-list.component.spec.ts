import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WalletPaymentListComponent } from './wallet-payment-list.component'

describe('WalletPaymentListComponent', () => {
  let component: WalletPaymentListComponent
  let fixture: ComponentFixture<WalletPaymentListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletPaymentListComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletPaymentListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
