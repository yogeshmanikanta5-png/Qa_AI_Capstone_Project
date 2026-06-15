# Flipkart-Like Playwright Automation Project

This is a ready-to-run Playwright TypeScript automation framework for a Flipkart-like e-commerce application. It covers UI automation with Page Object Model, API automation with Playwright request contexts, reusable utilities, environment variables, and QA-style test documentation.

## Folder Structure

```text
flipkart-playwright-automation/
  config/
    testData.ts
  pages/
    BasePage.ts
    CartPage.ts
    CheckoutPage.ts
    LoginPage.ts
    ProductDetailsPage.ts
    SearchPage.ts
  tests/
    api/
      ecommerce.api.spec.ts
      sample-payloads.md
    ui/
      login.spec.ts
      product-flow.spec.ts
  utils/
    apiClient.ts
    assertions.ts
    env.ts
  .env.example
  package.json
  playwright.config.ts
  test-cases.md
  tsconfig.json
```

## Setup

```bash
npm install
npm run install:browsers
cp .env.example .env
```

Update `.env` with your application and API endpoints:

```text
BASE_URL=https://your-flipkart-like-app.example
API_BASE_URL=https://api.your-flipkart-like-app.example
TEST_USER_EMAIL=test.user@example.com
TEST_USER_PASSWORD=Password@123
TEST_USER_NAME=Test User
DEFAULT_PRODUCT_QUERY=iphone
PIN_CODE=560001
```

## Run Tests

```bash
npm test
npm run test:ui
npm run test:api
npm run test:headed
npm run report
```

## Locator Strategy

The framework uses `data-testid` locators because they are stable and less likely to break when text, styling, or layout changes.

Expected UI test IDs include:

```text
login-email
login-password
login-submit
account-menu
search-input
search-submit
product-card
product-title
product-price
product-rating
delivery-pincode
check-delivery
add-to-cart
cart-item
price-summary
place-order
address-full-name
address-phone
address-pincode
address-line-1
address-city
address-state
save-address
payment-cod
confirm-order
order-success
```

## UI Coverage

- Login page
- Product search
- Product details page
- Add to cart
- Checkout process
- Negative login validation

## API Coverage

- Login API
- Product search API
- Product details API
- Add to cart API
- Order checkout API
- Invalid token negative test

## Best Practices Included

- Page Object Model for maintainability
- Environment variables for URLs and credentials
- Reusable API context helper
- Clear assertions for UI and API validations
- Test artifacts on failure: screenshot, video, and trace
- Separate UI and API test folders
- Stable locator approach using `data-testid`
- QA test case documentation with priority and expected result

## Notes

The endpoints and selectors are realistic examples for a Flipkart-like application. If your application uses different route names or test IDs, update the page objects and API paths while keeping the framework structure unchanged.
