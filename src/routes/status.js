export const statusRoutes = {
  'GET /healthz': async () => ({ ok: true, service: 'flss', ts: new Date().toISOString() }),
  'GET /statusz': async () => ({
    status: 'healthy',
    integrations: { shopify: 'configured', parcelperfect: 'configured', printnode: 'optional', smtp: 'optional' }
  })
};
