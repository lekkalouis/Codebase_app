export const printNodeRoutes = {
  'POST /printnode/print': async (ctx) => ({ ok: true, message: 'Print job queued', payload: ctx.body || null })
};
