import { FibPage } from './app.po';

describe('fib App', function() {
  let page: FibPage;

  beforeEach(() => {
    page = new FibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
