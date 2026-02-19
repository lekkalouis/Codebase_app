export const traceabilityRoutes = {
  'GET /traceability/state': async () => ({ openPOs: 1, pendingInspections: 2, recentCoas: 5, timestamp: new Date().toISOString() }),
  'GET /traceability/lookup': async (ctx) => ({
    batchId: ctx.query.get('batchId') || 'unknown',
    source: 'PO-1001',
    invoice: 'INV-5001',
    status: 'released'
  })
};
