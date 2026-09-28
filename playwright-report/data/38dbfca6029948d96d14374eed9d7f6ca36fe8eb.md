# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registration.spec.ts >> TC-REG-004 - Reject password below minimum length
- Location: tests\registration.spec.ts:37:1

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  getByText('Registration successful')
Expected: not visible
Received: visible
Timeout:  5000ms

Call log:
  - Expect "not toBeVisible" getByText('Registration successful') with timeout 5000ms
  - waiting for getByText('Registration successful')
    14 × locator resolved to <div class="success-message">…</div>
       - unexpected value "visible"

```

```yaml
- text: ✓ Registration successful!
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('TC-REG-001 - Register with valid email and password', async ({ page }) => {
  4  | 
  5  |   // 1. Open the application
  6  |   await page.goto('/');
  7  | 
  8  |   // 2. Go to Registration page
  9  |   await page.getByRole('link', { name: 'Login' }).click();
  10 |   await page.getByRole('link', { name: 'Create account' }).click();
  11 | 
  12 |   // 3. Enter valid email
  13 |   await page.getByRole('textbox', { name: 'Email' }).fill('qa_user_001@example.com');
  14 | 
  15 |   // 4. Enter valid password
  16 |   await page.getByRole('textbox', {
  17 |     name: 'Password',
  18 |     exact: true
  19 |   }).fill('12345678');
  20 | 
  21 |   // 5. Confirm password
  22 |   await page.getByRole('textbox', {
  23 |     name: 'Confirm Password'
  24 |   }).fill('12345678');
  25 | 
  26 |   // 6. Submit registration
  27 |   await page.getByRole('button', {
  28 |     name: 'Create Account'
  29 |   }).click();
  30 | 
  31 |   // 7. Verify successful registration
  32 |   await expect(
  33 |     page.getByText('Registration successful')
  34 |   ).toBeVisible();
  35 | });
  36 | 
  37 | test('TC-REG-004 - Reject password below minimum length', async ({ page }) => {
  38 | 
  39 |   // 1. Open the application
  40 |   await page.goto('/');
  41 | 
  42 |   // 2. Go to Registration page
  43 |   await page.getByRole('link', { name: 'Login' }).click();
  44 |   await page.getByRole('link', { name: 'Create account' }).click();
  45 | 
  46 |   // 3. Enter valid email
  47 |   await page.getByRole('textbox', { name: 'Email' }).fill('qa_user_004@example.com');
  48 | 
  49 |   // 4. Enter password with only 7 characters
  50 |   await page.getByRole('textbox', {
  51 |     name: 'Password',
  52 |     exact: true
  53 |   }).fill('1234567');
  54 | 
  55 |   // 5. Confirm password
  56 |   await page.getByRole('textbox', {
  57 |     name: 'Confirm Password'
  58 |   }).fill('1234567');
  59 | 
  60 |   // 6. Submit registration
  61 |   await page.getByRole('button', {
  62 |     name: 'Create Account'
  63 |   }).click();
  64 | 
  65 |   // 7. Registration should be rejected
  66 |   await expect(
  67 |     page.getByText('Registration successful')
> 68 |   ).not.toBeVisible();
     |         ^ Error: expect(locator).not.toBeVisible() failed
  69 | });
```