const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');
const assert = require('assert');
const { CREDENTIALS } = require('../data/constants');
const CommonMethods = require('../pages/CommonMethods');

describe('Login Feature', () => {
  let loginPage;
  let homePage;
  let commonMethods;

  // Before all tests
  before(async () => {
    // Initialize the pages
    loginPage = new LoginPage();
    homePage = new HomePage();
    commonMethods = new CommonMethods();

    // Create the execution report
    await commonMethods.createExecutionReport();
  });

  // Test case: User can log in with valid credentials
  it('User can log in with valid credentials', async function () {
    // Open the menu and select the login option
    await loginPage.clickMenuButton();
    await loginPage.clickLoginOption();

    // Log in with valid credentials
    await loginPage.login(CREDENTIALS.VALID_USERNAME, CREDENTIALS.VALID_PASSWORD);

    // Use assert for the verification
    const isGreetingVisible = await homePage.isSuccessfulLoginGreetingVisible();
    assert.strictEqual(isGreetingVisible, false, 'The element is not present or visible');
  });

  // After all tests
  after(async () => {
    // Remove the execution report
    await commonMethods.removeExecutionReport();
  });
});
