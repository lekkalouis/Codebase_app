const toNumber = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const config = {
  PORT: toNumber(process.env.PORT, 3000),
  HOST: process.env.HOST || '0.0.0.0',
  FRONTEND_ORIGIN: process.env.FRONTEND_ORIGIN || 'http://localhost:3000',
  SHOPIFY_API_VERSION: process.env.SHOPIFY_API_VERSION || '2025-10',
  SHOPIFY_FLOW_TAG: process.env.SHOPIFY_FLOW_TAG || 'dispatch_flow',
  UI_BOOKING_IDLE_MS: toNumber(process.env.UI_BOOKING_IDLE_MS, 6000),
  UI_COST_ALERT_THRESHOLD: toNumber(process.env.UI_COST_ALERT_THRESHOLD, 250),
  UI_TRUCK_ALERT_THRESHOLD: toNumber(process.env.UI_TRUCK_ALERT_THRESHOLD, 25),
  UI_FEATURE_MULTI_SHIP: process.env.UI_FEATURE_MULTI_SHIP !== 'false'
};
