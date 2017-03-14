import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProfileSwitcherComponent } from './profile-switcher.component'

describe( 'ProfileSwitcherComponent', () => {
  let component: ProfileSwitcherComponent
  let fixture: ComponentFixture<ProfileSwitcherComponent>

  beforeEach( async(() => {
    TestBed.configureTestingModule( {
      declarations: [ ProfileSwitcherComponent ]
    })
      .compileComponents()
  }) )

  beforeEach(() => {
    fixture = TestBed.createComponent( ProfileSwitcherComponent )
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it( 'should create', () => {
    expect( component ).toBeTruthy()
  })
})
