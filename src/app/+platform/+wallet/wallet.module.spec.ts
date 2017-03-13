import WalletModule from './wallet.module';

describe('WalletModule', () => {
  let walletModule;

  beforeEach(() => {
    walletModule = new WalletModule();
  });

  it('should create an instance', () => {
    expect(walletModule).toBeTruthy();
  })
});
