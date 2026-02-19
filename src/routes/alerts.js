export const alertsRoutes = {
  'POST /alerts/book-truck': async (ctx) => ({ ok: true, message: 'Truck alert sent', details: ctx.body || null })
};
