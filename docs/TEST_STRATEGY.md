# QA Demo Shop - Test Strategy

## 1. Objective

The objective of testing is to verify that the main user flows of
QA Demo Shop behave according to the defined requirements.

Testing will focus on functional behavior, invalid inputs,
boundary conditions, and validation rules.

The testing process will also evaluate how AI can support QA activities
while keeping human verification as an important part of the process.

---

## 2. Test Scope

### In Scope

- User Registration
- User Login
- Forgot Password
- Product Search
- Product Category Filter
- Product Sorting
- Product Detail
- Product Quantity
- Add to Cart

### Out of Scope

- Real payment processing
- Real email delivery
- Real database integration
- Order management
- Admin dashboard
- Shipping management

---

## 3. Testing Types

### Positive Testing

Verify that valid inputs and expected user actions produce the
expected result.

### Negative Testing

Verify that invalid inputs and invalid user actions are handled
appropriately.

### Boundary Testing

Verify behavior at important limits such as minimum and maximum values.

### Validation Testing

Verify that user input follows the expected format and required rules.

### Regression Testing

Verify that existing functionality continues to work after changes.

### Automated Testing

Selected approved test cases will be automated using Playwright.

---

## 4. Test Approach

The testing workflow is:

1. Analyze requirements.
2. Identify meaningful test scenarios.
3. Use AI to generate candidate test cases.
4. Review AI-generated test cases.
5. Remove incorrect or duplicate cases.
6. Identify missing edge cases.
7. Approve final test cases.
8. Select suitable cases for automation.
9. Execute automated tests.
10. Collect evidence.
11. Analyze failures.
12. Generate bug reports.

---

## 5. AI Verification

AI-generated test cases must be reviewed before being accepted.

The review will check:

- Requirement coverage
- Correctness
- Relevance
- Duplicate scenarios
- Missing edge cases
- Testability
- Preconditions
- Expected results
- Unsupported assumptions

Human review is required before a test case becomes an approved test case.

---

## 6. Test Evidence

For automated test failures, the following evidence should be collected:

- Screenshot
- Test execution result
- Error message
- Relevant logs
- Test case information

---

## 7. Exit Criteria

The test design phase is complete when:

- At least 15 meaningful test cases are approved.
- Positive, negative, boundary, and validation scenarios are covered.
- Each test case maps to a requirement.
- Expected results are specific and testable.
- Suitable automation candidates are identified.