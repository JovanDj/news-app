import { AppPage } from './app.po';

describe('news-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('News App Search for news from various sources');
  });
});
