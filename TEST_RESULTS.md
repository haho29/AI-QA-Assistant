# QA Demo Shop - Test Results

## Automated Test Results

| Test Case | Description | Result |
|---|---|---|
| TC-REG-001 | Register with valid email and password | PASS |
| TC-REG-004 | Reject password below minimum length | SKIPPED |
| TC-LOGIN-001 | Login with valid credentials | PASS |
| TC-LOGIN-002 | Login with invalid password | SKIPPED |
| TC-LOGIN-003 | Login with non-existent email | SKIPPED |
| TC-LOGIN-004 | Login with empty email | PASS |
| TC-LOGIN-005 | Login with empty password | PASS |
| TC-FORGOT-001 | Send reset link with valid email | PASS |
| TC-FORGOT-002 | Submit forgot password with empty email | PASS |

## Notes

TC-LOGIN-002 and TC-LOGIN-003 were identified as valid test scenarios but their automated assertions were not finalized within the challenge timeline.

TC-REG-004 was identified as a password validation scenario and requires further verification of the application's minimum password-length behavior.

These scenarios remain documented for future automation improvement.

## Manual Testing

The following features were manually verified:

- Registration
- Login
- Forgot Password
- Product Search
- Product Category Filter
- Product Sorting
- Product Detail
- Add to Cart