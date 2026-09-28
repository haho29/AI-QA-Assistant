import { test, expect } from '@playwright/test';

test('TC-REG-001 - Register with valid email and password', async ({ page }) => {

  // 1. Open the application
  await page.goto('/');

  // 2. Go to Registration page
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Create account' }).click();

  // 3. Enter valid email
  await page.getByRole('textbox', { name: 'Email' }).fill('qa_user_001@example.com');

  // 4. Enter valid password
  await page.getByRole('textbox', {
    name: 'Password',
    exact: true
  }).fill('12345678');

  // 5. Confirm password
  await page.getByRole('textbox', {
    name: 'Confirm Password'
  }).fill('12345678');

  // 6. Submit registration
  await page.getByRole('button', {
    name: 'Create Account'
  }).click();

  // 7. Verify successful registration
  await expect(
    page.getByText('Registration successful')
  ).toBeVisible();
});

test('TC-REG-004 - Reject password below minimum length', async ({ page }) => {

  // 1. Open the application
  await page.goto('/');

  // 2. Go to Registration page
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Create account' }).click();

  // 3. Enter valid email
  await page.getByRole('textbox', { name: 'Email' }).fill('qa_user_004@example.com');

  // 4. Enter password with only 7 characters
  await page.getByRole('textbox', {
    name: 'Password',
    exact: true
  }).fill('1234567');

  // 5. Confirm password
  await page.getByRole('textbox', {
    name: 'Confirm Password'
  }).fill('1234567');

  // 6. Submit registration
  await page.getByRole('button', {
    name: 'Create Account'
  }).click();

  // 7. Registration should be rejected
  await expect(
    page.getByText('Registration successful')
  ).not.toBeVisible();
});