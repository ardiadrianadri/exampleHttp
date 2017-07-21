import { HttpExamplePage } from './app.po';

describe('http-example App', () => {
  let page: HttpExamplePage;

  beforeEach(() => {
    page = new HttpExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
