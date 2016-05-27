export class Am2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('am2-app h1')).getText();
  }
}
