// Class representing the HomePage
class HomePage {
    // Constructor that takes a 'driver' parameter
    constructor(driver) {
      // Assign the 'driver' to the instance variable 'this.driver'
      this.driver = driver;
      // Define the XPath for the greeting element
      this.loggedInGreetingXpath = ('[text="Products"]');
    }
  
    async isSuccessfulLoginGreetingVisible() {
        try {
          // Wait for the existence of the element
          await this.driver.$(this.loggedInGreetingXpath).waitForExist({ timeout: 20000 });
          console.log('After waiting for the element to exist');
      
          console.log('Before checking if the element is visible');
          // Wait for the element to be displayed
          await this.driver.$(this.loggedInGreetingXpath).waitForDisplayed({ timeout: 20000 });
          console.log('After checking if the element is visible');
      
          // Return true if the element is visible
          return true;
        } catch (error) {
          // Log a message if the element is not visible or does not exist and return false
          console.log(`Element with xpath: ${this.loggedInGreetingXpath} does NOT EXIST or is not visible`);
          return false;
        }
      }
      

  }
  
  // Export the HomePage class
  module.exports = HomePage;
  