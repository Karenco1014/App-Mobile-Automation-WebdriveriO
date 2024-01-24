const { assert } = require('chai'); // Assuming you have Chai for assertions
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const os = require('os');
const { join } = require('path');
const { EOL } = require('os');
const { readFile, createReadStream } = require('fs');
const readline = require('readline');

class CommonMethods {
  constructor(page) {
    this.page = page;
  }

  static async appendTestToTrackTxt(testName) {
    const dateExecution = new Date();
    const dateTestStarted = dateExecution
      .toString()
      .split(' ')
      .slice(1, 5)
      .join('-')
      .replace(':', '.')
      .replace(':', '.');

    await fs.promises.appendFile(
      'track.txt',
      `${testName.split('@')[0]},${dateTestStarted}${EOL}`,
    );

    console.log(`Test: ${testName} appended to track file correctly`);
  }

  static async elementExists(page, locator, waitingTime = 5000) {
    try {
      await page.waitForSelector(locator, { state: 'visible', timeout: waitingTime });
      return true;
    } catch {
      console.log(`Element with locator: ${locator} does NOT EXIST`);
      return false;
    }
  }

  static async moveReports(reportFolder) {
    // Implement the logic for moving reports using WebDriverIO if needed
  }

  static async createReportFolder(reportFolderPath) {
    if (!fs.existsSync(reportFolderPath)) {
      fs.mkdirSync(reportFolderPath, { recursive: true });
    }
  }

  static async removePreviousReports() {
    if (os.userInfo().username !== 'circleci') {
      await exec('rm -rf ../../test-results/*');
      await exec('rm -rf allure-results/*');
      await exec('rm -rf ../../allure-report');
      console.log('Reports removed');
    }
    const reportsFolder =
      os.userInfo().username !== 'circleci'
        ? `/Users/${os.userInfo().username}/Desktop/0-Reports/`
        : '/tmp/0-Reports/';
  }

  static async createReportFolders(filename) {
    if (!fs.existsSync(reportsFolder)) {
      fs.mkdirSync(reportsFolder);
    }

    const finalDate = date
      .toString()
      .split(' ')
      .slice(1, 5)
      .join('-')
      .replace(':', '.')
      .replace(':', '.');

    this.finalReportFolder = reportsFolder + filename + ' - ' + finalDate;
    this.finalReportFolderTraces = reportsFolder + filename + ' - ' + finalDate + '/Traces';
    this.finalReportFolderVideos = reportsFolder + filename + ' - ' + finalDate + '/Videos';
    this.finalReportFolderAllure = reportsFolder + filename + ' - ' + finalDate + '/AllureReport';

    this.createReportFolder(this.finalReportFolder);
    this.createReportFolder(this.finalReportFolderTraces);
    this.createReportFolder(this.finalReportFolderVideos);
    this.createReportFolder(this.finalReportFolderAllure);
  }

  static async createCSVDataFrameWithExecutedTests() {
    const rl = readline.createInterface({
      input: fs.createReadStream('track.txt'),
      crlfDelay: Infinity,
    });

    const testName = [];
    const dateTestQATracking = [];

    rl.on('line', (line) => {
      testName.push(line.split(',')[0]);
      dateTestQATracking.push(line.split(',')[1]);
    });

    rl.on('close', async () => {
      const finalData = {
        TestNames: testName,
        Date: dateTestQATracking,
      };

      const df = new dfd.DataFrame(finalData);
      await dfd.toCSV(df, { filePath: 'TestsQATracking.csv' });
    });
  }
}

module.exports = CommonMethods;
