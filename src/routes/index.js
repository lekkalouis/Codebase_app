import { statusRoutes } from './status.js';
import { configRoutes } from './config.js';
import { parcelPerfectRoutes } from './parcelperfect.js';
import { shopifyRoutes } from './shopify.js';
import { pricingRoutes } from './pricing.js';
import { printNodeRoutes } from './printnode.js';
import { alertsRoutes } from './alerts.js';
import { traceabilityRoutes } from './traceability.js';

export const routes = {
  ...statusRoutes,
  ...configRoutes,
  ...parcelPerfectRoutes,
  ...shopifyRoutes,
  ...pricingRoutes,
  ...printNodeRoutes,
  ...alertsRoutes,
  ...traceabilityRoutes
};
