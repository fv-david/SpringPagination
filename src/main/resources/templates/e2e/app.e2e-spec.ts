import { NgNewPage } from './app.po';

describe('ng-new App', () => {
  let page: NgNewPage;

  beforeEach(() => {
    page = new NgNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
