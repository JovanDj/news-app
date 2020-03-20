import { browser, by, element } from "protractor";

export class AppPage {
  tryButton = element(by.linkText("Try now!"));
  submitButton = element(by.buttonText("Submit"));
  articles = element(by.css("articles#articles"));

  navigateTo() {
    return browser.get("/");
  }

  getHeadingText() {
    return element(by.css("app-root h1")).getText();
  }
}
