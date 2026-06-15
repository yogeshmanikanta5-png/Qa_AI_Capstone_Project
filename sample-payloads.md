# Sample API JSON Payloads

## Login API

Request:

```json
{
  "email": "test.user@example.com",
  "password": "Password@123"
}
```

Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "USR-1001",
    "name": "Test User",
    "email": "test.user@example.com"
  }
}
```

## Product Search API

Request:

```http
GET /products/search?q=iphone
```

Response:

```json
{
  "products": [
    {
      "id": "PROD-1001",
      "title": "Apple iPhone 15",
      "price": 69999,
      "rating": 4.6
    }
  ]
}
```

## Product Details API

Response:

```json
{
  "id": "PROD-1001",
  "title": "Apple iPhone 15",
  "price": 69999,
  "rating": 4.6,
  "stock": 24,
  "delivery": {
    "pinCode": "560001",
    "estimatedDays": 2
  }
}
```

## Add To Cart API

Request:

```json
{
  "productId": "PROD-1001",
  "quantity": 1
}
```

Response:

```json
{
  "message": "Item added to cart",
  "cart": {
    "cartId": "CART-9001",
    "items": [
      {
        "productId": "PROD-1001",
        "quantity": 1,
        "price": 69999
      }
    ]
  }
}
```

## Checkout API

Request:

```json
{
  "address": {
    "fullName": "Test User",
    "phone": "9876543210",
    "pinCode": "560001",
    "addressLine1": "221 QA Automation Street",
    "city": "Bengaluru",
    "state": "Karnataka"
  },
  "paymentMethod": "COD"
}
```

Response:

```json
{
  "orderId": "ORD-7001",
  "status": "PLACED",
  "totalAmount": 69999
}
```

## Invalid Token Response

```json
{
  "error": "Unauthorized: invalid token"
}
```
