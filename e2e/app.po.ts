export class StarWarsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('star-wars-app h1')).getText();
  }
}
