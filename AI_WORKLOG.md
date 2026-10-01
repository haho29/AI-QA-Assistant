# AI Worklog

## Project
QA Demo Shop

## How AI Was Used

AI was used as a supporting tool throughout the QA process.

### 1. Requirement Analysis
AI helped analyze the provided requirements and identify meaningful test scenarios.

### 2. Test Case Generation
AI helped generate candidate test cases for:
- Registration
- Login
- Forgot Password
- Product Search
- Product Category Filter
- Product Sorting
- Product Detail
- Add to Cart

The generated test cases were reviewed and adjusted based on the actual application behavior.

### 3. Test Automation
AI helped generate Playwright test scripts and selectors.

The generated scripts were manually executed and verified.

### 4. AI Output Verification

AI-generated assertions were not always accepted directly.

For example, during login testing, AI initially assumed that the application displayed:

`Invalid email or password`

The actual UI behavior was checked manually, and the test assertion was adjusted to match the real application behavior.

This helped ensure that the automated tests were based on observed application behavior rather than assumptions.

### 5. Debugging
AI was used to help investigate:
- Incorrect selectors
- Failed assertions
- Application behavior
- Playwright test execution errors

### Human Verification

All important AI-generated test cases and automation scripts were reviewed and executed against the actual application.

## Limitations

The project focuses on a small demo e-commerce application.

The current automation coverage focuses mainly on critical authentication and password recovery flows.

Some product-related scenarios were manually tested rather than fully automated due to the project timeline.