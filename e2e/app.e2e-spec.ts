import { RecipesListPage } from './app.po';

describe('recipes-list App', () => {
  let page: RecipesListPage;

  beforeEach(() => {
    page = new RecipesListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
