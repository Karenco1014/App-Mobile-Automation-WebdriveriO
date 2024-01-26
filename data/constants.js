// Import the Node.js 'dotenv' library for environment variables
const dotenv = require('dotenv');

// Load environment variables from the .env file into process.env
dotenv.config();

// Define constants for credentials
module.exports = {
  CREDENTIALS: {
    // Use process.env to access environment variables
    VALID_USERNAME: process.env.VALID_USERNAME,
    VALID_PASSWORD: process.env.VALID_PASSWORD,
  },
};
