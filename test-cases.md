# UI Test Cases

| Test Case ID | Title | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC_UI_001 | Verify login with valid credentials | User account exists and application is available | 1. Open login page 2. Enter valid email 3. Enter valid password 4. Click Login | User is logged in and account menu displays the user name | High |
| TC_UI_002 | Verify login validation for invalid credentials | Application is available | 1. Open login page 2. Enter invalid email/password 3. Click Login | Error message is displayed and user remains on login page | High |
| TC_UI_003 | Verify product search returns results | User is logged in and searchable products exist | 1. Enter product name in search box 2. Click Search | Search results page displays relevant product cards | High |
| TC_UI_004 | Verify product details page | User is logged in and search results are available | 1. Search product 2. Open first product 3. Check title, price, rating and delivery availability | Product details are visible and delivery status is shown | Medium |
| TC_UI_005 | Verify add to cart functionality | User is logged in and product is in stock | 1. Search product 2. Open product details 3. Click Add to Cart | Product is added to cart and price summary is visible | High |
| TC_UI_006 | Verify checkout with Cash on Delivery | User is logged in, cart has an item, delivery address is valid | 1. Open cart 2. Click Place Order 3. Add address 4. Select COD 5. Confirm order | Order confirmation is displayed with successful order message | Critical |
| TC_UI_007 | Verify cart quantity update | User is logged in and cart has an item | 1. Open cart 2. Increase quantity 3. Validate price summary | Quantity and total amount are updated correctly | Medium |
| TC_UI_008 | Verify delivery pin code check | User is on product details page | 1. Enter valid pin code 2. Click Check Delivery | Delivery estimate or availability message is displayed | Medium |
