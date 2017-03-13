import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletSummaryComponent } from './wallet-summary.component';

describe('WalletSummaryComponent', () => {
  let component: WalletSummaryComponent;
  let fixture: ComponentFixture<WalletSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
