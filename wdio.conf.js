const path = require('path');

// Utiliza la sintaxis de importación para path
const androidAppPath = path.join(
  process.cwd(),
  "/apk/Android-MyDemoAppR.apk"
);

exports.config = {
  runner: 'local',
  specs: [
    './tests/*.js'
  ],

  exclude: [
    // 'path/to/excluded/files'
  ],

  maxInstances: 1,

  capabilities: [{
    "platformName": 'android',
    "appium:deviceName": 'Pixel 4 API 31',
    "appium:platformVersion": "12.0",
    "appium:automationName": "uiautomator2",
    "appium:app": androidAppPath,
  }],

  logLevel: 'info',

  bail: 0,

  baseUrl: 'http://127.0.0.1',

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 1,

  services: [["appium", {
    command: 'appium',
    args: {
      port: 4723, 
      host: '127.0.0.1'
    },
  }]],
  

  framework: 'mocha',

  reporters: [
    'spec',
    [
      'timeline',
      {
        outputDir: './timeline-report',
        fileName: 'timeline-report.html',
        embedImages: true,
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: './mochawesome-report',
      reportName: 'index',
      reportTitle: 'My Test Report',
      inline: true,
      inlineDiffs: true
    }
  }
};
