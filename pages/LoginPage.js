class LoginPage {
    constructor() {
        this.UsernameInput = '[content-desc="Username input field"]';
        this.PasswordInput = '[content-desc="Password input field"]';
        this.LoginButton =  '[content-desc="Login button"]';
        this.MenuButton = '[content-desc="open menu"]';
        this.LoginOption = '//*[@text="Log In"]'
    }

    enterUsername(email) {
        it('Enter Username on email input field', () => {
            $(this.UsernameInput).setValue(email);
        });
    }

    enterPassword(password) {
        it('Enter Password on password input field', () => {
            $(this.PasswordInput).setValue(password);
        });
    }

    clickContinueButton() {
        it('Click Continue Button for Login process', () => {
            $(this.LoginButton).click();
        });
    }

    clickMenuButton() {
        it('Click Menu Button', () => {
            $(this.MenuButton).click();
        });
    }

    clickLoginOption() {
        it('Click Menu Button', () => {
            $(this.LoginOption).click();
        });
    }

    login(email, password) {
        it('Login With Valid Credentials', () => {
            this.enterUsername(email);
            this.enterPassword(password);
            this.clickContinueButton();
        });
    }
}

module.exports = new LoginPage();
