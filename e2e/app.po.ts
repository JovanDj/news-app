import { browser, by, element, promise } from "protractor";

export class AppPage {
  tryButton = element(by.linkText("Try now!"));
  submitButton = element(by.id("submit"));
  articles = element(by.id("#articles"));
  topicInput = element(by.id("topic"));

  navigateTo(): promise.Promise<any> {
    return browser.get("/");
  }

  getHeadingText(): promise.Promise<string> {
    return element(by.css("app-root h1")).getText();
  }
}
