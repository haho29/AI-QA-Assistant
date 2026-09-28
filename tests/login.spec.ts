import { test, expect } from '@playwright/test';

test('TC-LOGIN-001 - Login with valid credentials', async ({ page }) => {

  await page.goto('/');

  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByRole('textbox', { name: 'Email' })
    .fill('YOUR_VALID_EMAIL');

  await page.getByRole('textbox', {
    name: 'Password',
    exact: true
  }).fill('YOUR_VALID_PASSWORD');

  await page.getByRole('button', {
    name: 'Login'
  }).click();

  // Assertion sẽ được xác định theo hành vi thực tế của application.
});