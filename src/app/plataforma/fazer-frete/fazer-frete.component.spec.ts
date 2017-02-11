/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { FazerFreteComponent } from './fazer-frete.component'

describe('FazerFreteComponent', () => {
  let component: FazerFreteComponent
  let fixture: ComponentFixture<FazerFreteComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FazerFreteComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FazerFreteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
