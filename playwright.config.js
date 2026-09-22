// @ts-check
const { devices } = require('@playwright/test');

const config = {
    testDir: './tests',
    testMatch: '**/*.spec.js',
    retries: 0,
    /* Maximum time one test can run for. */
    timeout: 30 * 1000,

    expect: {
        timeout: 5000
    },


    reporter: 'html',
    // Shared settings for all tests

    
    use: {
        actionTimeout: 10 * 1000,
        navigationTimeout: 30 * 1000,
        // Use installed Google Chrome
        channel: 'chrome',
        headless: false,
        screenshot: 'on',
        trace: 'on'
    }
};

// VERY IMPORTANT
module.exports = config;