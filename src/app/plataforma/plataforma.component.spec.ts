/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { PlataformaComponent } from './plataforma.component'

describe('PlataformaComponent', () => {
  let component: PlataformaComponent
  let fixture: ComponentFixture<PlataformaComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlataformaComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataformaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
