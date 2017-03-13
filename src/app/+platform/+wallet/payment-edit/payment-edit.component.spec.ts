import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletPaymentEditComponent } from './payment-edit.component';

describe('WalletPaymentEditComponent', () => {
  let component: WalletPaymentEditComponent;
  let fixture: ComponentFixture<WalletPaymentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletPaymentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletPaymentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
