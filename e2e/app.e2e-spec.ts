import { BeebeePlataformaPage } from './app.po'

describe('beebee-plataforma App', function () {
  let page: BeebeePlataformaPage

  beforeEach(() => {
    page = new BeebeePlataformaPage()
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('app works!')
  })
})
