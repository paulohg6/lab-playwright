// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', {   outputFile: 'test-results/test-results.json' }] ],
  
  use: {
    headless: false,
    viewport: { width: 1280, height: 600 },
    video:"on",
    trace: 'on-first-retry',
    screenshot: 'on',

  },

  
  projects: [
    {
      name: 'chromium',    
      use: { ...devices['Desktop Chrome'], },     
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};

module.exports = config;