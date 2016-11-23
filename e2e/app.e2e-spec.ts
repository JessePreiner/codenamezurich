import { CodenamezurichPage } from './app.po';

describe('codenamezurich App', function() {
  let page: CodenamezurichPage;

  beforeEach(() => {
    page = new CodenamezurichPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
