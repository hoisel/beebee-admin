import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProvideFreightComponent } from './provide-freight.component'

describe( 'ProvideComponent', () => {
  let component: ProvideFreightComponent
  let fixture: ComponentFixture<ProvideFreightComponent>

  beforeEach( async(() => {
    TestBed.configureTestingModule( {
      declarations: [ ProvideFreightComponent ]
    })
      .compileComponents()
  }) )

  beforeEach(() => {
    fixture = TestBed.createComponent( ProvideFreightComponent )
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it( 'should create', () => {
    expect( component ).toBeTruthy()
  })
})
