import { Amindunited.Github.IoPage } from './app.po';

describe('amindunited.github.io App', () => {
  let page: Amindunited.Github.IoPage;

  beforeEach(() => {
    page = new Amindunited.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
