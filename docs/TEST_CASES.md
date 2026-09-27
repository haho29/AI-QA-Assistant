# QA Demo Shop - Test Cases

## 1. Test Case Summary

| Metric | Count |
|---|---:|
| Total Approved Test Cases | 16 |
| Positive Tests | 6 |
| Negative Tests | 4 |
| Boundary Tests | 3 |
| Validation Tests | 4 |

> Note: Some test cases belong to more than one testing category.

---

# 2. Test Cases

## Registration

---

## TC-REG-001

**Requirement:** REQ-001

**Title:** Register with valid email and password

**Type:** Positive

**Priority:** High

**Preconditions:**
- User is on the Registration page.

**Test Data:**
- Email: `qa_user_001@example.com`
- Password: `12345678`
- Confirm Password: `12345678`

**Test Steps:**
1. Open the Registration page.
2. Enter a valid email address.
3. Enter a valid password.
4. Enter the same password in the Confirm Password field.
5. Submit the registration form.

**Expected Result:**
- The registration form accepts the valid input.
- The application provides appropriate feedback to the user.

**Automation Candidate:** Yes

**Reason:**
This verifies the main successful registration flow.

---

## TC-REG-002

**Requirement:** REQ-001

**Title:** Register with required fields left empty

**Type:** Validation

**Priority:** High

**Preconditions:**
- User is on the Registration page.

**Test Data:**
- Email: empty
- Password: empty
- Confirm Password: empty

**Test Steps:**
1. Open the Registration page.
2. Leave the required fields empty.
3. Submit the registration form.

**Expected Result:**
- Registration is not accepted.
- Appropriate validation feedback is displayed for the required fields.

**Automation Candidate:** Yes

**Reason:**
This verifies that required registration fields are validated before submission.

---

## TC-REG-003

**Requirement:** REQ-001

**Title:** Register with an invalid email format

**Type:** Validation

**Priority:** High

**Preconditions:**
- User is on the Registration page.

**Test Data:**
- Email: `invalid-email`
- Password: `12345678`
- Confirm Password: `12345678`

**Test Steps:**
1. Open the Registration page.
2. Enter an invalid email format.
3. Enter a valid password.
4. Enter the same value in Confirm Password.
5. Submit the registration form.

**Expected Result:**
- Registration is rejected.
- The application displays appropriate email validation feedback.

**Automation Candidate:** Yes

**Reason:**
This verifies validation of the email input format.

---

## TC-REG-004

**Requirement:** REQ-001

**Title:** Register with password below the minimum length

**Type:** Boundary / Negative

**Priority:** Critical

**Preconditions:**
- User is on the Registration page.

**Test Data:**
- Email: `qa_user_002@example.com`
- Password: `1234567`
- Confirm Password: `1234567`

**Test Steps:**
1. Open the Registration page.
2. Enter a valid email address.
3. Enter a password containing 7 characters.
4. Enter the same value in Confirm Password.
5. Submit the registration form.

**Expected Result:**
- Registration must be rejected.
- The application should display appropriate validation feedback indicating that the password does not meet the minimum length requirement.

**Automation Candidate:** Yes

**Known Defect:** BUG-001

**Reason:**
This test verifies the lower boundary of the password requirement and is designed to detect BUG-001.

---

## TC-REG-005

**Requirement:** REQ-001

**Title:** Register with mismatched password and confirm password

**Type:** Negative / Validation

**Priority:** Critical

**Preconditions:**
- User is on the Registration page.

**Test Data:**
- Email: `qa_user_003@example.com`
- Password: `12345678`
- Confirm Password: `87654321`

**Test Steps:**
1. Open the Registration page.
2. Enter a valid email address.
3. Enter `12345678` in the Password field.
4. Enter `87654321` in the Confirm Password field.
5. Submit the registration form.

**Expected Result:**
- Registration must be rejected.
- The application should display appropriate validation feedback indicating that the passwords do not match.

