// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  
  reporter: [
    ['html', { outputFolder: 'utils/playwright-report' }],
    ['json', {   outputFile: 'test-results/test-results.json' }] ],
  
  use: {
    headless: true,
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
      name: 'webkit',    
      use: { ...devices['iPhone 11 Pro Max'], },     
    },
    {
      name: 'webkit',    
      use: { ...devices['Galaxy S9+'], },     
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