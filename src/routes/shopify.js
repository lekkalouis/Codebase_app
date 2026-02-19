import { shopifyService } from '../services/shopify.js';

export const shopifyRoutes = {
  'GET /shopify/customers': async () => ({ customers: shopifyService.listCustomers() }),
  'GET /shopify/products': async () => ({ products: shopifyService.listProducts() }),
  'GET /shopify/orders': async () => ({ orders: shopifyService.listOrders() })
};
