// pages/CommonMethods.js
const fs = require('fs');

class CommonMethods {
  constructor() {}

  // Function to create the execution report
  async createExecutionReport() {
    // Define the report directory
    const reportDir = './mochawesome-report';

    // Create the report directory if it doesn't exist
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    // Print a message indicating the creation of a new execution report
    console.log('Creating a new execution report...');
  }

  // Function to remove the execution report
  async removeExecutionReport() {
    // Define the report directory
    const reportDir = './mochawesome-report';

    try {
      // Check if the report directory exists
      if (fs.existsSync(reportDir)) {
        // Remove the report directory recursively
        fs.rmdirSync(reportDir, { recursive: true });
        console.log('Previous execution report deleted.');
      } else {
        console.log('No previous execution report to delete.');
      }
    } catch (error) {
      console.error('Error deleting the execution report:', error);
    }
  }
}

module.exports = CommonMethods;
