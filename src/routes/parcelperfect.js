import { parcelPerfectService } from '../services/parcelperfect.js';

export const parcelPerfectRoutes = {
  'POST /pp': async (ctx) => parcelPerfectService.quote(ctx.body || {}),
  'GET /pp/place': async (ctx) => ({ results: parcelPerfectService.placeLookup(ctx.query.get('q')) })
};
