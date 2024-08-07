import { Given, When, Then } from '@cucumber/cucumber';
import { homeDemoGuruPage } from '../../hooks/hooks';
import { expect } from '@playwright/test';
import { HomeDemoGuruPage } from '../../../.history/src/page/HomeDemoGuruPage_20240804231913';


Given('TRES-bloqueo una api', { timeout: 80000 }, async function () {
// Mock the API call before navigating
await homeDemoGuruPage.mock();

  });

Then('TRES-responde con nuestro mock', { timeout: 80000 }, async function () {
     // Go to the page
  await homeDemoGuruPage.irAMock('https://demo.playwright.dev/api-mocking');
  //await homeDemoGuruPage.textExpect(locator, "Enter your userName and password correct");
    await expect(this.HomeDemoGuruPage.getByText('Gili')).toBeVisible();
  });