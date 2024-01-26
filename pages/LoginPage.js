class LoginPage {
    constructor() {
      this.UsernameInput = '[content-desc="Username input field"]';
      this.PasswordInput = '[content-desc="Password input field"]';
      this.LoginButton = '[content-desc="Login button"]';
      this.MenuButton = "~open menu";
      this.LoginOption = "//*[@text='Log In']";
    }
  
    async enterUsername(email) {
      const usernameInput = await $(this.UsernameInput);
      await usernameInput.waitForExist();
      await usernameInput.setValue(email);
    }
  
    async enterPassword(password) {
      const passwordInput = await $(this.PasswordInput);
      await passwordInput.waitForExist();
      await passwordInput.setValue(password);
    }
  
    async clickContinueButton() {
      const loginButton = await $(this.LoginButton);
      await loginButton.waitForExist();
      await loginButton.click();
    }
  
    async clickMenuButton() {
            const menuButton = $(this.MenuButton);
            await menuButton.waitForExist();
            await menuButton.click();
    }
    
  
    async clickLoginOption() {
      const loginOption = await $(this.LoginOption);
      await loginOption.waitForExist();
      await loginOption.click();
    }
  
    async login(email, password) {
      await this.enterUsername(email);
      await this.enterPassword(password);
      await this.clickContinueButton();
    }
  }
  
  module.exports = LoginPage;
  