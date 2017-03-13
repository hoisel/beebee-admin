import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ReceiptEditComponent } from './receipt-edit.component'

describe( 'ReceiptEditComponent', () => {
  let component: ReceiptEditComponent
  let fixture: ComponentFixture<ReceiptEditComponent>

  beforeEach( async(() => {
    TestBed.configureTestingModule( {
      declarations: [ ReceiptEditComponent ]
    })
      .compileComponents()
  }) )

  beforeEach(() => {
    fixture = TestBed.createComponent( ReceiptEditComponent )
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it( 'should create', () => {
    expect( component ).toBeTruthy()
  })
})
