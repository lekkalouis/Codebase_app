import { config } from '../config.js';

export const configRoutes = {
  'GET /config': async () => ({
    frontendOrigin: config.FRONTEND_ORIGIN,
    ui: {
      bookingIdleMs: config.UI_BOOKING_IDLE_MS,
      costAlertThreshold: config.UI_COST_ALERT_THRESHOLD,
      truckAlertThreshold: config.UI_TRUCK_ALERT_THRESHOLD,
      featureMultiShip: config.UI_FEATURE_MULTI_SHIP
    }
  })
};
