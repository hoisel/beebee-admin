/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { SidebarLeftComponent } from './sidebar-left.component'

describe('SidebarLeftComponent', () => {
  let component: SidebarLeftComponent
  let fixture: ComponentFixture<SidebarLeftComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarLeftComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLeftComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('empresa nome', () => {
    let compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('aside').textContent).toContain(component.empresa.nome)
    expect(compiled.querySelector('aside').textContent).toContain(component.empresa.cnpj)
  })
})
