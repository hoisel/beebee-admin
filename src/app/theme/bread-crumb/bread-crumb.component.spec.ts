/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { BreadCrumbComponent } from './bread-crumb.component'

describe('BreadCrumbComponent', () => {
  let component: BreadCrumbComponent
  let fixture: ComponentFixture<BreadCrumbComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadCrumbComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrumbComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
