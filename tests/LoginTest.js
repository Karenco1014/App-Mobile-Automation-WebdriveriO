
const CommonMethods = require('../pages/CommonMethods');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CREDENTIALS, APP } = require('../data/constants');

let page;
let loginPage;
let homePage;

describe('Mobile Automation Test', function () {
  this.timeout(60000); // Increase the test timeout to 60 seconds

  before(async function () {
    await CommonMethods.removePreviousReports();
    await CommonMethods.createReportFolders('android-test');
    // Wait for the page to load
    await page.waitUntil(async () => (await page.getTitle()) !== '');

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
  });

  beforeEach(async function () {
    await CommonMethods.appendTestToTrackTxt(this.currentTest.title);
  });

  afterEach(async function () {
    // Close the WebDriverIO browser session
    if (page) {
      await page.close();
    }
  });

  it('User can login with valid credentials', async function () {
    await loginPage.clickMenuButton();
    await LoginPage.LoginOption();
    await loginPage.login(CREDENTIALS.VALID_USERNAME, CREDENTIALS.VALID_PASSWORD);
    expect(await homePage.validateSuccessfulLoginGreeting()).to.be.true;
  });
});
