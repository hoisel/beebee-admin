import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RequestFreightComponent } from './request-freight.component'

describe( 'RequestComponent', () => {
  let component: RequestFreightComponent
  let fixture: ComponentFixture<RequestFreightComponent>

  beforeEach( async(() => {
    TestBed.configureTestingModule( {
      declarations: [ RequestFreightComponent ]
    })
      .compileComponents()
  }) )

  beforeEach(() => {
    fixture = TestBed.createComponent( RequestFreightComponent )
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it( 'should create', () => {
    expect( component ).toBeTruthy()
  })
})
