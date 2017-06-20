import { AngularPingPage } from './app.po';

describe('angular-ping App', () => {
  let page: AngularPingPage;

  beforeEach(() => {
    page = new AngularPingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
