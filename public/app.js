const modules = [
  { path: '/', title: 'Dashboard', description: 'Operations KPIs and module launch tiles.' },
  { path: '/scan', title: 'Dispatch Console', description: 'Barcode parsing and booking workflow.' },
  { path: '/ops', title: 'Order Operations Board', description: 'Open order triage and shipment operations.' },
  { path: '/fulfillment-history', title: 'Fulfillment Timeline', description: 'Shipped/delivered/collected streams.' },
  { path: '/contacts', title: 'Customer Directory', description: 'Shopify customer listing and filtering.' },
  { path: '/docs', title: 'Knowledge Hub', description: 'Operator/admin/developer documentation links.' },
  { path: '/flowcharts', title: 'Process Blueprints', description: 'Visual process guidance.' },
  { path: '/flocs', title: 'Sales Order Workbench', description: 'Draft order creation with shipping support.' },
  { path: '/stock', title: 'Inventory Control', description: 'Inventory lookup and stock adjustments.' },
  { path: '/price-manager', title: 'Pricing Control Center', description: 'Tier pricing and sync controls.' },
  { path: '/traceability', title: 'Traceability', description: 'Inspection lifecycle and finished-batch audits.' }
];

const sidebar = document.getElementById('sidebar');
const title = document.getElementById('title');
const description = document.getElementById('description');
const cards = document.getElementById('cards');

const renderSidebar = () => {
  sidebar.innerHTML = `<h1>FLSS Scan Station</h1>${modules
    .map((item) => `<a href="${item.path}" data-link>${item.title}</a>`)
    .join('')}`;
};

const renderCards = async () => {
  const [health, config] = await Promise.all([
    fetch('/api/v1/healthz').then((r) => r.json()),
    fetch('/api/v1/config').then((r) => r.json())
  ]);

  cards.innerHTML = `
    <article class="card"><h3>Service</h3><p>${health.service}</p></article>
    <article class="card"><h3>Status</h3><p>${health.ok ? 'Healthy' : 'Unhealthy'}</p></article>
    <article class="card"><h3>API Base</h3><p><code>/api/v1</code></p></article>
    <article class="card"><h3>Booking Idle</h3><p>${config.ui.bookingIdleMs}ms</p></article>
  `;
};

const setRoute = () => {
  const current = modules.find((item) => item.path === window.location.pathname) || modules[0];
  title.textContent = current.title;
  description.textContent = current.description;

  document.querySelectorAll('[data-link]').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === current.path);
  });
};

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-link]');
  if (!target) return;
  event.preventDefault();
  history.pushState({}, '', target.getAttribute('href'));
  setRoute();
});

window.addEventListener('popstate', setRoute);

renderSidebar();
setRoute();
renderCards();