**Automation Candidate:** Yes

**Known Defect:** BUG-002

**Reason:**
This verifies password confirmation validation and is designed to detect BUG-002.

---

# Login

---

## TC-LOGIN-001

**Requirement:** REQ-002

**Title:** Login with valid credentials

**Type:** Positive

**Priority:** High

**Preconditions:**
- User is on the Login page.
- Valid login credentials are available.

**Test Data:**
- Email: valid registered email
- Password: valid password

**Test Steps:**
1. Open the Login page.
2. Enter a valid email.
3. Enter the corresponding valid password.
4. Submit the login form.

**Expected Result:**
- The login request is accepted.
- The application provides appropriate feedback or navigates according to the implemented login flow.

**Automation Candidate:** Yes

**Reason:**
This verifies the primary successful login flow.

---

## TC-LOGIN-002

**Requirement:** REQ-002

**Title:** Login with incorrect password

**Type:** Negative

**Priority:** High

**Preconditions:**
- User is on the Login page.
- A valid email is available.

**Test Data:**
- Email: valid email
- Password: incorrect password

**Test Steps:**
1. Open the Login page.
2. Enter a valid email.
3. Enter an incorrect password.
4. Submit the login form.

**Expected Result:**
- Login must not be treated as successful.
- The application should provide appropriate error or validation feedback.

**Automation Candidate:** Yes

**Reason:**
This verifies that invalid credentials are handled correctly.

---

## TC-LOGIN-003

**Requirement:** REQ-002

**Title:** Login with required fields left empty

**Type:** Validation

**Priority:** High

**Preconditions:**
- User is on the Login page.

**Test Data:**
- Email: empty
- Password: empty

**Test Steps:**
1. Open the Login page.
2. Leave the email field empty.
3. Leave the password field empty.
4. Submit the login form.

**Expected Result:**
- Login is not accepted.
- Appropriate validation feedback is displayed.

**Automation Candidate:** Yes

**Reason:**
This verifies required-field validation on the Login form.

---

# Forgot Password

---

## TC-FORGOT-001

**Requirement:** REQ-003

**Title:** Request password reset with a valid email

**Type:** Positive

**Priority:** High

**Preconditions:**
- User is on the Forgot Password page.

**Test Data:**
- Email: `qa_user@example.com`

**Test Steps:**
1. Open the Forgot Password page.
2. Enter a valid email address.
3. Click the Send Link button.

**Expected Result:**
- The application provides feedback after the password reset request.
- The user can clearly understand that the request has been processed.

**Automation Candidate:** Yes

**Reason:**
This verifies the main Forgot Password workflow.

---

## TC-FORGOT-002

**Requirement:** REQ-003

**Title:** Request password reset with an invalid email format

**Type:** Validation

**Priority:** High

**Preconditions:**
- User is on the Forgot Password page.

**Test Data:**
- Email: `invalid-email`

**Test Steps:**
1. Open the Forgot Password page.
2. Enter an invalid email format.
3. Click the Send Link button.

**Expected Result:**
- The password reset request is not accepted as valid.
- Appropriate email validation feedback is displayed.

**Automation Candidate:** Yes

**Reason:**
This verifies email validation in the password recovery workflow.

---

# Product Search

---

## TC-SEARCH-001

**Requirement:** REQ-004

**Title:** Search for an existing product by name

**Type:** Positive

**Priority:** High

**Preconditions:**
- User is on the product listing page.
- The target product exists in the product catalog.

**Test Data:**
- Search keyword: `Wireless Headphones`

**Test Steps:**
1. Open the product listing page.
2. Enter `Wireless Headphones` in the search field.
3. Execute the search.

**Expected Result:**
- Products matching the search keyword are displayed.
- The expected product is included in the results.

**Automation Candidate:** Yes

**Reason:**
This verifies the main product search functionality.

---

## TC-SEARCH-002

**Requirement:** REQ-004

