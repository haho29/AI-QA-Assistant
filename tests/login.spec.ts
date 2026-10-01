import { test, expect } from '@playwright/test';

test('TC-LOGIN-001 - Login with valid credentials', async ({ page }) => {

  // 1. Open application
  await page.goto('/');

  // 2. Open Login page
  await page.getByRole('link', { name: 'Login' }).click();

  // 3. Enter valid email
  await page.getByRole('textbox', { name: 'Email' })
    .fill('myha@gmail.com');

  // 4. Enter valid password
  await page.getByRole('textbox', { name: 'Password' })
    .fill('12345678');

  // 5. Submit login
  await page.getByRole('button', { name: 'Sign In' }).click();

  // 6. TODO: Add assertion based on actual successful login behavior
});

test.skip('TC-LOGIN-002 - Login with invalid password', async ({ page }) => {

  const email = `login-test-${Date.now()}@gmail.com`;
  const validPassword = '12345678';
  const invalidPassword = 'wrong12345';

  // 1. Open application
  await page.goto('/');

  // 2. Create a test account first
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Create account' }).click();

  await page.getByRole('textbox', { name: 'Email' })
    .fill(email);

  await page.getByRole('textbox', { name: 'Password', exact: true })
    .fill(validPassword);

  await page.getByRole('textbox', { name: 'Confirm Password' })
    .fill(validPassword);

  await page.getByRole('button', { name: 'Create Account' }).click();

  // 3. Go to Login
  await page.getByRole('link', { name: 'Login' }).click();

  // 4. Enter existing email with WRONG password
  await page.getByRole('textbox', { name: 'Email' })
    .fill(email);

  await page.getByRole('textbox', { name: 'Password' })
    .fill(invalidPassword);

  // 5. Submit login
  await page.getByRole('button', { name: 'Sign In' }).click();

  // 6. Verify invalid password message
  await expect(
    page.getByText('Invalid email or password.')
  ).toBeVisible();
});

test.skip('TC-LOGIN-003 - Login with non-existent email', async ({ page }) => {

  await page.goto('/');

  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByRole('textbox', { name: 'Email' })
    .fill('test@gmail.com');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('12345678');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(page.locator('body'))
    .toContainText('! Invalid email or password.');
});

test.skip('TC-REG-004 - Reject password below minimum length', async ({ page }) => {

  await page.goto('/');

  await page.getByRole('link', { name: 'Login' }).click();

  // Không nhập Email

  await page.getByRole('textbox', { name: 'Password' })
    .fill('1234567');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(
  page.getByText('Email is required')
).toBeVisible();
});

test('TC-LOGIN-005 - Login with empty password', async ({ page }) => {

  await page.goto('/');

  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByRole('textbox', { name: 'Email' })
    .fill('myha@gmail.com');

  // Không nhập Password

  await page.getByRole('button', { name: 'Sign In' }).click();

  // Thêm assertion sau khi xác nhận thông báo thực tế
});