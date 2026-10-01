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

test('TC-LOGIN-002 - Login with invalid password', async ({ page }) => {

  await page.goto('/');

  await page.getByRole('link', { name: 'Login' }).click();

  await page.getByRole('textbox', { name: 'Email' })
    .fill('myha@gmail.com');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('wrong12345');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(
  page.getByText('Invalid email or password.', { exact: true })
).toBeVisible();
});

test('TC-LOGIN-003 - Login with non-existent email', async ({ page }) => {

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

test('TC-LOGIN-004 - Login with empty email', async ({ page }) => {

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