window.FLSS_NEXTGEN_DATA = {
  datasets: {
    orders: [
      { id: 'ORD-90321', channel: 'Shopify', customer: 'Willow Pantry', tags: 'D2C, Priority', parcels: 2, weightKg: 8.4, courierRef: 'DHL-9281734', status: 'Ready to Pack', updated: '09:14' },
      { id: 'ORD-90318', channel: 'Wholesale', customer: 'Urban Harvest Retail', tags: 'B2B, Pallet', parcels: 6, weightKg: 62.1, courierRef: 'TMS-PP-44713', status: 'Booked', updated: '08:53' },
      { id: 'ORD-90309', channel: 'Manual/FLoCS', customer: 'Aster & Pine', tags: 'Custom Label', parcels: 1, weightKg: 3.1, courierRef: 'ARMX-00418', status: 'Exception', updated: '08:37' }
    ],
    customers: [
      { id: 'CUS-117', name: 'Willow Pantry', tier: 'Gold', region: 'Western Cape', lifetimeValue: 'R 184,220', activeSubs: 3, risk: 'Low' },
      { id: 'CUS-308', name: 'Aster & Pine', tier: 'Silver', region: 'Gauteng', lifetimeValue: 'R 58,900', activeSubs: 0, risk: 'Medium' },
      { id: 'CUS-091', name: 'Urban Harvest Retail', tier: 'Enterprise', region: 'KZN', lifetimeValue: 'R 814,005', activeSubs: 12, risk: 'Low' }
    ],
    retailers: [
      { id: 'RET-201', retailer: 'FreshField Claremont', city: 'Cape Town', region: 'WC South', accountOwner: 'L. Ndlovu', status: 'Active', performance: '112%' },
      { id: 'RET-287', retailer: 'Market Deck Sandton', city: 'Johannesburg', region: 'GP North', accountOwner: 'R. Moyo', status: 'Onboarding', performance: 'N/A' },
      { id: 'RET-154', retailer: 'Grove Foods Umhlanga', city: 'Durban', region: 'KZN Coast', accountOwner: 'S. Naidoo', status: 'At Risk', performance: '83%' }
    ],
    shipments: [
      { id: 'SHP-7782', order: 'ORD-90318', parcels: 6, service: 'Economy Road', bookedAt: '08:55', eta: '2026-03-04', status: 'Manifested' },
      { id: 'SHP-7785', order: 'ORD-90321', parcels: 2, service: 'Express', bookedAt: '09:10', eta: '2026-03-02', status: 'Label Printed' },
      { id: 'SHP-7789', order: 'ORD-90309', parcels: 1, service: 'Express', bookedAt: '-', eta: '-', status: 'Hold - Address Validation' }
    ],
    batches: [
      { id: 'LOT-FG-2403A', sku: 'FLSS-GRN-500', stage: 'Finished Goods', supplierLot: 'ING-CHL-882', bbDate: '2026-09-28', yieldPct: '96%', status: 'Released' },
      { id: 'LOT-ING-8812', sku: 'ING-CHLORELLA', stage: 'Ingredient Lot', supplierLot: 'SUP-CH-22A', bbDate: '2027-01-15', yieldPct: '-', status: 'Quarantine' },
      { id: 'RUN-2026-041', sku: 'FLSS-PROT-1KG', stage: 'Production Run', supplierLot: 'MIXED', bbDate: '2026-12-10', yieldPct: '91%', status: 'In Progress' }
    ],
    workOrders: [
      { id: 'WO-3009', item: 'FLSS Greens 500g', due: '2026-03-03', qty: 1800, line: 'Line A', capacity: '74%', status: 'Scheduled' },
      { id: 'WO-3012', item: 'FLSS Protein 1kg', due: '2026-03-05', qty: 940, line: 'Line B', capacity: '82%', status: 'In Progress' },
      { id: 'WO-3015', item: 'Starter Bundle', due: '2026-03-08', qty: 450, line: 'Kitting', capacity: '39%', status: 'Awaiting Materials' }
    ],
    materials: [
      { id: 'MAT-44', material: 'Compostable Pouch 500g', onHand: 5100, requiredByDate: 6400, variance: -1300, supplier: 'PackLab SA', risk: 'High' },
      { id: 'MAT-19', material: 'Protein Blend Base', onHand: 2200, requiredByDate: 2100, variance: 100, supplier: 'NutraBase', risk: 'Low' },
      { id: 'MAT-27', material: 'Shipping Labels 100x150', onHand: 18000, requiredByDate: 12000, variance: 6000, supplier: 'PrintCore', risk: 'Low' }
    ],
    campaigns: [
      { id: 'CMP-71', campaign: 'March Gut Health', channel: 'Meta Ads', spend: 'R 42,000', revenue: 'R 128,200', roi: '3.05x', status: 'Active' },
      { id: 'CMP-73', campaign: 'Retailer Starter Kit', channel: 'Email', spend: 'R 8,500', revenue: 'R 51,600', roi: '6.07x', status: 'Optimizing' },
      { id: 'CMP-75', campaign: 'Influencer UGC Sprint', channel: 'Social', spend: 'R 19,400', revenue: 'R 44,100', roi: '2.27x', status: 'Review' }
    ],
    domains: [
      { id: 'dom-flss.co.za', registrar: 'Cloudflare', expiry: '2026-10-14', dns: 'Healthy', ssl: 'Valid', owner: 'Digital Team' },
      { id: 'dom-flss.shop', registrar: 'GoDaddy', expiry: '2026-04-01', dns: 'Warning', ssl: 'Valid', owner: 'Ecom Team' },
      { id: 'dom-flss.health', registrar: 'Namecheap', expiry: '2026-03-15', dns: 'Healthy', ssl: 'Expiring 12d', owner: 'Marketing' }
    ],
    trademarks: [
      { id: 'TM-FLSS', jurisdiction: 'ZA', class: '5, 29, 30', filed: '2024-07-20', renewal: '2034-07-20', status: 'Registered' },
      { id: 'TM-FLSS NEXTGEN', jurisdiction: 'EU', class: '35, 42', filed: '2025-02-11', renewal: '2035-02-11', status: 'Pending Examination' },
      { id: 'TM-FLoCS', jurisdiction: 'US', class: '9, 42', filed: '2023-09-02', renewal: '2033-09-02', status: 'Opposition Window' }
    ],
    employees: [
      { id: 'EMP-04', name: 'Noluthando Khumalo', role: 'Ops Manager', team: 'Operations', shift: 'Morning', permissions: 'Admin', training: '97%' },
      { id: 'EMP-17', name: 'Liam Jacobs', role: 'Dispatch Lead', team: 'Logistics', shift: 'Midday', permissions: 'Editor', training: '84%' },
      { id: 'EMP-33', name: 'Aaliyah Daniels', role: 'Quality Analyst', team: 'Traceability', shift: 'Evening', permissions: 'Reviewer', training: '91%' }
    ],
    atlasDocs: [
      { id: 'AT-120', title: 'SOP: Batch Release & Recall Workflow', owner: 'QA', version: 'v2.8', updated: '2026-02-26', status: 'Approved' },
      { id: 'AT-138', title: 'Systems Map: Shopify → FLoCS → MRP', owner: 'Engineering', version: 'v1.4', updated: '2026-02-24', status: 'Draft' },
      { id: 'AT-141', title: 'Policy: Advertising Claims Governance', owner: 'Compliance', version: 'v1.1', updated: '2026-02-20', status: 'Approved' }
    ]
  },
  sections: [
    { title: 'NextGen Home', icon: 'fa-gauge-high', items: ['Overview','Activity Feed','Quick Actions','System Health'] },
    { title: 'Dispatch', icon: 'fa-truck-fast', items: ['Dispatch Board','Pack & Scan','Multi-Parcel Planner','Bookings','Labels/Print Queue','Collections','Returns/RMA','Exceptions'] },
    { title: 'Orders', icon: 'fa-cart-shopping', items: ['Orders (Shopify)','Draft Orders (Wholesale/Agents)','Manual Capture (FLoCS)','Customers','Refunds/Adjustments','Automations (rules mock)'] },
    { title: 'Products & Inventory', icon: 'fa-boxes-stacked', items: ['SKU Master','BOM/Recipes','Stock Take','Warehouses/Locations','Batch/Lot Tracking (ties into Traceability)','Quality Checks','Suppliers/Purchasing'] },
    { title: 'Traceability', icon: 'fa-link', badge: 'NEW', items: ['Batch Register','Ingredient Lots (supplier lots + COA placeholder)','Production Runs (inputs→outputs, yield, waste)','Finished Goods Lots (lot codes, BB/expiry)','Recall Simulator (lot → impacted orders/customers/retailers)','Trace Reports (export/PDF mock)'] },
    { title: 'Production & MRP', icon: 'fa-industry', badge: 'NEW', items: ['MRP Dashboard (demand vs supply)','Demand Forecast (placeholder)','Material Requirements (ingredients/packaging needed by date)','Production Planner (calendar + work orders)','Work Orders','Capacity & Throughput','Variance & Waste','Procurement Suggestions'] },
    { title: 'Retailer Locator & Manager', icon: 'fa-store', badge: 'NEW', items: ['Retailer Map','Retailer Directory','Onboarding','Store Performance','Agent Territories','Retailer Promotions'] },
    { title: 'Analytics & Reports', icon: 'fa-chart-column', badge: 'NEW', items: ['Sales Dashboard','Ops Metrics (time saved, errors)','Shipping Analytics','Production Analytics','Custom Report Builder','Data Quality Monitor'] },
    { title: 'Finance / Statements', icon: 'fa-file-invoice-dollar', badge: 'NEW', items: ['Statements Inbox','Reconciliation','VAT/Tax Snapshot','P&L Snapshot','Pricing & Margins'] },
    { title: 'Marketing (Socials + Advertising)', icon: 'fa-bullhorn', badge: 'NEW', items: ['Social Scheduler','Post Library','Ads Manager (placeholders)','Campaign ROI','Partner/Influencer Tracker','UTM Builder'] },
    { title: 'Digital Assets (Domains, CI)', icon: 'fa-globe', badge: 'NEW', items: ['Domains (expiry, DNS status mock)','Corporate Identity Hub (logos, palettes, templates)','Labelling Manager (label versions, approvals, print assets)','Brand Asset Library','Link Hub / Shortlinks'] },
    { title: 'IP Portfolio', icon: 'fa-scale-balanced', badge: 'NEW', items: ['Trademarks (status, classes, renewal dates)','Patents (if any; placeholder)','Contracts & Licensing (placeholder)','Evidence Vault (files placeholder)'] },
    { title: 'Subscriptions', icon: 'fa-rotate', badge: 'NEW', items: ['Subscription Products','Customer Subscriptions','Churn/Retention','Plans & Pricing'] },
    { title: 'Employee Manager', icon: 'fa-users', badge: 'NEW', items: ['Employee Directory','Roles & Permissions (RBAC mock)','Shifts / Attendance (placeholder)','Training / SOP Acknowledgements (ties into Atlas)'] },
    { title: 'Internal Atlas', icon: 'fa-book-open', badge: 'NEW', items: ['Atlas Home (searchable knowledge hub)','SOP Library','Systems Map (architecture diagram placeholder)','Compliance & Policies','Release Notes / Change Log'] },
    { title: 'Admin & Settings', icon: 'fa-sliders', items: ['Integrations (Shopify, ParcelPerfect, PrintNode, Xero/A2X, Katana mirror)','Webhooks Monitor','Feature Flags','Notifications Templates','Tags & Taxonomy Manager','System Health'] }
  ]
};
