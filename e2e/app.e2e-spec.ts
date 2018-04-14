import {AppPage} from './app.po';

describe('news-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should show articles', () => {
    page.navigateTo();
    page.tryButton.click();
    page.submitButton.click();

    expect(page.articles.all.length).toBeLessThan(1);
  });
});