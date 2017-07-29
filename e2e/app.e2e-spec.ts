import { TemplateDrivenFormDemoPage } from './app.po';

describe('template-driven-form-demo App', () => {
  let page: TemplateDrivenFormDemoPage;

  beforeEach(() => {
    page = new TemplateDrivenFormDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
