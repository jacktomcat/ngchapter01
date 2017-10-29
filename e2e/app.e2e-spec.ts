import { Ngchapter01Page } from './app.po';

describe('ngchapter01 App', function() {
  let page: Ngchapter01Page;

  beforeEach(() => {
    page = new Ngchapter01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
