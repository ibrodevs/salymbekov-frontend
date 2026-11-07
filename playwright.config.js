import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  use: { baseURL: 'http://127.0.0.1:4173', reducedMotion: 'reduce' },
  projects: [
    { name:'desktop', use: { ...devices['Desktop Chrome'] } },
    { name:'mobile', use: { ...devices['iPhone 13'], defaultBrowserType:'chromium' } },
  ],
  webServer: { command:'npm run preview -- --host 127.0.0.1', url:'http://127.0.0.1:4173', reuseExistingServer:true },
});
