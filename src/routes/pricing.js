import { pricingStore } from '../services/pricing-store.js';

export const pricingRoutes = {
  'GET /pricing': async () => ({ prices: pricingStore.list() }),
  'POST /pricing': async (ctx) => ({ price: pricingStore.set(ctx.body) })
};
