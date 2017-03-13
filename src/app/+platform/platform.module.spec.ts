import { PlatformModule } from './platform.module'

describe('AdminModule', () => {
  let platformModule

  beforeEach(() => {
    platformModule = new PlatformModule()
  })

  it('should create an instance', () => {
    expect(platformModule).toBeTruthy()
  })
})
