# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> TC-LOGIN-003 - Login with non-existent email
- Location: tests\login.spec.ts:44:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('body')
- Expected substring  - 1
+ Received string     + 6

- ! Invalid email or password.
+
+     ✓QA Demo ShopTest smarter.Find bugs faster.A demo e-commerce application built for AI-assisted quality assurance, automated testing and bug detection.✓Authentication testing⌁Automated QA workflow✦AI-assisted test analysisQA Testing EnvironmentDEMO APPLICATIONWelcome backSign in to continue to QA Demo Shop.EmailPassword!Account not found. Please register first.Sign InForgot your password?Don't have an account? Create account
+     
+   
+
+

Call log:
  - Expect "toContainText" locator('body') with timeout 5000ms
  - waiting for locator('body')
    12 × locator resolved to <body>…</body>
       - unexpected value "
    ✓QA Demo ShopTest smarter.Find bugs faster.A demo e-commerce application built for AI-assisted quality assurance, automated testing and bug detection.✓Authentication testing⌁Automated QA workflow✦AI-assisted test analysisQA Testing EnvironmentDEMO APPLICATIONWelcome backSign in to continue to QA Demo Shop.EmailPassword!Account not found. Please register first.Sign InForgot your password?Don't have an account? Create account
    
  

"
  - Target page, context or browser has been closed

```

```yaml
- text: ✓ QA Demo Shop
- heading "Test smarter. Find bugs faster." [level=1]
- paragraph: A demo e-commerce application built for AI-assisted quality assurance, automated testing and bug detection.
- text: ✓ Authentication testing ⌁ Automated QA workflow ✦ AI-assisted test analysis QA Testing Environment DEMO APPLICATION
- heading "Welcome back" [level=2]
- paragraph: Sign in to continue to QA Demo Shop.
- text: Email
- textbox "Email":
  - /placeholder: you@example.com
  - text: test@gmail.com
- text: Password
- textbox "Password":
  - /placeholder: Enter your password
  - text: "12345678"
- text: "! Account not found. Please register first."
- button "Sign In"
- paragraph:
  - link "Forgot your password?":
    - /url: /forgot-password
- paragraph:
  - text: Don't have an account?
  - link "Create account":
    - /url: /register
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('TC-LOGIN-001 - Login with valid credentials', async ({ page }) => {
  4  | 
  5  |   // 1. Open application
  6  |   await page.goto('/');
  7  | 
  8  |   // 2. Open Login page
  9  |   await page.getByRole('link', { name: 'Login' }).click();
  10 | 
  11 |   // 3. Enter valid email
  12 |   await page.getByRole('textbox', { name: 'Email' })
  13 |     .fill('myha@gmail.com');
  14 | 
  15 |   // 4. Enter valid password
  16 |   await page.getByRole('textbox', { name: 'Password' })
  17 |     .fill('12345678');
  18 | 
  19 |   // 5. Submit login
  20 |   await page.getByRole('button', { name: 'Sign In' }).click();
  21 | 
  22 |   // 6. TODO: Add assertion based on actual successful login behavior
  23 | });
  24 | 
  25 | test('TC-LOGIN-002 - Login with invalid password', async ({ page }) => {
  26 | 
  27 |   await page.goto('/');
  28 | 
  29 |   await page.getByRole('link', { name: 'Login' }).click();
  30 | 
  31 |   await page.getByRole('textbox', { name: 'Email' })
  32 |     .fill('myha@gmail.com');
  33 | 
  34 |   await page.getByRole('textbox', { name: 'Password' })
  35 |     .fill('wrong12345');
  36 | 
  37 |   await page.getByRole('button', { name: 'Sign In' }).click();
  38 | 
  39 |   await expect(
  40 |   page.getByText('Invalid email or password.', { exact: true })
  41 | ).toBeVisible();
  42 | });
  43 | 
  44 | test('TC-LOGIN-003 - Login with non-existent email', async ({ page }) => {
  45 | 
  46 |   await page.goto('/');
  47 | 
  48 |   await page.getByRole('link', { name: 'Login' }).click();
  49 | 
  50 |   await page.getByRole('textbox', { name: 'Email' })
  51 |     .fill('test@gmail.com');
  52 | 
  53 |   await page.getByRole('textbox', { name: 'Password' })
  54 |     .fill('12345678');
  55 | 
  56 |   await page.getByRole('button', { name: 'Sign In' }).click();
  57 | 
  58 |   await expect(page.locator('body'))
> 59 |     .toContainText('! Invalid email or password.');
     |      ^ Error: expect(locator).toContainText(expected) failed
  60 | });
  61 | 
  62 | test('TC-LOGIN-004 - Login with empty email', async ({ page }) => {
  63 | 
  64 |   await page.goto('/');
  65 | 
  66 |   await page.getByRole('link', { name: 'Login' }).click();
  67 | 
  68 |   // Không nhập Email
  69 | 
  70 |   await page.getByRole('textbox', { name: 'Password' })
  71 |     .fill('1234567');
  72 | 
  73 |   await page.getByRole('button', { name: 'Sign In' }).click();
  74 | 
  75 |   await expect(
  76 |   page.getByText('Email is required')
  77 | ).toBeVisible();
  78 | });
  79 | 
  80 | test('TC-LOGIN-005 - Login with empty password', async ({ page }) => {
  81 | 
  82 |   await page.goto('/');
  83 | 
  84 |   await page.getByRole('link', { name: 'Login' }).click();
  85 | 
  86 |   await page.getByRole('textbox', { name: 'Email' })
  87 |     .fill('myha@gmail.com');
  88 | 
  89 |   // Không nhập Password
  90 | 
  91 |   await page.getByRole('button', { name: 'Sign In' }).click();
  92 | 
  93 |   // Thêm assertion sau khi xác nhận thông báo thực tế
  94 | });
```