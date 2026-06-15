import { expect, request, test } from '@playwright/test';
import { createApiContext, loginAndGetToken } from '../../utils/apiClient';
import { testData } from '../../config/testData';

test.describe('E-commerce API tests', () => {
  test('TC_API_001 - login API returns auth token', async () => {
    // Direct Playwright API context example. Other tests use the reusable helper.
    const api = await request.newContext({
      baseURL: process.env.API_BASE_URL || 'https://api.your-flipkart-like-app.example',
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });

    const response = await api.post('/auth/login', {
      data: {
        email: testData.user.email,
        password: testData.user.password
      }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toMatchObject({
      token: expect.any(String),
      user: {
        email: testData.user.email
      }
    });

    await api.dispose();
  });

  test('TC_API_002 - product search API returns matching products', async () => {
    const api = await createApiContext();

    const response = await api.get('/products/search', {
      params: { q: testData.product.searchTerm }
    });

    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(Array.isArray(body.products)).toBeTruthy();
    expect(body.products.length).toBeGreaterThan(0);
    expect(body.products[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title: expect.any(String),
        price: expect.any(Number)
      })
    );
  });

  test('TC_API_003 - product details API returns selected product', async () => {
    const api = await createApiContext();
    const searchResponse = await api.get('/products/search', {
      params: { q: testData.product.searchTerm }
    });
    const { products } = await searchResponse.json();

    const response = await api.get(`/products/${products[0].id}`);

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toEqual(
      expect.objectContaining({
        id: products[0].id,
        title: expect.any(String),
        price: expect.any(Number),
        stock: expect.any(Number)
      })
    );
  });

  test('TC_API_004 - add to cart API adds product successfully', async () => {
    const publicApi = await createApiContext();
    const token = await loginAndGetToken(publicApi, testData.user.email, testData.user.password);
    const api = await createApiContext(token);

    const response = await api.post('/cart/items', {
      data: {
        productId: 'PROD-1001',
        quantity: 1
      }
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toMatchObject({
      message: 'Item added to cart',
      cart: {
        items: expect.any(Array)
      }
    });
  });

  test('TC_API_005 - checkout API creates an order', async () => {
    const publicApi = await createApiContext();
    const token = await loginAndGetToken(publicApi, testData.user.email, testData.user.password);
    const api = await createApiContext(token);

    const response = await api.post('/orders/checkout', {
      data: {
        address: testData.address,
        paymentMethod: testData.payment.method
      }
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toEqual(
      expect.objectContaining({
        orderId: expect.any(String),
        status: 'PLACED',
        totalAmount: expect.any(Number)
      })
    );
  });

  test('TC_API_006 - invalid token cannot add item to cart', async () => {
    const api = await createApiContext('invalid-token');

    const response = await api.post('/cart/items', {
      data: {
        productId: 'PROD-1001',
        quantity: 1
      }
    });

    expect(response.status()).toBe(401);
    const body = await response.json();
    expect(body).toMatchObject({
      error: expect.stringMatching(/unauthorized|invalid token/i)
    });
  });
});
