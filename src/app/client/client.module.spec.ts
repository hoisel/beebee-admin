import { ClientModule } from './client.module'

describe( 'ClientModule', () => {
  let clientModule

  beforeEach(() => {
    clientModule = new ClientModule()
  } )

  it( 'should create an instance', () => {
    expect( clientModule ).toBeTruthy()
  } )
} )
