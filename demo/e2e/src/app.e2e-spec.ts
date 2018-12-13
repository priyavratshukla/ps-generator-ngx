import { PsGeneratorNgxDemoPage } from './app.po';

describe('generator-ngx-library-demo App', () => {
  let page: PsGeneratorNgxDemoPage;

  beforeEach(() => {
    page = new PsGeneratorNgxDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
