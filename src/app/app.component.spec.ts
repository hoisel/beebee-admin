/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HeaderComponent } from './theme/header/header.component'

describe('App: BeebeePlataforma', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
    })
  })

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent)
    let app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

})
