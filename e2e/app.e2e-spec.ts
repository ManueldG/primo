import { PrimoPage } from './app.po';

describe('primo App', function() {
  let page: PrimoPage;

  beforeEach(() => {
    page = new PrimoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
