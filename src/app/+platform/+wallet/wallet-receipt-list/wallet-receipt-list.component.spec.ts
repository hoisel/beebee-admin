import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletReceiptListComponent } from './wallet-receipt-list.component';

describe('WalletReceiptListComponent', () => {
  let component: WalletReceiptListComponent;
  let fixture: ComponentFixture<WalletReceiptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletReceiptListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletReceiptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
