import { AdminModule } from './admin.module'

describe( 'AdminModule', () => {
  let adminModule

  beforeEach(() => {
    adminModule = new AdminModule()
  } )

  it( 'should create an instance', () => {
    expect( adminModule ).toBeTruthy()
  } )
} )
