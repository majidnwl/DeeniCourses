import { Dc2Page } from './app.po';

describe('dc2 App', function() {
  let page: Dc2Page;

  beforeEach(() => {
    page = new Dc2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
