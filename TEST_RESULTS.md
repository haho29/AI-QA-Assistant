# QA Demo Shop - Test Results

## Automated Tests

| Test Case | Description | Result |
|---|---|---|
| TC-REG-001 | Register with valid email and password | PASS |
| TC-LOGIN-001 | Login with valid credentials | PASS |
| TC-LOGIN-002 | Login with invalid password | PASS |
| TC-LOGIN-003 | Login with non-existent email | PASS |
| TC-LOGIN-004 | Login with empty email | PASS |
| TC-LOGIN-005 | Login with empty password | PASS |
| TC-FORGOT-001 | Send reset link with valid email | PASS |
| TC-FORGOT-002 | Submit forgot password with empty email | PASS |

## Test Execution

Tool:
- Playwright
- Chromium

Command:

```bash
npx playwright test