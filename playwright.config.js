// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  forbidOnly: !!process.env.CI,
  retries: 1,
  timeout: 90000,
  reporter: [
    ['json', { outputFile: 'test-results/test-results.json' }],
    ['list'],
    ['html', { open: 'always', outputFile: 'test-results/test-results.json' } ],
    ['junit', { outputFile: './test1/results.xml' }] ,
  ],

  use: {

    baseURL: process.env.URL,
    headless: true,
    viewport: { width: 1280, height: 600 },
    video: "on",
    trace: 'on',
    screenshot: 'on', 
    
  },


  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], },
    },
    {
      name: 'iphone11promax',    
      use: { ...devices['iPhone 11 Pro Max'], },     
    },
    {
      name: 'galaxys9+',    
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