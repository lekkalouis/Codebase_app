export const shopifyService = {
  listCustomers() {
    return [{ id: 'c_1001', name: 'Demo Customer', email: 'ops@example.com' }];
  },
  listProducts() {
    return [{ id: 'p_2001', title: 'Traceable Batch Product', sku: 'FLSS-001' }];
  },
  listOrders() {
    return [{ id: 'o_3001', number: '#1001', status: 'open' }];
  }
};