**Title:** Search for a product that does not exist

**Type:** Negative

**Priority:** Medium

**Preconditions:**
- User is on the product listing page.

**Test Data:**
- Search keyword: `NonExistingProduct123`

**Test Steps:**
1. Open the product listing page.
2. Enter a keyword that does not match any product.
3. Execute the search.

**Expected Result:**
- No unrelated products are displayed.
- The application displays an appropriate empty or no-results state.

**Automation Candidate:** Yes

**Reason:**
This verifies how the application handles searches with no matching results.

---

## TC-SEARCH-003

**Requirement:** REQ-004

**Title:** Search with an empty or whitespace-only keyword

**Type:** Boundary

**Priority:** Medium

**Preconditions:**
- User is on the product listing page.

**Test Data:**
- Search keyword: empty string or whitespace

**Test Steps:**
1. Open the product listing page.
2. Leave the search field empty or enter whitespace.
3. Execute the search.

**Expected Result:**
- The application handles the empty search input consistently.
- The application should either display the complete product list or provide appropriate feedback without producing an invalid result.

**Automation Candidate:** Yes

**Reason:**
This verifies an edge condition at the boundary of the search input.

---

# Product Filter

---

## TC-FILTER-001

**Requirement:** REQ-005

**Title:** Filter products by a valid category

**Type:** Positive

**Priority:** Medium

**Preconditions:**
- User is on the product listing page.
- Products exist in the selected category.

**Test Data:**
- Category: `Electronics`

**Test Steps:**
1. Open the product listing page.
2. Select the Electronics category.
3. Observe the displayed products.

**Expected Result:**
- Only products belonging to the selected category are displayed.
- Products from unrelated categories are not displayed.

**Automation Candidate:** Yes

**Reason:**
This verifies the main category filtering functionality.

---

# Product Sorting

---

## TC-SORT-001

**Requirement:** REQ-006

**Title:** Sort products by price from low to high

**Type:** Positive

**Priority:** Medium

**Preconditions:**
- User is on the product listing page.
- Multiple products with different prices are available.

**Test Data:**
- Sort option: `Price: Low to High`

**Test Steps:**
1. Open the product listing page.
2. Select the Price: Low to High sorting option.
3. Observe the product order.

**Expected Result:**
- Products are displayed in ascending order of price.
- Each product appears in the correct position based on its price.

**Automation Candidate:** Yes

**Reason:**
This verifies that the selected sorting option changes the product order correctly.

---

# Product Detail

---

## TC-DETAIL-001

**Requirement:** REQ-007

**Title:** View details of an existing product

**Type:** Positive

**Priority:** High

**Preconditions:**
- User is on the product listing page.
- The selected product exists.

**Test Data:**
- Product: `Wireless Headphones`

**Test Steps:**
1. Open the product listing page.
2. Select the Wireless Headphones product.
3. Open the product detail page.
4. Observe the displayed product information.

**Expected Result:**
The product detail page displays the expected product information, including:

- Product image
- Product name
- Category
- Rating
- Price
- Description
- Available stock
- Quantity selector

**Automation Candidate:** Yes

**Reason:**
This verifies that the product detail page displays the required product information.

---

# Add to Cart

---

## TC-CART-001

**Requirement:** REQ-008

**Title:** Add a product to the cart with a valid quantity

**Type:** Positive

**Priority:** High

**Preconditions:**
- User is on a product detail page.
- The product has available stock.

**Test Data:**
- Product: `Wireless Headphones`
- Quantity: `1`

**Test Steps:**
1. Open the product detail page.
2. Verify that the default quantity is 1.
3. Select quantity 1.
4. Click Add to Cart.

**Expected Result:**
- The selected product is accepted for adding to the cart.
- The selected quantity is 1.
- The application provides appropriate feedback after the Add to Cart action.

**Automation Candidate:** Yes

**Reason:**
This verifies the basic Add to Cart workflow with the minimum valid quantity.