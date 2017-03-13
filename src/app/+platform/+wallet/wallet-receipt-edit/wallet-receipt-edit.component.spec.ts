import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletReceiptEditComponent } from './wallet-receipt-edit.component';

describe('WalletReceiptEditComponent', () => {
  let component: WalletReceiptEditComponent;
  let fixture: ComponentFixture<WalletReceiptEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletReceiptEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletReceiptEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
