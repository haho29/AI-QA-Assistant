import { test, expect } from '@playwright/test';

test('TC-FORGOT-001 - Send reset link with valid email', async ({ page }) => {

  // 1. Open application
  await page.goto('/');

  // 2. Open Login page
  await page.getByRole('link', { name: 'Login' }).click();

  // 3. Open Forgot Password
  await page.getByRole('link', { name: 'Forgot your password?' }).click();

  // 4. Enter valid email
  await page.getByRole('textbox', { name: 'Email' })
    .fill('myha@gmail.com');

  // 5. Send reset link
  await page.getByRole('button', { name: 'Send Reset Link' }).click();

  // 6. Verify success notification
  await expect(
    page.getByText('Password reset link has been sent to your email.')
  ).toBeVisible();
});

test('TC-FORGOT-002 - Submit forgot password with empty email', async ({ page }) => {

  await page.goto('/');

  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'Forgot your password?' }).click();

  // Email intentionally left empty

  await page.getByRole('button', { name: 'Send Reset Link' }).click();

  // Assertion sẽ thêm sau khi xác nhận UI thực tế.
});