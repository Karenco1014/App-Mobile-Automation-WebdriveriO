const CommonMethods = require('./CommonMethods');


class HomePage {
    constructor() {
        this.loggedInGreetingXpath = "(//android.widget.TextView[@text='Products'])";
    }

    async validateSuccessfulLoginGreeting(page) {
        return await CommonMethods.elementExists(page, this.loggedInGreetingXpath);
    }
}

module.exports = new HomePage();
