import { AppPage } from "./app.po";

describe("news-app App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should show articles", () => {
    page.navigateTo();
    page.tryButton.click();
    page.topicInput.sendKeys("angular");

    expect(page.articles.all.length).toBeGreaterThanOrEqual(1);
  });
});
