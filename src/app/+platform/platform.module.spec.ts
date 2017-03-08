import { PlatformModule } from './platform.module'

describe( 'PlatformModule', () => {
  let platformModule

  beforeEach(() => {
    platformModule = new PlatformModule()
  } )

  it( 'should create an instance', () => {
    expect( platformModule ).toBeTruthy()
  } )
} )
