import { Am2Page } from './app.po';

describe('am2 App', function() {
  let page: Am2Page;

  beforeEach(() => {
    page = new Am2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('am2 works!');
  });
});
