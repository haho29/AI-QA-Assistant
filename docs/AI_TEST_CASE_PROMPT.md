# AI Test Case Generation Prompt

## 1. Purpose

This document contains the prompt used to ask AI to generate
candidate test cases for the QA Demo Shop application.

The AI-generated test cases were treated as candidate test cases only.
They were reviewed and validated manually before being included in the
final test suite.

---

## 2. AI Role

You are a Senior QA Engineer helping me design test cases for a
small e-commerce web application.

Your task is to analyze the provided requirements and generate
meaningful candidate test cases.

The goal is NOT to generate as many test cases as possible.

The goal is to identify realistic and meaningful scenarios that
could discover actual defects.

---

## 3. Project Context

The application is "QA Demo Shop".

It is a React-based e-commerce demo application created as the
test application for an AI QA Engineer challenge.

The application contains functionality related to:

- User Registration
- User Login
- Forgot Password
- Product Search
- Product Category Filter
- Product Sorting
- Product Detail
- Add to Cart

---

## 4. Testing Categories

The generated test cases must cover:

1. Positive testing
2. Negative testing
3. Boundary testing
4. Validation testing

---

## 5. Requirements

The AI must use the provided project requirements as the source of truth.

The AI must not invent functionality that is not included in the
requirements or implemented in the application.

---

## 6. Required Test Case Format

For every test case, provide:

- Test Case ID
- Requirement ID
- Test Case Title
- Test Type
- Preconditions
- Test Steps
- Test Data
- Expected Result
- Priority
- Automation Candidate
- Reason Why This Test Is Important

---

## 7. Rules

1. Do not create duplicate test cases.
2. Do not create trivial tests only to increase the test count.
3. Include meaningful edge cases.
4. Include boundary conditions where applicable.
5. Make every expected result specific and testable.
6. Every test case must map to a requirement.
7. Clearly identify the test type.
8. Do not invent functionality that is not described in the requirements.
9. If a requirement is ambiguous, explicitly identify the assumption.
10. Prefer test cases that can realistically be automated using Playwright.
11. Focus on scenarios that could reveal real defects.
12. Generate candidate test cases for human review.

---

## 8. Output Requirements

Generate approximately 20 candidate test cases.

After generating the test cases, provide a coverage summary containing:

- Number of positive tests
- Number of negative tests
- Number of boundary tests
- Number of validation tests
- Requirements covered
- Potential coverage gaps
- Assumptions made

---

## 9. Human Review Process

The AI output is not automatically accepted.

Each candidate test case is reviewed manually.

The review checks:

- Is the test case supported by the requirement?
- Is the test case relevant to the application?
- Is it duplicated by another test case?
- Is the expected result testable?
- Does the test require functionality that does not exist?
- Are there missing edge cases?
- Is the test suitable for automation?

Candidate test cases are classified as:

- KEEP
- EDIT
- REMOVE

---

## 10. AI Output Verification

During review, several AI-generated cases were identified as relying
on assumptions or functionality that was not part of the current
application.

Those cases were removed or modified rather than being accepted
automatically.

An additional password confirmation validation test was also added
after human review identified a missing scenario.

This demonstrates that AI was used as a test design assistant rather
than as a replacement for QA judgment.

---

## 11. Final Result

The AI initially generated 20 candidate test cases.

After human review:

- Duplicate or unsupported cases were removed.
- Incorrect assumptions were corrected.
- Missing validation coverage was added.
- The final test suite contains 16 approved meaningful test cases.

The final approved test cases are documented in:

`docs/TEST_CASES.md`